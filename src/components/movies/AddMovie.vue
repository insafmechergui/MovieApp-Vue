<template>
    <div class="addMovie">
        <h1 class="title">Add movie</h1>
        <div class="field">
            <label class="label">Title</label>
            <div class="control">
                <input class="input" type="text" placeholder="Title">
            </div>
        </div>
        <div class="field">
            <label class="label">Plot</label>
            <div class="control">
                <input class="input" type="text" placeholder="Plot">
            </div>
        </div>
       <div class="field">
            <label class="label">Poster</label>
            <div class="control">
                <input type="file" accept="image/*" @change="onChange" />
                <div id="preview">
                    <img v-if="item.imageUrl" :src="item.imageUrl" />
                </div>
            </div>
        </div>
        <div class="field">
            <label class="label">Genre</label>
            <div class="control">
                <div class="select">
                <select>
                    <option>Action</option>
                    <option>Drama</option>
                    <option>Sci-Fi</option>
                    <option>Adventure</option>
                </select>
                </div>
            </div>
        </div>
        <div class="field">
            <label class="label">Year</label>
            <div class="control">
                <input class="input" type="number"  placeholder="Year" >
            </div>
        </div> 
        <div class="field">
            <label class="label">Runtime by minute</label>
            <div class="control">
                <input class="input" type="number" placeholder="Runtime"> 
            </div>
        </div>        
        <div class="field">
            <label class="label">Trailer</label>
            <div class="control">
                <input type="file"/>           
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

<script>
    export default{
        name: 'imageUpload',
        data() {
            return {
            item:{
                //...
                image : null,
                imageUrl: null
            }
            }
        },
        methods: {
            onChange(e) {
            const file = e.target.files[0]
            this.image = file
            this.item.imageUrl = URL.createObjectURL(file)
            }
        }
     } 
</script>
<style>

.addMovie{
    padding-top:3vh;
    background-image: url('https://mewallpaper.com/thumbnail/movies/3201-iron-man-3-movie-hd-image-free-wallpaper.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
    height:100vh;
}
 h1,label{
    color:white !important;
}
.field{
    
    margin:auto;
    text-align:left
}
#preview{
    width:120px;
}
</style>