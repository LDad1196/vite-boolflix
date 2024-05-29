import { reactive } from 'vue';

const iMieiDati = reactive({
    searchInput: "",
    url: 'https://api.themoviedb.org/3/search/movie',
    moviesList: [],
    tvList: [],
});

export default iMieiDati;