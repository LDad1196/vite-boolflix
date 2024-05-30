<script>
import store from "../data/store.js";
import axios from "axios";

export default {
    data() {
        return {
            store,

        }
    },

    methods: {
        //CREO FUNZIONE  PER FILM CHE RICHIAMO AL CLICK DEL BOTTONE
        foundMovies() {
            this.store.film = "Film Trovati";
            const options = {
                method: 'GET',
                //RICHIAMO URL PER I FILM (MOVIES) DA STORE.JS
                url: this.store.url,
                //DICO AL QUERY CHE è UGUALE AL VALORE CHE L'UTENTE DA ALL'INPUT
                params: { query: this.store.searchInput, language: 'it-IT' },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDc2ZTE3MjRkMmRkN2Y3MmJlMWNlZmU2ZmM1ZDE2NSIsInN1YiI6IjY2NTcyMDI3MDI4NjVlY2VhYTU5OTY4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oertjiXySwkWZydHwZLqFcz-MMuUUC0oCzK4koKkyzo'
                },
            };

            //RICHIAMO AXIOS CON LA FUNZIONE DEL SITO API
            axios
                .request(options)
                .then((response) => {
                    console.log(response.data.results);
                    this.store.movieList = response.data.results
                    console.log("lista film", this.store.movieList)
                })
                .catch(function (error) {
                    console.error(error);
                });
        },

        //CREO FUNZIONE PER SERIE TV CHE RICHIAMO AL CLICK DEL BOTTONE
        foundTvSeries() {
            this.store.serieTv = "Serie TV Trovate";
            const options = {
                method: 'GET',
                //RICHIAMO URL PER I SERIE TV (TV) DA STORE.JS
                url: this.store.urlTv,
                //DICO AL QUERY CHE è UGUALE AL VALORE CHE L'UTENTE DA ALL'INPUT
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
                    this.store.tvList = response.data.results
                    console.log("lista serie tv", this.store.tvList)
                })
                .catch(function (error) {
                    console.error(error);
                });
            this.store.searchInput = ""

        }
    },
}
</script>

<template>
    <header class="bg-black p-2 text-center mb-3">
        <nav class="row m-0 align-items-center">
            <div class="col-6 text-start">
                <h1 class="m-0 text-danger">BOOLFLIX</h1>
            </div>
            <div class="col-6 text-end">
                <input type="text" placeholder="Cerca" v-model="store.searchInput">
                <button @click="foundMovies(), foundTvSeries()">Cerca</button>
            </div>
        </nav>
    </header>
</template>

<style></style>