<template>
<section class="section">

<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand ">
    <a class="navbar-item" href="/">
        <img src="https://www.logolynx.com/images/logolynx/25/2555b0799248332846cdab5d8efacf68.jpeg" alt="" width="70" >
        
    </a>
     <a role="button" class="navbar-burger is-active"  aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"  >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
    <div id="navbarBasicExample" class="navbar-menu is-active">
        <div class="navbar-start">           
            <router-link to="/allMovies" class="navbar-item">All movies</router-link>
            <router-link to="/addMovie" class="navbar-item">Add movie</router-link>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                    More
                </a>

                <div class="navbar-dropdown">
                    <router-link to="/about" class="navbar-item">About</router-link>
                    <hr class="navbar-divider">                 
                    <router-link to="/contact" class="navbar-item">Contact Us</router-link>  
                </div>
            </div>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    
                    <strong><router-link to="/signUp" class="navbar-item button is-primary">Sign Up</router-link></strong>
                   
                    <strong><router-link to="/signIn" class="navbar-item button is-light">Sign In</router-link></strong>
                  
                </div>
            </div>
        </div>
    </div>
</nav>
</section>

</template>
<script>
export default {
    name: 'Nav'
 
}

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});


</script>
<style lang="scss" scoped>
  .section{
    padding-top:1px!important
  }
  nav {

    a {
      font-weight: bold;
      color: #2c504d;

      &.router-link-exact-active {
        color: #42b983;
      
        }
    }
    a:hover, &.router-link:hover {
      color: #42b983;
        }
    
  } 
  
</style>