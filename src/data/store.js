import { reactive } from 'vue';

const iMieiDati = reactive({
    searchInput: "",

    //CREO VARIABILE PER URL API DEI FILM
    url: 'https://api.themoviedb.org/3/search/movie',

    //CREO VARIABILE PER URL API DELLE SERIE TV
    urlTv: 'https://api.themoviedb.org/3/search/tv',

    //LISTA DI APPOGGIO DOVE INIETTO LE CHIAMATE AXIOS PER I FILM
    moviesList: [],

    //LISTA DI APPOGGIO DOVE INIETTO LE CHIAMATE AXIOS PER LE SERIE TV
    tvList: [],

    //VARIABILE PER H2 FILM CHE CAMBIA DENTRO ALLA FUNZIONE DEL BUTTON
    film: "",

    //VARIABILE PER H2 DELLE SERIE TV CHE CAMBIA DENTRO ALLA FUNZIONE DEL BUTTON
    serieTv: "",
});

export default iMieiDati;