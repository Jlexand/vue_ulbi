<template>
    <div>
        <h3>Список</h3>
        <post-item
            v-for="post in posts"
            :post="post"
        />
    </div>
</template>

<script>
    import PostItem from '@/components/PostItem';
    export default {
        components: {
            PostItem,
        },
        props: {
            posts: {
                type: Array,
                required: true,
            }
        }
    }
</script>

<style scoped>
    .post {
        padding: 15px;
        border: 2px solid teal;
        margin:10px;
    }
</style>