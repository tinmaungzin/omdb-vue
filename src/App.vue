<template>

<div id="app">

    <div id="site-content">
        <header class="site-header">
            <div class="container">
                <router-link :to="{ name: 'Home'}">

                    <a id="branding">
                        <img src="./assets/images/logo.png" alt="" class="logo">
                        <div class="logo-copy">
                            <h1 class="site-title">Yote Shin </h1>
                            <small class="site-description">API integration with Vue-Cli</small>
                        </div>
                    </a> <!-- #branding -->
                </router-link>

            </div>
        </header>
        <router-view></router-view>
        <footer class="site-footer">
            <div class="container">
<!--                <div class="row">-->
<!--                    <div class="col-md-2">-->
<!--                        <div class="widget">-->
<!--                            <h3 class="widget-title">About Us</h3>-->
<!--                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tempore vitae mollitia nesciunt saepe cupiditate</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-md-2">-->
<!--                        <div class="widget">-->
<!--                            <h3 class="widget-title">Recent Review</h3>-->
<!--                            <ul class="no-bullet">-->
<!--                                <li>Lorem ipsum dolor</li>-->
<!--                                <li>Sit amet consecture</li>-->
<!--                                <li>Dolorem respequem</li>-->
<!--                                <li>Invenore veritae</li>-->
<!--                            </ul>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-md-2">-->
<!--                        <div class="widget">-->
<!--                            <h3 class="widget-title">Help Center</h3>-->
<!--                            <ul class="no-bullet">-->
<!--                                <li>Lorem ipsum dolor</li>-->
<!--                                <li>Sit amet consecture</li>-->
<!--                                <li>Dolorem respequem</li>-->
<!--                                <li>Invenore veritae</li>-->
<!--                            </ul>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-md-2">-->
<!--                        <div class="widget">-->
<!--                            <h3 class="widget-title">Join Us</h3>-->
<!--                            <ul class="no-bullet">-->
<!--                                <li>Lorem ipsum dolor</li>-->
<!--                                <li>Sit amet consecture</li>-->
<!--                                <li>Dolorem respequem</li>-->
<!--                                <li>Invenore veritae</li>-->
<!--                            </ul>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-md-2">-->
<!--                        <div class="widget">-->
<!--                            <h3 class="widget-title">Social Media</h3>-->
<!--                            <ul class="no-bullet">-->
<!--                                <li>Facebook</li>-->
<!--                                <li>Twitter</li>-->
<!--                                <li>Google+</li>-->
<!--                                <li>Pinterest</li>-->
<!--                            </ul>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-md-2">-->
<!--                        <div class="widget">-->
<!--                            <h3 class="widget-title">Newsletter</h3>-->
<!--                            <form action="#" class="subscribe-form">-->
<!--                                <input type="text" placeholder="Email Address">-->
<!--                            </form>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div> &lt;!&ndash; .row &ndash;&gt;-->

                <div class="colophon">Copyright 2014 Company name, Designed by Themezy. All rights reserved</div>
            </div> <!-- .container -->

        </footer>
    </div>
</div>

    <!--    <router-view></router-view>-->

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
