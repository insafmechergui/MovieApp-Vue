<template>
    <div class="signUp ">
            <h1 class="title">Sign Up</h1>
        <div class="field">
            <label class="label">Name</label>
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Name">
                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
                </span>
            </p>
        </div>
        <div class="field">
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
                Sign Up
                </button>
            </p>
        </div>
    </div>
</template>
<style>
.signUp{
        padding-top:3vh;
        height:100vh;
        background-image: url('https://ak.picdn.net/shutterstock/videos/139450/thumb/1.jpg?i10c=img.resize(height:240)');
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
