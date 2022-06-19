<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        50 min
        <MyInput
            v-model="newPost.title"
            type="text"
            placeholder="Название"
        />

        <MyInput
            v-model="newPost.body"
            type="text"
            placeholder="Описание"
        />
        <MyButton @click="pushPost">
        Создать
        </MyButton>
    </form>
</template>
<script>
export default {
   data() {
    return {
        newPost: {
            title: '',
            body: '',
        }
    }
   },
   methods: {
    pushPost() {
        this.newPost.id = Date.now()
        this.$emit('create', this.newPost)
        this.newPost = {
            title: '',
            body: '',
            id: '',
        }
    }
   },
}
</script>
<style>
form {
    display: flex;
    flex-direction: column;
}
</style>