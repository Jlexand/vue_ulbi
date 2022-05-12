<template>
<div>
    <button v-on:click="addLike">Like</button>
    <button @click="addDislike">dislikes</button>
</div>
    <div>
        кол-во лайков: <strong>{{likes}}</strong>
    </div>
    <div>
        Кол-во дизлайков: <strong>{{dislikes}}</strong>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                likes: 0,
                dislikes: 4,
            }
        },
         methods: {
             addLike() {
                 this.likes += 1;
             },
             addDislike() {
                 this.dislikes += 1;
             }
         },
    }
</script>