<template>
  <div>
    <h4>Список пользователей</h4>
    <transition-group name="post-list">
      <PostItem
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
        v-for="post in posts"
      />
    </transition-group>
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
<style>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(80px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>
