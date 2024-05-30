<script>
import store from "../data/store.js";
import CreatedMovies from './CreatedMovies.vue';
import CreatedTvSeries from "./CreatedTvSeries.vue";

export default {
    components: {
        CreatedMovies,
        CreatedTvSeries,
    },

    data() {
        return {
            store,
        }
    },

    methods: {

    },
}
</script>

<template>
    <main>
        <!-- SEZIONE MOVIES -->
        <section id="card" class="container mb-2">
            <h2 class="m-0 text-center bg-danger"> {{ store.film }} : {{ store.movieList.length }} </h2>
            <div class="content-card text-white">
                <div class="row m-0 justify-content-between flex-no-wrap">
                    <CreatedMovies v-for="list in store.movieList" :card="list" />
                </div>
            </div>
        </section>

        <!-- SEZIONE SERIE TV -->
        <section id="card" class="container">
            <h2 class="m-0 text-center bg-danger"> {{ store.serieTv }} : {{ store.tvList.length }} </h2>
            <div class="content-card text-white">
                <div class="row m-0 justify-content-between">
                    <CreatedTvSeries v-for="list in store.tvList" :cardTv="list" />
                </div>
            </div>
        </section>
    </main>
</template>

<style></style>