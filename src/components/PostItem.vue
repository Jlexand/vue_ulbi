<template>
    <div class="post">
        <div>
            <strong>Название</strong> {{post.title}}
        </div>
        <div>
            <strong>Название</strong> {{post.body}}
        </div>
        <div class="post__btns">
            <my-button>Удалить</my-button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true, 
        }
    }
}
</script>