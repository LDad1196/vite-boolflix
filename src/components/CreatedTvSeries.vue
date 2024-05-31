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
        <div class="m-0 h-100 py-1 bg-primary">
            <img :src='store.urlImage + cardTv.backdrop_path' class="card-img-top img-fluid" alt="">
            <!-- TITOLO DELLA SERIE IN LINGUA ORIGINALE DELLA SERIE -->
            <h6 class="card-text my-fs py-2 text-center">
                Titolo serie tv in lingua originale: {{ cardTv.original_name }}
            </h6>
            <h6 class="card-text my-fs py-2s text-center text-dark">Titolo serie tv: {{ cardTv.name }}</h6>
            <!-- VOTO DELLA SERIE FIXATO CON MASSIMO DUE NUMERI DOPO LA VIRGOLA E DIVISO 2 DA AVERE UN NUMERO DA 1 A 5 VISTO CHE ERA DA 1 A 10 -->
            <h6 class="card-text my-fs py-2s text-center text-dark">
                Voti serie tv: {{ cardTv.vote_average.toFixed(1) / 2 }}
                <!-- AGGIUNTA STELLE IN BASE AL VOTO FIXATO E DIVISO PER 2 -->
                <div class="text-center mb-1">
                    <span v-if="(cardTv.vote_average / 2).toFixed(2) >= 0.5">
                        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    </span>
                    <span v-if="(cardTv.vote_average / 2).toFixed(2) >= 1.5">
                        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    </span>
                    <span v-if="(cardTv.vote_average / 2).toFixed(2) >= 2.5">
                        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    </span>
                    <span v-if="(cardTv.vote_average / 2).toFixed(2) >= 3.5">
                        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    </span>
                    <span v-if="(cardTv.vote_average / 2).toFixed(2) >= 4.5">
                        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    </span>
                </div>
            </h6>
            <!-- LA LINGUA ORIGINALE DELLA SERIE -->
            <h6 class="card-text my-fs py-2s text-center text-dark">Lingua serie tv:{{ cardTv.original_language }}</h6>

            <!-- BANDIERA ASSOCIATA ALLA LINGUA ORIGINALE DELLA SERIE -->
            <h6 class="card-text my-fs py-2s text-center text-dark" v-if="cardTv.original_language == 'en'">
                <img src="../assets/en.svg" class="w-25" alt="">
            </h6>
            <h6 class="card-text my-fs py-2s text-center text-dark" v-if="cardTv.original_language == 'it'">
                <img src="../assets/it.svg" class="w-25" alt="">
            </h6>
            <h6 class="card-text my-fs py-2s text-center text-dark" v-if="cardTv.original_language == 'de'">
                <img src="../assets/de.svg" class="w-25" alt="">
            </h6>
            <h6 class="card-text my-fs py-2s text-center text-dark" v-if="cardTv.original_language == 'fr'">
                <img src="../assets/fr.svg" class="w-25" alt="">
            </h6>
            <h6 class="card-text my-fs py-2s text-center text-dark" v-if="cardTv.original_language == 'no'">
                <img src="../assets/no.svg" class="w-25" alt="">
            </h6>
            <h6 class="card-text my-fs py-2s text-center text-dark" v-if="cardTv.original_language == 'ja'">
                <img src="../assets/jp.svg" class="w-25" alt="">
            </h6>
        </div>
    </div>

</template>

<style></style>