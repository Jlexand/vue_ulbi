<template>
    <div class="app">
		<PostForm @create="createPost"/>
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
    export default {
		components: {
			PostForm,
            PostList,
		},
        data() {
            return {
                posts: [
                    {id: 1, title: 'js 1', body: 'Описание 1' },
                    {id: 2, title: 'js 2', body: 'Описание 2' },
                ],
            }
        },
        methods: {
            createPost(post) {
                this.posts.push(post)
            },
            removePost(post) {
                this.posts =  this.posts.filter(p => p.id !== post.id)
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