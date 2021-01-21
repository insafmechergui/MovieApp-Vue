<template>
  <div class="contact container">
    <h1 class="title">Contact Us</h1>
    <div id="contactUs" class="container">
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
  </div>
</template>
<style lang="scss" scoped>
    div .contact{
      background-image:url('https://d-tm.ppstatic.pl/kadry/e0/c5/fd5763246e6d16523597d0d8202f.1000.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position:center;
      height:92vh;
      width:200vh;
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