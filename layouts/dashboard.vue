<template>
    <div class="a">
        <div class="">
            <div class="sidebar" :class="{open: sidebar}">
                <i @click="sidebar = false" class="d-block d-md-none fas fa-times position-absolute" style="top: 10px;"></i>
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <div class="avatar"></div>
                    <h6 class="mt-4">Friska Octaviani</h6>
                    <p>2002113</p>
                    <div class="level">Bronze Level</div>

                    <div v-for="(menu,i) in dataMenu" :key="i" class="mt-4">
                        <div @click="sidebar = false">
                            <NuxtLink :to="menu.to" class="">
                                <i :class="menu.icon"></i>
                                {{menu.title}}
                            </NuxtLink>
                        </div>
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
export default{
    data: () => ({
        sidebar: false,
        dataMenu: [
            {
                icon: 'fa-solid fa-user-gear',
                title: 'Data Profile',
                to: "/data-member"
            },
            {
                icon: 'fa-solid fa-star',
                title: 'Level Member',
                to: "/level-member"
            },
            {
                icon: 'fa-solid fa-barcode',
                title: 'Voucher Code',
                to: "/voucher-code"
            },
            {
                icon: 'fa-solid fa-gift',
                title: 'Point Redemption',
                to: "/point-redemption"
            },
        ]
    }),
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
