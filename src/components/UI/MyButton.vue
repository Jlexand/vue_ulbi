<template>
    <button>
        <slot></slot>
    </button>
</template>
<script>
    export default {
        name: 'my-button'
    }
</script>
<style>
    button {
    margin: 5px;
    padding: 10px;
    align-self: flex-end;
    background: none;
    color: teal;
    border: 1px solid teal;
}
</style>