<template>
    <div class="app">
        <h1>Страница с постами 1:16 min</h1>
        <MyButton @click="showDialog">Создать пост</MyButton>
        <ModalWindow v-model:show="dialogVisible">
            <PostForm @create="createPost"/>
        </ModalWindow>
        <PostList @remove="removePost" v-if="posts.length > 0" :posts="posts"/>
        <div v-else>
            <span>
                Посты отсутствуют(
            </span>
        </div>
    </div>
</template>
<script>
	import PostForm from '@/components/PostForm.vue'
    import PostList from '@/components/PostList.vue'
import MyButton from './components/UI/MyButton.vue'
    export default {
		components: {
    PostForm,
    PostList,
    MyButton
},
        data() {
            return {
                posts: [
                    {id: 1, title: 'js 1', body: 'Описание 1' },
                    {id: 2, title: 'js 2', body: 'Описание 2' },
                ],
                dialogVisible: false,
            }
        },
        methods: {
            createPost(post) {
                this.posts.push(post)
                this.dialogVisible = false
            },
            removePost(post) {
                this.posts =  this.posts.filter(p => p.id !== post.id)
            },
            showDialog() {
                this.dialogVisible = true
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
</style>