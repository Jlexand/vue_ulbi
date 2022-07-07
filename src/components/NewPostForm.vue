<template>
    <div class="b-form">
        <h3>Создание поста</h3>
        <form @submit.prevent>
            <MyInput 
                placeholder="Название" 
                v-model="post.title"
            />
            <MyInput
                placeholder="Текст" 
                v-model="post.body"
            />
            <MyButton @click="createPost">Создать</MyButton>
        </form>
    </div>
</template>
<script>

    export default {
    data() {
        return {
            post: {
                title: "",
                body: "",
            },
        };
    },
    props: {},
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: ""
            };
        },
    },
}
</script>