<template>
  <div class="container">
    <header class="header">
      <div class="btn-container">
        <button type="button" class="btn" @click="compName('step1')">Back</button>
      </div>
      <div class="img-container">
        <img src="/images/twitter.png" alt="twitter icon">
      </div>
      <div class="btn-container">
        <button type="button" class="btn" @click="compName('step3');">Next</button>
      </div>
    </header>
    <section class="custom">
      <h1 class="heading">
        Personalize sua experiência
      </h1>
      <div class="items">
        <div class="item">
          <h2 class="heading sub">Conecte-se com as pessoas que você conhece</h2>
          <div class="input-container">
            <label for="personsConnect">
              Permita que outras pessoas encontrem sua conta do Twitter pelo número de celular
            </label>
            <input type="checkbox" id="personsConnect" name="personsConnect" checked v-model="personsConnect">
          </div>
        </div>
        <div class="item">
          <h2 class="heading sub">Anúncios personalizados</h2>
          <div class="input-container">
            <label for="customAdds">
              Você sempre verá anúncios no Twitter com base em sua atividade na plataforma. Quando essa configuração estiver ativada, ele poderá personalizar ainda mais os anúncios dos anunciantes do Twitter, dentro e fora da plataforma, combinando sua atividade no Twitter com outras atividades online e informações dos nossos parceiros.
            </label>
            <input type="checkbox" id="customAdds" name="customAdds" checked v-model="customAdds">
          </div>
        </div>
        <div class="item">
          <h2 class="heading sub">Acompanhe onde você vê conteúdo do Twitter na Web</h2>
          <div class="input-container">
            <label for="Location">
              O Twitter usa esses dados para personalizar sua experiência. O histórico de navegação na Web nunca será armazenado com seu nome, e-mail ou número de telefone.
            </label>
            <input type="checkbox" id="Location" name="location" v-model="location">
          </div>
        </div>
        <div class="item">
          <h2 class="heading sub">Personalizar de acordo com sua identidade inferida</h2>
          <div class="input-container">
            <label for="Identity">
              O Twitter sempre personaliza sua experiência de acordo com as informações fornecidas e os dispositivos usados para entrar. Quando essa configuração estiver ativada, o Twitter também poderá personalizar sua experiência de acordo com outras deduções sobre sua identidade, como dispositivos e navegadores não usados para entrar no Twitter ou endereços de e-mail e números de telefone semelhantes àqueles vinculados à sua conta do Twitter.
            </label>
            <input type="checkbox" id="Identity" name="identity" v-model="identity">
          </div>
        </div>
        <div class="item">
          <h2 class="heading sub">Personalizar com base nos lugares onde você esteve</h2>
          <div class="input-container">
            <label for="CustomByLocation">
              O Twitter sempre usa certas informações, como o lugar onde você se inscreveu e sua localização atual, para ajudar a mostrar conteúdo mais relevante para você. Quando esta configuração está ativada, o Twitter também pode personalizar sua experiência de acordo com outros lugares onde você esteve.
            </label>
            <input type="checkbox" id="CustomByLocation" name="customByLocation" v-model="customByLocation">
          </div>
        </div>
        <div class="item">
          <h2 class="heading sub">Permitir o compartilhamento de informações adicionais com parceiros de negócios</h2>
          <div class="input-container">
            <label for="SharingInfo">
              O Twitter sempre compartilha informações com parceiros de negócios para executar e melhorar os próprios produtos. Quando essa opção estiver ativada, o Twitter poderá compartilhar mais informações com os parceiros que colaboram com o funcionamento do Twitter como empresa, o que inclui deixar as atividades de marketing do Twitter em outros sites e aplicativos mais relevantes para você.
            </label>
            <input type="checkbox" id="SharingInfo" name="sharingInfo" checked v-model="sharingInfo">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'step2',
  computed: {
    personsConnect: {
      get () {
        return this.$store.state.accountOptions.personsConnect
      },
      set (value) {
        this.$store.commit('updatePersonsConnect', value)
      }
    },
    customAdds: {
      get () {
        return this.$store.state.accountOptions.customAdds
      },
      set (value) {
        this.$store.commit('updateCustomAdds', value)
      }
    },
    location: {
      get () {
        return this.$store.state.accountOptions.location
      },
      set (value) {
        this.$store.commit('updateLocation', value)
      }
    },
    identity: {
      get () {
        return this.$store.state.accountOptions.identity
      },
      set (value) {
        this.$store.commit('updateIdentity', value)
      }
    },
    customByLocation: {
      get () {
        return this.$store.state.accountOptions.customByLocation
      },
      set (value) {
        this.$store.commit('updateCustomByLocation', value)
      }
    },
    sharingInfo: {
      get () {
        return this.$store.state.accountOptions.sharingInfo
      },
      set (value) {
        this.$store.commit('updateSharingInfo', value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'pushOptions'
    ]),
    compName (name) {
      this.$emit('comp-name', name)
    }
  }
}
</script>
<style lang="scss" scoped>
  .container{
    text-align: left;
    .header{
      display: flex;
      align-items: center;
      padding: 20px;
      text-align: center;
      .img-container{
        flex-grow: 1;
      }
    }
    .heading{
      &.sub{
        font-size: 20px;
        padding: 10px 0;
      }
    }
    .items{
      .item{
        padding-top: 20px;
      }
      .input-container{
        display: flex;
        label{
          flex-grow: 1;
        }
      }
    }
    .custom{
      height: 420px;
      overflow-y: scroll;
      padding: 20px;
    }
  }
</style>
