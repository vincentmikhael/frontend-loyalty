<template>

        <div class="">
            <nav :class="{bgdark: scrollPosition > 40}" class="navbar navbar-dark py-4 fixed-top bg-transparent navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img class="img-fluid" src="img/logo.png" style="width: 250px" alt="">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse justify-content-end navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav justify-content-end align-items-center">
                            <li class="nav-item">
                                <a class="nav-link active" href="/#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/#membership">Membership Program</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/#news">News & Promo</a>
                            </li>
                            <li class="nav-item">
                                <div class="nav-link active">
                                    <NuxtLink to="/login">
                                        <button type="button" class="btn btn-outline-light py-2 px-3">MEMBER AREA</button>
                                    </NuxtLink>
            
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            
            <Nuxt />
            
            <footer class="bg-dark position-absolute w-100 bottom-0 p-4 text-center">
                <p class="mb-0">ARRAS MEMBERSHIP &copy; 2022</p>
            </footer>
        </div>

</template>
<script>
export default {
    data(){
        return{
            scrollPosition: null,
        }
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        }
    },
    computed: {
        loading(){
            return this.$store.state.page.loading
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);

    }
}
</script>
<style>
.bgdark{
    background-color: black !important;
}
</style>