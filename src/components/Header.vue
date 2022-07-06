<template>
    <div class="b-head">
            <div class="b-logo">
                Logo
            </div>
            <div class="b-menu">
                <a href="#">link 1</a>
                <a href="#">link 2</a>
                <a href="#">link 3</a>
            </div>
        </div>
</template>
<style>
.b-head {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 2px solid #0c472d;
    border-radius: 5px;
    padding: 20px 10px;
    margin-bottom: 30px;
}
/*----------*/
.b-menu {}
.b-menu a {
    display: inline-block;
    padding: 5px 10px;
}
</style>