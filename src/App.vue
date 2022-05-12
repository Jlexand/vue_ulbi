<template>
    <div class="app">
        <form @submit.prevent>
            <h4>Создание поста</h4>
            <input 
                v-bind:value="title" 
                @input="title = $event.target.value"
                class="input" 
                type="text" 
                placeholder="Название"
            >
            <input 
                v-bind:value="body" 
                @input="body = $event.target.value"
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

        <div class="post" v-for="post in posts">
            <div>
                <strong>Название</strong> {{post.title}}
            </div>
            <div>
                <strong>Название</strong> {{post.body}}
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                posts: [
                    {id: 1, title: 'js 1', body: 'Описание 1' },
                    {id: 2, title: 'js 2', body: 'Описание 2' },
                    {id: 3, title: 'js 3', body: 'Описание 3' },
                    {id: 3, title: 'js 4', body: 'Описание 3' },
                ],
                title: '',
                body: '',
            }
        },
        methods: {
            createPost() {
                const newPosts = {
                    id: Date.now(),
                    title: this.title,
                    body: this.body,
                }
                this.posts.push(newPosts);
                this.title = '';
                this.body = '';
            }
        },
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .app {
        padding: 20px;
    }
    .post {
        padding: 15px;
        border: 2px solid teal;
        margin:10px;
    }
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