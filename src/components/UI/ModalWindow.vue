<template>
    <div class="b-modal-window" v-if="show" @click="hideDialog">
        <div @click.stop class="modal-window__inner">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import toggleMixin from '@/mixins/toggleMixin';

    export default {
        name: 'ModalWindow',
        mixins: [toggleMixin],
        mounted() {
            console.log("dialog mounted")
        }
    }
</script>
<style scoped>
    .b-modal-window {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #0000006e;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .b-modal-window .modal-window__inner {
        box-sizing: border-box;
        width: 100%;
        max-width: 500px;
        background: #ffffff;
        padding: 20px;
        border-radius: 5px;
    }
</style>