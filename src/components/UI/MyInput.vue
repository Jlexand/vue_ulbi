<template>
    <input type="text" :value="modelValue" @input="inputUpdate">
</template>
<script>
export default {
    name: 'MyInput',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        inputUpdate(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style scoped>
    input {
        display: block;
        box-sizing: border-box;
        width: 100%;
        padding: 10px 20px;
        border: 1px solid #0c472d;
        border-radius: 5px;
        font-size: 16px;
        color: #0c472d;
        margin-bottom: 20px;
    }
</style>