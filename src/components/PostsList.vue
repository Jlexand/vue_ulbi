<template>
    <div class="b-posts">
        <PostItem 
            v-for="post in posts"
            :post="post"
            :key="post.id"
        />
    </div>
</template>
<script>
import PostItem from '@/components/PostItem.vue';
    export default {
    components: {
        PostItem,
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
}
</script>