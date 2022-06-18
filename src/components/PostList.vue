<template>
  <div>
    <h4>Список пользователей</h4>
    <PostItem :post="post" v-for="post in posts" />
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
