<template>
    <div class="signIn ">
        <div class="field">
            <h1 class="title">Sign In</h1>
            <label class="label">Email</label>
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Email">
                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <label class="label">Password</label>

            <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password">
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success">
                Sign In
                </button>
            </p>
        </div>
    </div>
</template>
<style>
.signIn{
        padding-top:3vh;
        height:100vh;
        background-image: url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2luZW1hfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
.field{
    width:30%;
    margin:auto;
   
}        
    h1,label{
        color:white;
    }
</style>
