<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: "MyButton",
  data() {
    return {};
  },
};
</script>

<style scoped>
button {
  margin: 5px;
  padding: 10px;
  align-self: flex-end;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>
