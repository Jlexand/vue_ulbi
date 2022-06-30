<template>
    <div class="app">
        <h1>Страница с постами 1:16 min</h1>
        <MyButton @click="showDialog">Создать пост</MyButton>
        <MySelect 
            v-model="selectedSort"
            :options="sortOptions"
        />
        <MyInput
            v-model="searchQuery"
            placeholder="Поиск"
        />
        <ModalWindow v-model:show="dialogVisible">
            <PostForm @create="createPost"/>
        </ModalWindow>
        <div v-if="!isPostLoading">
            <PostList @remove="removePost" v-if="posts.length > 0" :posts="soertedAndSearchedPosts"/>
            <div v-else>
                <span>
                    Посты отсутствуют(
                </span>
            </div>
        </div>
        <div v-else>
            Загрузка...
        </div>
        <div class="b-page-list">
            <span 
                v-for="pageNumber in totalPages" 
                :key="pageNumber"
                class="page-list__item"
                :class="{
                    'page-list__item--active': page === pageNumber
                }"
                @click="changePage(pageNumber)"
            >
                {{ pageNumber }}
            </span>
        </div>
    </div>
</template>
<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import MyButton from './components/UI/MyButton.vue'
import MySelect from './components/UI/MySelect.vue'
import MyInput from './components/UI/MyInput.vue'
import axios from 'axios'
    export default {
		components: {
    PostForm,
    PostList,
    MyButton,
    MySelect,
    MyInput
},
        data() {
            return {
                posts: [],
                dialogVisible: false,
                isPostLoading: false,
                selectedSort: '',
                page: 1,
                limit: 10,
                totalPages: 0,
                sortOptions: [
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ],
                searchQuery: '',
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
            changePage(pageNumber) {
                this.page = pageNumber
            },
            async fetchPosts() {
                try{
                    this.isPostLoading = true
                        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                            params: {
                                _page: this.page,
                                _limit: this.limit,
                            }
                        })
                        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
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
        },
        computed: {
            sortedPosts() {
                return [...this.posts].sort((post1, post2)=>{
                    return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
                })
            },
            soertedAndSearchedPosts() {
                return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
            }
        },
        watch: {
            page() {
                this.fetchPosts();
            }
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
    .b-page-list {
        margin-top: 20px;
    }
    .b-page-list .page-list__item {
        box-sizing: border-box;
        padding: 10px;
        margin: 0 0px 10px;
        border: 1px solid #4d4848;
        font-size: 14px;
        font-weight: 600;
    }
    .b-page-list .page-list__item--active {
        border-color: aquamarine;
    }
</style>