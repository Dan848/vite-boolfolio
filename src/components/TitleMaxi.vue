<template>
    <div class="title-maxi d-flex justify-content-center align-items-center">
        <div class="display-1 fw-bolder d-inline align-middle m-0 p-0">
            <span class="text-bg-primary ps-3 rounded-start-3">PRO</span><span class="text-bg-secondary pe-3 rounded-end-3">JECT</span>
            <!-- <span class="text-primary">PRO</span><span class="text-secondary">JECT</span> -->
        </div>
        <div class="img-box ms-2">
            <img class="img-fluid" :src="store.imgStartUrl + '/img/logo.png'" alt="logo">
        </div>
    </div>
</template>

<script>
import { store } from "../data/store";
    export default {
        name: "TitleMaxi",
        data() {
        return {
        store
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>