<script>
import store from "../data/store.js";

export default {
    props: ["card"],

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
    <div class="col-12 col-sm-6 col-md-4 col-lg-2 px-2 py-1 mb-2">
        <div class="m-0 h-100 p-1 bg-warning">
            <img src="../assets/batman.jpeg" class="card-img-top img-fluid" alt="">
            <h5 class="card-text my-fs py-2 text-center">Titolo in lingua originale: {{ card.original_title }}</h5>
            <h6 class="card-text my-fs py-2s text-center text-dark">Titolo: {{ card.title }}</h6>
            <h6 class="card-text my-fs py-2s text-center text-dark">Voti: {{ card.vote_average }}</h6>
            <h6 class="card-text my-fs py-2s text-center text-dark">Lingua :{{ card.original_language }}</h6>
        </div>
    </div>

</template>

<style></style>