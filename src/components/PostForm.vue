<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        40 min
        <input 
            v-model="post.title"
            class="input" 
            type="text" 
            placeholder="Название"
        >
        <input 
            v-model="post.body"
            class="input" 
            type="text" 
            placeholder="Описание"
        >
        <button 
            @click="createPost"
        >
        Создать
        </button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost(e) {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: '',
            }
        }
    }
}
</script>
<style>
.input {
    width: 100%;
    border: 1px solid teal;
    padding: 5px 10px;
    margin: 5px;
}
form {
    display: flex;
    flex-direction: column;
}
button {
    margin: 5px;
    padding: 10px;
    align-self: flex-end;
    background: none;
    color: teal;
    border: 1px solid teal;
}
</style>