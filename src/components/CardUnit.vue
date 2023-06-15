<template>
    <div class="col-4">
        <!-- Card Start -->
        <router-link :to="{ name: 'project', params: {slug: project.slug}}" class="card shadow border-secondary bg-secondary-subtle">
            <img class="card-img-top" :src="imgStartUrl + project.image" :alt="project.name">
            <!-- Card Body -->
            <div class="card-body">
                <h5 class="card-title">{{ project.name }}</h5>
                <div class="card-text">Realizzato con: <img class="d-inline-block logo-icon" :src="imgStartUrl + project.technology.image" alt=""> {{ project.technology.name }}</div>

                <div class="card-text">Linguaggi usati:
                    <span v-for="(dev_language, index) in project.dev_languages" class="badge rounded-pill text-bg-secondary me-1">
                        <span v-if="dev_language.name.trim().length !== 0">{{ dev_language.name }}</span>
                        <span v-else>ND</span>
                    </span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "CardUnit",
    props: {
        project: String,
        imgStartUrl: String,
    },
    data() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
}

.card {
    transition: transform 0.3s ease-in-out;
    &:hover{
        transform: scale(0.9);
    }
}
.logo-icon{
    width: 25px;
}

</style>