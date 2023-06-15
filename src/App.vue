<template>
  <NavHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<script>
import { store } from "./data/store"
import NavHeader from './components/NavHeader.vue'
import TitleMaxi from "./components/TitleMaxi.vue";
import CardList from "./components/CardList.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
name: 'App',
components: {
    NavHeader,
    TitleMaxi,
    CardList,
    AppFooter,
    AppFooter
},
  data() {
    return {
      store
    }
  },
}
</script>

<style lang="scss" scoped>

</style>