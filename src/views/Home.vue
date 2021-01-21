<template>
<div class="home">
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Films, séries TV et bien plus en illimité.
          <p class="small">
          Où que vous soyez. Annulez à tout moment.
          </p> 
        </h1>
        <div class="button-block">
          Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.           
          <div class="columns">
            <div class="column control is-three-quarters has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email">
              <span class="icon is-small is-left ">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right ">
                <i class="fas fa-check is-success"></i>
              </span>
            </div>
            <div class="column">
            <button class="button is-success ">Commencer</button>
            </div>
          </div>
        </div>   
      </div>
    </div>
  </section>
</div>
</template>
<script>

export default {
  name: 'home',
  components: {
  }
}
</script>
<style lang="scss" scoped>

  .hero {    
    text-align: center;
    background-image: url('https://cdn.auth0.com/blog/vue-meetup/event-banner.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .small{
    font-size: medium;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -200%;
    .button {
      margin-right: 50px;
      padding-left: 50px;
      padding-right: 50px;
    }
    
  }
 .control.has-icons-left .icon, .control.has-icons-right .icon{
   
   height: 4em !important;
   margin-right: 5px;
   margin-left: 5px;
      color: #42b983;

    }

</style>