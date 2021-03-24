<template>
  <div class="form-container">
    <header class="header">
      <div class="btn-container">
        <button type="button" class="btn" @click="compName('step2')">Back</button>
      </div>
      <div class="img-container">
        Etapa 3 de 5
      </div>
    </header>
    <h2 class="heading">
      Criar sua conta
    </h2>
    <div class="form-control" @click="compName('step1')">
      <div class="input-items">
        <label for="Name">
          Name
        </label>
      </div>
      <input type="text" name="name" id="Name" v-model="name">
    </div>
    <div class="form-control"  @click="compName('step1')">
      <div class="input-items">
        <label for="Contact">
          {{ contactLabel }}
        </label>
      </div>
      <input type="text" name="phone" class="field contact" v-model="contact">
    </div>
    <div class="text-content">
      <h3 class="heading sub">
        Data de nascimento
      </h3>
    </div>
    <div class="form-control"  @click="compName('step1')">
      <input type="text" name="birth" v-model="birth">
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'step1',
  data () {
    return {
      name: '',
      contact: '',
      birth: '',
      contactLabel: 'Phone'
    }
  },
  mounted () {
    this.initInputs()
  },
  computed: {
    ...mapState([
      'subscribe'
    ])
  },
  methods: {
    compName (name) {
      this.$emit('comp-name', name)
    },
    initInputs () {
      this.name = this.subscribe.name
      this.contact = this.subscribe.contact
      this.birth = `${this.subscribe.day} de ${this.subscribe.month} de ${this.subscribe.year}`
    }
  }
}
</script>
<style lang="scss" scoped>
  .form-container{
    text-align: left;
    padding: 20px;
    .heading{
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
