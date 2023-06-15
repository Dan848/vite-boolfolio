<template>
<div class="container mt-5 mb-3">
    <div class="d-flex justify-content-end align-items-center mb-4">
        <h1 class="mb-0  mx-auto text-center"> {{store.project.name}} </h1>
        <div class="img-box logo">
            <img class="img-fluid" :src="store.imgStartUrl + store.project.technology.image" :alt="store.project.technology.name">
        </div>
    </div>
    <div class="d-flex justify-content-center align-items-center">
        <div class="img-show mb-4">
            <img class="img-fluid" :src="store.imgStartUrl + store.project.image" :alt="store.project.name">
        </div>
    </div>


        <p> {{store.project.description}} </p>
    <div class="row mt-5">
        <div class="col">
            <p>Nome Repository: <span class="fw-medium"> {{store.project.repo_name}} </span></p>
            <p>Link Repository: <a :href="store.project.repo_link" class="fw-medium">{{store.project.repo_link}}</a></p>
        </div>
        <div class="col text-end">
            <p class="fw-medium"> {{store.project.fe_be_oriented ? "Front-end" : "Back-end" }}</p>
            <p>Realizzato il: <span class="fw-medium"> {{store.project.created_on}} </span></p>
        </div>
    </div>

</div>
</template>

<script>
import { store } from '../data/store';
import axios from 'axios';
    export default {
        name: "ProjectPage",
        data() {
            return {
            store
            }
        },
        methods: {
        getProject() {
            axios.get(`${store.apiUrl}/projects/${this.$route.params.slug}`).then((res) => {  
                if (res.data.success) {
                store.project = res.data.results;
                }
            })
        }
    },
    mounted() {
        this.getProject();
    }
}
</script>

<style lang="scss" scoped>

</style>