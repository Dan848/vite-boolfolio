<template>
    <header class="bg-primary">
        <nav class="sb-topnav navbar navbar-expand navbar-light container mb-5">
            <!-- Navbar Brand-->
            <a class="navbar-brand ms-3 p-2 fw-medium hover-scale" href="#">Project
            <span><img class="logo-size" :src="store.imgStartUrl + '/img/logo.png'" alt="logo"></span>
            </a>
            <button class="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHeader" aria-controls="collapseHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
            <!-- Navbar Links-->
            <div class="collapse navbar-collapse justify-content-end" id="collapseHeader">    
                <ul class="navbar-nav container ms-auto ms-md-0 me-3 me-lg-4">
                    <!-- Links -->
                    <li v-for="link in store.headerLinks" class="nav-item">
                        <router-link :to="{ name: link.routeName }" class="nav-link active hover-invert">{{ link.text }}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import { store } from "../data/store";
    export default {
        name: "NavHeader",
        data() {
            return {
            store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>