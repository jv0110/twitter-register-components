<template>
  <div class="wrapper">
    <div class="container">
      <div class="img-container">
        <img loading="lazy" src="/images/register_banner.jpg" alt="register banner">
      </div>
      <section class="content">
        <header class="sec-header">
          <img loading="lazy" src="/images/twitter.png" alt="twitter icon">
        </header>
        <h1 class="heading">
          Acontecendo agora
        </h1>
        <h2 class="heading sub">
          Inscreva-se no Twitter hoje mesmo.
        </h2>
        <div class="buttons">
          <button type="button" class="btn">
            Inscrever-se
          </button>
          <button type="button" class="btn">
            Entrar
          </button>
        </div>
      </section>
    </div>
    <div class="modal-wrapper" v-if="showModal">
      <component :is="currentComponent" @comp-name="compName" class="box"></component>
    </div>
  </div>
</template>
<script>
import step1 from './step1'
import step2 from './step2'
import step3 from './step3'

export default {
  name: 'Register',
  components: {
    step1,
    step2,
    step3,
    showModal: false
  },
  data () {
    return {
      currentComponent: 'step1'
    }
  },
  methods: {
    compName (name) {
      this.currentComponent = name.toLowerCase()
    }
  }
}
</script>
<style lang="scss" scoped>
  .modal-wrapper{
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .box{
      border-radius: 10px;
      width: 580px;
      height: 500px;
      margin: 0 auto;
      background-color: #FFFFFF;
      overflow: hidden;
    }
  }
</style>
