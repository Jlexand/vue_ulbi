<template>
    <div class="post">
        <div>
            {{ post.id }}
        </div>
        <strong>
            {{ post.title }}
        </strong>
        <span>
            {{ post.body }}
        </span>
        <div>
            <MyButton @click="$router.push(`/posts/${post.id}`)">Открыть</MyButton>
            <MyButton @click="$emit('remove', post)">Удалить</MyButton>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin: 10px;
}
</style>