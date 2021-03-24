<template>
  <div class="form-container">
    <header class="heading">
      <div class="even"></div>
      <div class="img-container">
        <img src="/images/twitter.png" alt="twitter icon">
      </div>
      <div class="btn-container">
        <button type="button" class="btn next" :class="{ disabled: disableButton }" @click="compName('step2')" :disabled="disableButton">Next</button>
      </div>
    </header>
    <h2 class="heading">
      Criar sua conta
    </h2>
    <div class="form-control">
      <div class="input-items">
        <label for="Name">
          Name
        </label>
        <div class="words-counter">
          {{ nameLength }}/{{ nameMaxLength }}
        </div>
      </div>
      <input type="text" name="name" id="Name" v-model="name" :maxlength="nameMaxLength">
    </div>
    <div class="form-control">
      <div class="input-items">
        <label for="Contact">
          {{ contactLabel }}
        </label>
      </div>
      <input type="text" name="phone" class="field contact" v-model="contact">
    </div>
    <button class="change-input" @click="changeContactInput">
      Usar o email
    </button>
    <div class="text-content">
      <h3 class="heading sub">
        Data de nascimento
      </h3>
      <p class="text">
        Isso não será exibido publicamente. Confirme sua própria idade, mesmo se esta conta for de empresa, de um animal de estimação ou outros.
      </p>
    </div>
    <div class="birth">
      <select name="month" class="month" v-model="month">
        <option v-for="(month, index) in months" :key="index" :value="month">
          {{ month }}
        </option>
      </select>
      <select name="day" class="day" v-model="day">
        <option v-for="(day, index) in days" :key="index" :value="day">
          {{ day }}
        </option>
      </select>
      <select name="years" class="year" v-model="year">
        <option v-for="(year, index) in years" :key="index" :value="year">
          {{ year }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
import { mapMutations} from 'vuex'

export default {
  name: 'step1',
  data () {
    return {
      months: ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
      days: [],
      years: [],
      nameMaxLength: 50,
      contactLabel: 'Phone',
      btnDisabled: true
    }
  },
  mounted () {
    this.initDays()
    this.initYears()
  },
  computed: {
    name: {
      get () {
        return this.$store.state.subscribe.name
      },
      set (value) {
        this.$store.commit('updateName', value)
      }
    },
    contact: {
      get () {
        return this.$store.state.subscribe.contact
      },
      set (value) {
        this.$store.commit('updateContact', value)
      }
    },
    month: {
      get () {
        return this.$store.state.subscribe.month
      },
      set (value) {
        this.$store.commit('updateMonth', value)
      }
    },
    year: {
      get () {
        return this.$store.state.subscribe.year
      },
      set (value) {
        this.$store.commit('updateYear', value)
      }
    },
    day: {
      get () {
        return this.$store.state.subscribe.day
      },
      set (value) {
        return this.$store.commit('updateDay', value)
      }
    },
    nameLength () {
      return (this.name.length > 50) ? this.nameMaxLength : this.name.length
    },
    disableButton () {
      return (!this.name.length || !this.contact || !this.month.length || !this.day || !this.year) ? this.btnDisabled : !this.btnDisabled
    }
  },
  methods: {
    ...mapMutations([
      'pushData'
    ]),
    compName (name) {
      this.$emit('comp-name', name)
    },
    initDays () { // initialize days arr
      for (let x = 1; x <= 31; x++) {
        this.days.push(x)
      }
    },
    initYears () { // initialize years arr
      const currentYear = new Date().getFullYear()
      for (let x = currentYear; x >= 1901; x--) {
        this.years.push(x)
      }
    },
    changeContactInput (e) { // change input email to phone and vice-versa if button "Usar email" or "Usar celular" is clicked
      const input = document.querySelector('.field.contact')
      if (input.name === 'phone') {
        input.name = 'email'
        input.type = 'email'
        this.contactLabel = 'Email'
        e.target.textContent = 'Usar o celular'
      } else if (input.name === 'email') {
        input.name = 'phone'
        input.type = 'text'
        this.contactLabel = 'Phone'
        e.target.textContent = 'Usar o email'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .form-container{
    text-align: left;
    padding: 20px;
    .heading{
      display: flex;
      .btn-container{
        flex-grow: 1;
      }
      .img-container{
        flex-grow: 2;
        text-align: right;
      }
      .btn-container{
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      &:not(.sub){
        padding-bottom: 20px;
      }
    }
    .form-control{
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 20px;
      .input-items{
        display: flex;
        padding: 5px;
        label{
          flex-grow: 1;
          text-align: left;
        }
      }
      input{
        width: 100%;
      }
    }
    .text-content{
      padding: 20px 0 10px 0;
    }
  }
</style>
