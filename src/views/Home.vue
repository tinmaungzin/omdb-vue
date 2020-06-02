<template>
    <div>
        <form style="margin-left: 30%; margin-bottom: 50px;">
            <div class="form-row">
                <div class="col-7">
                    <input v-on:keyup="fetchMovies(query)" v-model="query" type="text" class="form-control"
                           placeholder="Search Movie">
                </div>
            </div>
        </form>
        <main class="main-content">
            <div class="container">
                <div class="page">
                    <div class="breadcrumbs">
                        <router-link :to="{ name: 'Home'}">
                            <a>Home</a>
                        </router-link>
                        <span>List</span>
                    </div>
                    <div class="movie-list">
                        <div v-for="movie in movies" :key="movie" class="movie">
                            <figure class="movie-poster">
                                <img style="width: 250px; height: 300px;" :src="movie.Poster"
                                                              :alt="movie.Title">
                            </figure>
                            <div class="movie-title">
                                <router-link :to="{ name: 'Detail', params: {id: movie.imdbID}}">
                                    <a>{{movie.Title}} </a> <span style="font-size: 20px">({{movie.Year}})</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div v-if="totalMovies" class="pagination">
                        <a v-on:click="setPage(index)" style="margin-right: 10px; cursor: pointer"
                           v-for="index in pages" :key="index"
                           v-bind:class="{'current': isCurrent(index)}" class="page-number">{{index}}</a>
                    </div>
                </div>
            </div>
        </main>

    </div>


</template>

<script>
    import NProgress from 'nprogress';
    import fetchIntercept from 'fetch-intercept';

    export default {
        name: 'Home',
        data() {
            return {
                movies: [],
                key: 'dea36421',
                totalMovies: 0,
                pages: 1,
                currentPage: 1,
                query: '2020'
            }
        },
        components: {},

        methods: {

            isCurrent(page) {
                return page === this.currentPage;
            },

            fetchMovies() {
                this.movies = [];
                fetchIntercept.register({
                    request: function (url, config) {
                        // Modify the url or config here
                        NProgress.start();

                        return [url, config];
                    },

                    requestError: function (error) {
                        // Called when an error occured during another 'request' interceptor call
                        return Promise.reject(error);
                    },

                    response: function (response) {
                        // Modify the reponse object
                        NProgress.done();

                        return response;
                    },

                    responseError: function (error) {
                        // Handle an fetch error
                        return Promise.reject(error);
                    }
                });
                fetch('http://www.omdbapi.com/?s=' + this.query + '&page=' + this.currentPage + '&apikey=' + this.key, {
                    method: 'GET',

                })
                    .then(response => response.json())
                    .then(data => {
                        this.movies = data.Search;
                        this.totalMovies = data.totalResults;
                        this.pages = Math.round(this.totalMovies / 10);
                    });

            },
            setPage(page) {
                this.currentPage = page;
                this.fetchMovies();
            }
        },
        created() {
            this.fetchMovies();
        },
    }
</script>
