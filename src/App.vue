<template>
    <div>
        <Header/>
        <div class="b-container">
            <NewPostForm 
                @create="createPost"
            />
            <PostsList 
                :posts="posts"
            />
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import PostsList from '@/components/PostsList.vue';
import NewPostForm from '@/components/NewPostForm.vue';
export default {
    components: {
    Header,
    PostsList,
    NewPostForm
    },
    data() {
        return {
            posts: [
                { id: 1, title: "Title1", body: "body1" },
                { id: 2, title: "Title2", body: "body2" },
                { id: 3, title: "Title3", body: "body3" },
                { id: 4, title: "Title4", body: "body4" },
            ],
        };
    },
    methods: {
        createPost(newPost) {
            this.posts.push(newPost);
            this.title = "";
            this.body = "";
        }
    },
}
</script>
<style>
    /*----------*/

    /*----------*/
</style>