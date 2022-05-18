<template>
    <input class="input" type="text" :value="modelValue" @input="updateInput">
</template>
<script>
    export default {
        name: 'my-input',
        props: {
            modelValue: [String, Number]
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>
<style>
.input {
    width: 100%;
    border: 1px solid teal;
    padding: 5px 10px;
    margin: 5px;
}
</style>