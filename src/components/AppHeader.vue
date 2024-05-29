<script>
import store from "../data/store.js";
// import axios from "axios";

export default {
    data() {
        return {
            store,

        }
    },

    methods: {
        foundMovies() {
            const options = {
                method: 'GET',
                url: this.store.url,
                params: { query: this.store.searchInput, language: 'it-IT' },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDc2ZTE3MjRkMmRkN2Y3MmJlMWNlZmU2ZmM1ZDE2NSIsInN1YiI6IjY2NTcyMDI3MDI4NjVlY2VhYTU5OTY4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oertjiXySwkWZydHwZLqFcz-MMuUUC0oCzK4koKkyzo'
                },
            };

            axios
                .request(options)
                .then((response) => {
                    console.log(response.data.results);
                    this.store.movieList = response.data.results
                    console.log(this.store.movieList)
                    console.log(options)
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
    },
}
</script>

<template>
    <header class="bg-warning p-2 text-center">
        <h1 class="m-0">Cerca il tuo film</h1>
        <input type="text" placeholder="Cerca" v-model="store.searchInput">
        <button @click="foundMovies()">Cerca</button>
    </header>
</template>

<style></style>