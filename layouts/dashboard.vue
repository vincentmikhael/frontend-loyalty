<template>
    <div class="a">
        <div class="">
            <div class="sidebar" :class="{open: sidebar}">
                <i @click="sidebar = false" class="d-block d-md-none fas fa-times position-absolute" style="top: 10px;"></i>
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <div class="avatar"></div>
                    <h6 class="mt-4">{{ $store.state.user.fullname }}</h6>
                    <p>{{$store.state.user.id}}</p>
                    <div class="level">Silver Level</div>

                    <div v-if="$store.state.user.role == 'member'" class="text-center">
                        <div v-for="(menu,i) in dataMenu.member" :key="i" class="mt-4">
                            <div @click="sidebar = false">
                                <NuxtLink :to="menu.to" class="">
                                    <i :class="menu.icon"></i>
                                    {{menu.title}}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="$store.state.user.role == 'administrator'" class="text-center">
                        <div v-for="(menu,i) in dataMenu.administrator" :key="i" class="mt-4">
                            <div @click="sidebar = false">
                                <NuxtLink :to="menu.to" class="">
                                    <i :class="menu.icon"></i>
                                    {{menu.title}}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    
                    <div style="cursor: pointer;" class="mt-5" @click="logout">
                        <i class="fas fa-sign-out">
                        </i>
                        Logout
                    </div>
                </div>
                <!-- <div class="mt-4">
                    <NuxtLink to="/">Back to website</NuxtLink>
                </div> -->
                
            </div>
            <div class="content-member" style="padding-top: 40px;">
                <div class="container">
                    <div class="d-flex align-items-center justify-content-between">
                        <NuxtLink to="/member">
                        <img src="/img/logo.png" style="width: 280px" class="img-fluid logo-main" alt="" />
                        </NuxtLink>
                        <i @click="sidebar = true" class="fa-solid d-block d-md-none fa-bars me-2"></i>
                    </div>
                    <Nuxt/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import menu from '@/data/menu'
export default{
    middleware: 'auth',
    data: () => ({
        sidebar: false,
        dataMenu: menu
    }),
    methods: {
        logout(){
            this.$store.commit('setUser', {})
            this.$cookies.remove('token')
            this.$nuxt.$options.router.push('/login')
        }
    }
    // mounted(){
    //     this.
    // }
}
</script>

<style scoped>
body {
    background: linear-gradient(147.2deg, #58595E -11.95%, #2C2D36 80.41%) !important;
}
.level{
    background-color: rgb(143, 126, 32);
    padding: 2px 15px 2px 15px;
    border-radius: 20px;
}
</style>
