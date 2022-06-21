<template>
    <div class="app">
        <h1>Страница с постами 1:16 min</h1>
        <MyButton @click="showDialog">Создать пост</MyButton>
        <ModalWindow v-model:show="dialogVisible">
            <PostForm @create="createPost"/>
        </ModalWindow>
        <div v-if="!isPostLoading">
            <PostList @remove="removePost" v-if="posts.length > 0" :posts="posts"/>
            <div v-else>
                <span>
                    Посты отсутствуют(
                </span>
            </div>
        </div>
        <div v-else>
            Загрузка...
        </div>
    </div>
</template>
<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import MyButton from './components/UI/MyButton.vue'
import axios from 'axios'
    export default {
		components: {
    PostForm,
    PostList,
    MyButton
},
        data() {
            return {
                posts: [],
                dialogVisible: false,
                isPostLoading: false
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
            },
            async fetchPosts() {
                try{
                    this.isPostLoading = true
                        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
                        this.posts = response.data
                } catch(e) {
                    alert('ошибка')
                } finally {
                    this.isPostLoading = false
                }
            }
        },
        mounted() {
            this.fetchPosts();
        }
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