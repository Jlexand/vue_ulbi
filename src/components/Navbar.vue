<template>
    <h1 @click="$router.push('/')">Vue 3</h1>
    <div class="b-menu">
        <!-- <router-link to="/posts">Посты</router-link>
        <router-link to="/about">О нас</router-link> -->
        <div>
            <MyButton @click="$router.push('/posts')">
                Посты
            </MyButton>
            <MyButton @click="$router.push('/store')">
                Посты Store
            </MyButton>
            <MyButton @click="$router.push('/about')">
                О нас
            </MyButton>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>
    .b-menu {
        display: flex;
        margin-bottom: 20px;
    }
    .b-menu a {
        font-weight: 500;
        margin: 0 10px;
    }
</style>