<template>
    <TitleMaxi />
    <CardList />
</template>

<script>
import { store } from '../data/store'
import TitleMaxi from '../components/TitleMaxi.vue';
import CardList from '../components/CardList.vue';

    export default {
        name: "ProjectsPage",
        components: {
            TitleMaxi,
            CardList
        },
    data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>