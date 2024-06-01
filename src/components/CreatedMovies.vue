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
    <!-- COLONNE PER RESPONSIVE -->
    <div class="col-12 col-sm-6 col-md-4 col-lg-2 px-2 py-1 mb-2">
        <!-- DO POSITION RELATIVE CHE MI SERVE PER IL FIGLIO CON ABSOLUTE -->
        <div class="m-0 h-100 opacity-75 text-dark position-relative">
            <!-- IMMAGINE DEL POSTER PER LA CARD CHE QUANDO VA IN HOVER DIVENTA OPACITà 0 E SI VEDE IL CONTENUTO CHE E SOTTO -->
            <div class="h-100 my-hover">
                <img :src="card.poster_path == null ? store.urlImageRandomPoster : store.urlImage + card.poster_path"
                    alt="" class="img-fluid h-100">
            </div>
            <!-- POSITION ABSOLUTE E DICO CHE PARTE TOP 0 E START 0 RISPETTO AL PADRE RELATIVE E POI METTO Z-INDEX-1 -->
            <div class="position-absolute top-0 start-0 z-n1 h-100">
                <figure class="m-0 text-center">
                    <img :src="card.backdrop_path == null ? store.urlImageRandom : store.urlImage + card.backdrop_path"
                        class="card-img-top w-75" alt="">
                </figure>
                <div class="description pt-2">
                    <!-- TITOLO IN LINGUA ORIGINALE FILM -->
                    <h6 class="card-text my-fs py-2 text-center m-0" v-if="card.original_title != card.title">Titolo
                        originale:
                        <span class="text-white">{{ card.original_title }}</span>
                    </h6>
                    <!-- TITOLO DEL FILM IN LINGUA ITALIANA -->
                    <h6 class="card-text my-fs py-2s text-center m-0">Titolo film:
                        <span class="text-white">{{ card.title }}</span>
                    </h6>
                    <!-- VOTO DEL FILM FIXATO CON MASSIMO DUE NUMERI DOPO LA VIRGOLA E DIVISO 2 DA AVERE UN NUMERO DA 1 A 5 VISTO CHE ERA DA 1 A 10 -->
                    <h6 class="card-text my-fs py-2 text-center m-0">
                        Voti film:
                        <span class="text-white">{{ (card.vote_average / 2).toFixed(2) }}</span>
                        <!-- AGGIUNTA STELLE IN BASE AL VOTO E DIVISO PER 2 -->
                        <div class="text-center mb-1">
                            <span v-if="(card.vote_average / 2) >= 0.5">
                                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            </span>
                            <span v-if="(card.vote_average / 2) >= 1.5">
                                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            </span>
                            <span v-if="(card.vote_average / 2) >= 2.5">
                                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            </span>
                            <span v-if="(card.vote_average / 2) >= 3.5">
                                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            </span>
                            <span v-if="(card.vote_average / 2) >= 4.5">
                                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            </span>
                        </div>
                    </h6>

                    <!-- BANDIERA ASSOCIATA ALLA LINGUA ORIGINALE DEL FILM -->
                    <h6 class="card-text my-fs py-2s text-center m-0" v-if="card.original_language == 'en'">
                        <img src="../assets/en.svg" class="my-w" alt="">
                    </h6>
                    <h6 class="card-text my-fs py-2s text-center m-0" v-if="card.original_language == 'it'">
                        <img src="../assets/it.svg" class="my-w" alt="">
                    </h6>
                    <h6 class="card-text my-fs py-2s text-center m-0" v-if="card.original_language == 'de'">
                        <img src="../assets/de.svg" class="my-w" alt="">
                    </h6>
                    <h6 class="card-text my-fs py-2s text-center m-0" v-if="card.original_language == 'fr'">
                        <img src="../assets/fr.svg" class="my-w" alt="">
                    </h6>
                    <h6 class="card-text my-fs py-2s text-center m-0" v-if="card.original_language == 'no'">
                        <img src="../assets/no.svg" class="my-w" alt="">
                    </h6>
                    <h6 class="card-text my-fs py-2s text-center" v-if="card.original_language == 'ja'">
                        <img src="../assets/jp.svg" class="my-w" alt="">
                    </h6>
                </div>
            </div>

        </div>
    </div>

</template>

<style scoped>
.my-hover:hover {
    opacity: 0;
}

.my-w {
    width: 15%;
}

.my-fs {
    font-size: 0.8rem;
}
</style>