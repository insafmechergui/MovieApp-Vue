<template>
  <div class="contact ">
    <h1 class="title">Contact Us</h1>
    
        <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-success" type="text" placeholder="Username">
                <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
                </span>
            </div>
        
        </div>

        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-danger" type="email" placeholder="Email" >
                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
                </span>
            </div>
        </div>

        <div class="field">
        <label class="label">Message</label>
        <div class="control">
            <textarea class="textarea" placeholder="Insert your message" rows="10"></textarea>
        </div>
        </div>

        <div class="field is-grouped">
        <div class="control">
            <button class="button is-link">Submit</button>
        </div>
        <div class="control">
            <button class="button is-link is-light">Cancel</button>
        </div>
        
    </div>
  </div>
</template>
<style lang="scss" scoped>

    .contact{
        padding-top:3vh;
        height:100vh;
        background-image: url('https://ak.picdn.net/shutterstock/videos/2900722/thumb/1.jpg?i10c=img.resize(height:240)');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    h1,label{
        color:white;
    }
    .field{
      
      width:30%;
      text-align:left;
      margin:auto;
    }

</style>