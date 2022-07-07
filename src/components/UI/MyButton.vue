<template>
    <button class="b-btn">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        name: 'MyButton',
    }
</script>
<style>
    .b-btn {
        display: block;
        box-sizing: border-box;
        width: 100%;
        max-width: 150px;
        padding: 10px 20px;
        border: 1px solid #0c472d;
        border-radius: 5px;
        font-size: 16px;
        color: #0c472d;
    }
</style>