<template>
    <main class="main-content">
        <div class="container">
            <div class="page">
                <div class="breadcrumbs">
                    <router-link :to="{ name: 'Home'}">
                        <a>Home</a>

                    </router-link>
<!--                    <a href="index.html">Home</a>-->
                    <span>{{movie.Title}}</span>
                </div>

                <div class="content">
                    <div class="row">
                        <div class="col-md-6">
                            <figure class="movie-poster"><img :src="movie.Poster" :alt="movie.Title"></figure>
                        </div>
                        <div class="col-md-6">
                            <h2 class="movie-title">{{movie.Title}}</h2>
                            <div class="movie-summary">
                                <p>{{movie.Plot}}</p>
                            </div>
                            <ul class="movie-meta">
                                <li v-if="movie.Ratings[0]"><strong>Rating:</strong>
                                    {{movie.Ratings[0].Value}}
                                </li>
                                <li><strong>Length:</strong> {{movie.Runtime}}</li>
                                <li><strong>Premiere:</strong> {{movie.Released}}</li>
                                <li><strong>Category:</strong>{{movie.Genre}}</li>
                            </ul>

                            <ul class="starring">
                                <li><strong>Directors:</strong> {{movie.Director}}</li>
                                <li><strong>Writers:</strong>{{movie.Writer}}</li>
                                <li><strong>Stars:</strong> {{movie.Actors}}</li>
                            </ul>
                        </div>
                    </div> <!-- .row -->
                </div>
            </div>
        </div> <!-- .container -->
    </main>
</template>

<script>
    import NProgress from 'nprogress';

    import fetchIntercept from 'fetch-intercept';
    export default {
        name: 'Detail',
        data(){
            return{
                movie: '',
                key: 'dea36421',
                id: this.$route.params.id,
            }
        },
        components: {

        },
        methods:{


            fetchMovie() {
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
                fetch('http://www.omdbapi.com/?plot=full&i='+this.id+'&apikey='+this.key, {
                    method: 'GET',

                })
                    .then(response => response.json())
                    .then(data => {
                        this.movie=data;
                    });

            }
        },
        created() {
            this.fetchMovie();
        }
    }
</script>
