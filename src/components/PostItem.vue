<template>
    <div class="post" :key="post.id">
        <strong>
            {{ post.title }}
        </strong>
        <span>
            {{ post.body }}
        </span>
        <MyButton>Удалить</MyButton>
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