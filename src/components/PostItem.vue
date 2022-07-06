<template>
    <div class="b-post">
        <div class="post__head">
            <div class="post__title">
                {{ post.title }}
            </div>
            <div class="post__btns">
                <button>Удалить</button>
            </div>
        </div>
        <div class="post__body">
            {{ post.body }}
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
        }
    }
</script>
<style>
.b-post {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #0c472d;
}
.b-post .post__head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
/*----------*/
</style>