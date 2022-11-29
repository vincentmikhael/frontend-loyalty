<template>
    <div class="content mt-5 pt-5">
        <div class="row mt-5">
            <div class="col-md-6 d-none d-md-block position-relative">
                <img src="/img/img-login1.png" alt="">
                <img class="position-absolute" style="bottom: -25%; left: -10%; width: 60%;"
                    src="/img/img-login2.png" alt="">
            </div>
            <div class="col">
                <div v-if="params" class="alert alert-success">Successfully Registered</div>
                <h1><span>MEMBER</span> AREA</h1>
                <form>
                    <div class="form-floating mb-3 form-dark">
                        <input type="text" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating form-dark">
                        <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button @click="login" type="button" id="signin" class="btn btn-outline-light p-2 mt-5 px-4">
                        <div class="" v-if="loading">
                            <div class="spinner-border text-light" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        <div class="" v-else>SIGN IN</div>
                        </button>
                    
                </form>
    
                <p class="mt-5">Don't have any account yet? Please <a href="/register" class="fw-bold">Sign Up</a></p>
    
            </div>
        </div>
    
        <div style="bottom: 10%; left: -3%;"
            class="d-flex mt-5 pt-4 text-center icon-jumbotron position-relative mb-5 justify-content-center">
            <img class="img-fluid" src="/img/logo-jumbotron.png" alt="">
        </div>
    
    </div>
</template>

<script>
export default{
    data(){
        return{
            loading: false,
            email: this.$route.query.email,
            password: ""
        }
    },
    async asyncData({ route }) {
        return {
            params: route.query.from,
            mail: route.query.email
        }
    },
    methods: {
        async login(){
            this.loading = true
            let res = await this.$api.post('/auth/login',{
                email: this.email,
                password: this.password
            })
            if(res.data.isError == 1){
                this.$toast.error(res.data.message)
            }else{
                this.$store.commit('setUser', res.data.data)
                this.$cookies.set('token', res.data.token,{
                    path: '/',
                    maxAge: 24 * 60 * 60 * 1000
                })
                if(res.data.data.role == 'member'){
                    this.$nuxt.$options.router.push('/member')
                } else if (res.data.data.role == 'administrator'){
                    this.$nuxt.$options.router.push('/administrator/cms')
                }else if(res.data.data.role == 'superadmin'){
                    this.$nuxt.$options.router.push('/superadmin')
                }else if(res.data.data.role == 'manajemen'){
                    this.$nuxt.$options.router.push('/manajemen')
                }
                
            }
            this.password = ""
            this.loading = false
        }
    }
}
</script>