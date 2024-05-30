<script>
import store from "../data/store.js";

export default {
    name: "CreatedTvSeries",
    props: ["cardTv"],

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
        <div class="m-0 h-100 py-1 bg-warning">
            <img src="../assets/batman.jpeg" class="card-img-top img-fluid" alt="">
            <h6 class="card-text my-fs py-2 text-center">Titolo serie tv in lingua originale:
                {{ cardTv.original_name }}
            </h6>
            <h6 class="card-text my-fs py-2s text-center text-dark">Titolo serie tv: {{ cardTv.name }}</h6>
            <h6 class="card-text my-fs py-2s text-center text-dark">Voti serie tv: {{ cardTv.vote_average }}</h6>
            <h6 class="card-text my-fs py-2s text-center text-dark">Lingua serie tv:{{ cardTv.original_language }}</h6>
        </div>
    </div>

</template>

<style></style>