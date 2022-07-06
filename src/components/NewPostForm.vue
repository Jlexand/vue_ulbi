<template>
    <div class="b-form">
        <h3>Создание поста</h3>
        <form @submit.prevent>
            <input 
                type="text" 
                placeholder="Название" 
                v-model="post.title"
            >
            <input
                type="text" 
                placeholder="Текст" 
                v-model="post.body"
            >
            <button @click="createPost">Создать</button>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                post: {
                    title: '',
                    body: '',
                },
            };
        },
        props: {

        },
        methods: {
            createPost() {
                this.post.id = Date.now()
                this.$emit('create', this.post)
                this.post = {
                    title: '',
                    body: ''
                }
            },
        }
    }
</script>