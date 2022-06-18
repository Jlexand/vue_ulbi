<template>
    <div class="app">
		<PostForm @create="createPost"/>
        <PostList :posts="posts"/>
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