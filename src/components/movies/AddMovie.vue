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
            <label class="label">Poster</label>
            <div class="control">
                <input type="file" accept="image/*" @change="onChange" />
                <div id="preview">
                    <img v-if="item.imageUrl" :src="item.imageUrl" />
                </div>
            </div>
        </div>
        
        <div class="field">
            <label class="label">Year</label>
            <div class="control">
                <input class="input" type="number" >
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
.field{
    width:50%;
    margin:auto;
    text-align:left
}
#preview{
    width:100vh
}
</style>