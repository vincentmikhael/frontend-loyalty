<template>
    <div class="content mt-5 pt-5">
        <div class="row mt-5">
            <div class="col-md-6 d-none d-md-block position-relative">
                <img src="/img/card.png" alt="">
                </div>
            <div class="col">
                
                <h1><span>MEMBER</span> SIGN UP</h1>
                <form>
                    <div class="form-floating mb-3 form-dark">
                        <input type="text" v-model="formdata.fullname" class="form-control" id="floatingInput" placeholder="Fullname"/>
                        <label for="floatingInput">Fullname</label>
                    </div>
                    <div class="form-floating form-dark">
                        <input v-model="formdata.id_number" type="text" class="form-control" id="floatingPassword" placeholder="ID Number"/>
                        <label for="floatingPassword">ID Number (KTP/PASSPORT)</label>
                    </div>
                    <div class="form-floating form-dark">
                        <input v-model="formdata.address" type="text" class="form-control" id="floatingPassword" placeholder="Address"/>
                        <label for="floatingPassword">Address</label>
                    </div>
                    <div class="form-floating form-dark">
                        <input v-model="formdata.birthdate" type="date" class="form-control" id="floatingPassword" placeholder="Birthdate"/>
                        <label for="floatingPassword">Birthdate</label>
                    </div>
                    <div class="ms-3">
                        <p class="mt-4">Gender</p>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="formdata.gender" id="inlineRadio1" value="male">
                            <label class="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="formdata.gender" id="inlineRadio2" value="famale">
                            <label class="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                        <p class="mt-4">Blood Type</p>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="formdata.blood_type" id="inlineRadio1" value="O">
                            <label class="form-check-label" for="inlineRadio1">O</label>
                        </div>
                        
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="formdata.blood_type" id="inlineRadio2" value="A">
                            <label class="form-check-label" for="inlineRadio2">A</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="formdata.blood_type" id="inlineRadio2" value="B">
                            <label class="form-check-label" for="inlineRadio2">B</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="formdata.blood_type" id="inlineRadio2" value="AB">
                            <label class="form-check-label" for="inlineRadio2">AB</label>
                        </div>
                    </div>
                    
                    <div class="form-floating form-dark">
                        <input v-model="formdata.sport_enthusiast" type="text" class="form-control" id="floatingPassword" placeholder="Sport Enthusiast"/>
                        <label for="floatingPassword">Sport Enthusiast</label>
                    </div>
                    <div class="form-floating form-dark">
                        <input v-model="formdata.phone" type="text" class="form-control" id="floatingPassword" placeholder="Phone Number"/>
                        <label for="floatingPassword">Phone Number</label>
                    </div>
                    <div class="form-floating form-dark">
                        <input v-model="formdata.email" type="text" class="form-control" id="floatingPassword" placeholder="Email"/>
                        <label for="floatingPassword">Email</label>
                    </div>
                    <div class="form-floating form-dark">
                        <input v-model="formdata.password" type="text" class="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button @click="register" type="button" id="signin" class="btn btn-outline-light p-2 mt-5 px-4">SIGN UP</button>
                </form>
    
                <p class="mt-5">Don't have any account yet? Please <a href="" class="fw-bold">Sign Up</a></p>
    
            </div>
        </div>
    
        <div style="bottom: 10%; left: -3%;"
            class="d-flex mt-5 pt-4 text-center icon-jumbotron position-relative mb-5 justify-content-center">
            <img class="img-fluid" src="img/logo-jumbotron.png" alt="">
        </div>
    
    </div>
</template>

<script>
export default{
    data(){
        return{
            formdata: {}
        }
    },
    methods: {
        async register(){
            if (Object.keys(this.formdata).length == 10){
                let res = await this.$api.post('/auth/register', this.formdata)
                this.$nuxt.$options.router.push('/login?from=register&email='+res.data.data.email)
            }else{
                this.$toast.error("Form required!")
            }
            
            // this.$store.commit('setUser',res.data)
            // this.$cookies.set('token',res.data.token)
            // this.$nuxt.$options.router.push('/member')
        }
    }
}
</script>