<template>
    <div class="a">
        <div class="">
            <div class="sidebar">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <div class="avatar"></div>
                    <h6 class="mt-4">{{user.namaPengguna}}</h6>
                    <p>{{user.id_pengguna}}</p>
                    <div class="level">Bronze Level</div>

                    <div v-for="(menu,i) in dataMenu" :key="i" class="mt-4">
                        <NuxtLink :to="menu.to" class="">
                            <i :class="menu.icon"></i>
                            {{menu.title}}
                        </NuxtLink>
                    </div>
                </div>
                <div class="mt-4">
                    <NuxtLink to="/">Back to website</NuxtLink>
                </div>
                
            </div>
            <div class="content-member" style="padding-top: 40px;">
                <div class="container">
                    <Nuxt/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    middleware: "auth",
    data: () => ({
        user: "",
        dataMenu: [
            {
                icon: 'fa-solid fa-user-gear',
                title: 'Data Profile',
                to: "/"
            },
            {
                icon: 'fa-solid fa-star',
                title: 'Level Member',
                to: "/"
            },
            {
                icon: 'fa-solid fa-barcode',
                title: 'Voucher Code',
                to: "/"
            },
            {
                icon: 'fa-solid fa-gift',
                title: 'Point Redemption',
                to: "/"
            },
        ]
    }),
    mounted(){
        this.user = this.$store.state.user
    }
}
</script>

<style scoped>
body {
    background: linear-gradient(147.2deg, #58595E -11.95%, #2C2D36 80.41%) !important;
}
</style>
