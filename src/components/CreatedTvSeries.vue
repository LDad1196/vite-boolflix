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
        <div class="m-0 h-100 opacity-75 text-dark position-relative">
            <div class="h-100 my-hover">
                <img :src="cardTv.poster_path == null ? store.urlImageRandomPoster : store.urlImage + cardTv.poster_path"
                    alt="" class="img-fluid h-100">
            </div>
            <div class="position-absolute top-0 start-0 z-n1 h-100">
                <figure class="text-center">
                    <img :src="cardTv.backdrop_path == null ? store.urlImageRandom : store.urlImage + cardTv.backdrop_path"
                        class="card-img-top w-75" alt="">
                </figure>
                <div class="description pt-2">
                    <!-- TITOLO DELLA SERIE IN LINGUA ORIGINALE DELLA SERIE -->
                    <h6 class="card-text my-fs py-2 text-center" v-if="cardTv.original_name != cardTv.name">
                        Titolo originale: <span class="text-white">{{ cardTv.original_name }}</span>
                    </h6>
                    <h6 class="card-text my-fs py-2s text-center">Titolo serie tv:
                        <span class="text-white">{{ cardTv.name }}</span>
                    </h6>
                    <!-- VOTO DELLA SERIE FIXATO CON MASSIMO DUE NUMERI DOPO LA VIRGOLA E DIVISO 2 DA AVERE UN NUMERO DA 1 A 5 VISTO CHE ERA DA 1 A 10 -->
                    <h6 class="card-text my-fs py-2s text-center">
                        Voti serie tv: <span class="text-white">{{ (cardTv.vote_average / 2).toFixed(2) }}</span>
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

                    <!-- BANDIERA ASSOCIATA ALLA LINGUA ORIGINALE DELLA SERIE -->
                    <h6 class="card-text my-fs py-2s text-center" v-if="cardTv.original_language == 'en'">
                        <img src="../assets/en.svg" class="my-w" alt="">
                    </h6>
                    <h6 class="card-text my-fs py-2s text-center" v-if="cardTv.original_language == 'it'">
                        <img src="../assets/it.svg" class="my-w" alt="">
                    </h6>
                    <h6 class="card-text my-fs py-2s text-center" v-if="cardTv.original_language == 'de'">
                        <img src="../assets/de.svg" class="my-w" alt="">
                    </h6>
                    <h6 class="card-text my-fs py-2s text-center" v-if="cardTv.original_language == 'fr'">
                        <img src="../assets/fr.svg" class="my-w" alt="">
                    </h6>
                    <h6 class="card-text my-fs py-2s text-center" v-if="cardTv.original_language == 'no'">
                        <img src="../assets/no.svg" class="my-w" alt="">
                    </h6>
                    <h6 class="card-text my-fs py-2s text-center" v-if="cardTv.original_language == 'ja'">
                        <img src="../assets/jp.svg" class="my-w" alt="">
                    </h6>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.my-w {
    width: 15%;
}

.my-fs {
    font-size: 0.8rem;
}

.my-hover:hover {
    opacity: 0;
}
</style>