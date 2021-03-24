<template>
  <div class="wrapper">
    <div class="content-container">
      <div class="banner">
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
          <button type="button" class="btn" @click="openModal">
            Inscrever-se
          </button>
          <button type="button" class="btn btn-white">
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
  name: 'Home',
  components: {
    step1,
    step2,
    step3
  },
  data () {
    return {
      currentComponent: 'step1',
      showModal: false
    }
  },
  methods: {
    compName (name) {
      this.currentComponent = name.toLowerCase()
    },
    openModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>
<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Chango&display=swap');
  .wrapper{
    height: 100vh;
  }
  .content-container{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    height: 100%;
  }
  .banner, .content{
    grid-column: span 12;
  }
  .banner{
    height: 150px;
    @media screen and (min-width: 768px){
      height: 100%;
      grid-column: span 5;
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content{
    text-align: left;
    padding: 30px;
    color: #000000;
    @media screen and (min-width: 768px){
     grid-column: span 7;
    }
    .sec-header{
      padding-bottom: 20px;
    }
    .heading{
      font-family: 'Chango', cursive;
      font-size: 28px;
      @media screen and (min-width: 768px){
        font-size: 38px;
        padding-top: 100px;
      }
      @media screen and (min-width: 992px){
        font-size: 52px;
      }
      &.sub{
        font-size: 18px;
        padding: 30px 0 20px 0;
        @media screen and (min-width: 768px){
          font-size: 26px;
        }
      }
    }
    .buttons{
      display: flex;
      flex-direction: column;
      .btn{
        width: 60%;
        margin-bottom: 10px;
        @media screen and (min-width: 440px){
          width: 280px;
        }
      }
    }
  }
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
