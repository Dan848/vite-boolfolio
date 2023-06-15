<template>
  <div class="container mt-5">
    <h2 class="text-center mb-3">Lista Progetti</h2>
    <div class="row row-gap-4">
      <CardUnit v-for="(project, index) in store.projects" :key="index" :project="project" :imgStartUrl="store.imgStartUrl" />
      <!-- Page Nav -->
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><button :class="{ 'page-link': true, 'disabled': store.currentPage === 1 }"
              @click="getProjects(store.currentPage - 1)">&laquo;</button></li>
          <li class="page-item" v-for="n in store.lastPage"><button :class="{ 'page-link': true, 'active': store.currentPage === n }"
              @click="getProjects(n)">{{ n }}</button>
          </li>

          <li class="page-item"><button :class="{ 'page-link': true, 'disabled': store.currentPage === store.lastPage }"
              @click="getProjects(store.currentPage + 1)">&raquo;</button></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store"
import axios from 'axios';
import CardUnit from './CardUnit.vue';
export default {
    name: "CardList",
    components: {
        CardUnit,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getProjects(numPage) {
            axios.get(`${store.apiUrl}/projects`, {
                params: {
                'page': numPage
                }
            }).then((res) => {
                store.projects = res.data.results.data;
                store.currentPage = res.data.results.current_page;
                store.lastPage = res.data.results.last_page;
            })
        }
    },
    mounted() {
        this.getProjects(1);
    }
}
</script>

<style lang="scss" scoped>

</style>