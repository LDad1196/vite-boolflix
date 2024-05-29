<script>
import store from "../data/store.js";
import CreatedMovies from './CreatedMovies.vue'

export default {
    components: {
        CreatedMovies,
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
        <section id="card" class="container bg-white p-4">
            <div class="content-card text-white">
                <div class="row m-0 justify-content-between">
                    <CreatedMovies v-for="list in store.movieList" :card="list" />
                </div>
            </div>
        </section>
    </main>
</template>

<style></style>