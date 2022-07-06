<template>
    <div>
        <div class="b-head">
            <div class="b-logo">
                Logo
            </div>
            <div class="b-menu">
                <a href="#">link 1</a>
                <a href="#">link 2</a>
                <a href="#">link 3</a>
            </div>
        </div>
        <div class="b-container">
            <div class="b-form">
                <h3>Создание поста</h3>
                <form @submit.prevent>
                    <input 
                        type="text" 
                        placeholder="Название" 
                        :value="title"
                        @input=" title = $event.target.value"
                    >
                    <input
                        type="text" 
                        placeholder="Текст" 
                        v-model="body"
                    >
                    <button @click="createPost">Создать</button>
                </form>
            </div>
            <div class="b-posts">
                <div class="b-post" v-for="post in posts" :key="post.id">
                    <div class="post__head">
                        <div class="post__title">
                            {{ post.title }}
                        </div>
                        <div class="post__btns">
                            <button>Удалить</button>
                        </div>
                    </div>
                    <div class="post__body">
                        {{ post.body }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            props: {},
            posts: [
                {id: 1, title: 'Title1', body: 'body1'},
                {id: 2, title: 'Title2', body: 'body2'},
                {id: 3, title: 'Title3', body: 'body3'},
                {id: 4, title: 'Title4', body: 'body4'},
            ],
            title: '',
            body: '',
        }
    },
    methods: {
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body
            }
            this.posts.push(newPost)
            this.title = ''
            this.body = ''
        }
    }
}
</script>
<style>
    .b-head {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 2px solid #0c472d;
        border-radius: 5px;
        padding: 20px 10px;
        margin-bottom: 30px;
    }
    /*----------*/
    .b-menu {}
    .b-menu a {
        display: inline-block;
        padding: 5px 10px;
    }
    /*----------*/
    .b-post {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #0c472d;
    }
    .b-post .post__head {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    /*----------*/
    /*----------*/
</style>