<template>
    <div class="content mt-5 pt-5">
        <div class="row mt-3 pb-4 gap-4">
            <div class="col-12 col-md-8 ">
                <h1><span>{{data.title}}</span></h1>
                <div class="d-flex">
                    <p class="me-4 my-0">Date</p>
                    <p class="my-0"><i>{{ new Date(data.createdAt).getDate() + ' - ' + new Date(data.createdAt).getMonth() + ' - ' + new Date(data.createdAt).getFullYear() }}</i></p>
                </div>
    
                <img class="img-fluid w-100 mb-5" :src="data.picture" alt="">
    
                <div v-html="data.description"></div>
            </div>
            <div class="col">
                <p style="font-weight: 400">FEATURED</p>
    
                <div class="mt-4">
                    <img class="img-fluid w-100" src="/img/img-featured.jpg" alt="">
                    <p class="mt-1">Lorem ipsum dolor sit.</p>
            </div>
                <div class="mt-4">
                    <img class="img-fluid w-100" src="/img/img-featured.jpg" alt="">
                    <p class="mt-1">Lorem ipsum dolor sit.</p>
            </div>
                <div class="mt-4">
                    <img class="img-fluid w-100" src="/img/img-featured.jpg" alt="">
                    <p class="mt-1">Lorem ipsum dolor sit.</p>
            </div>
    
        </div>
    </div>
    </div>
</template>
<script>
export default{
    layout: 'default',
    data(){
        return {
            data: {}
        }
    },
    async asyncData({ route }) {
        return{
            id: route.query.id
        }
    },
    async fetch(){
        let res = await this.$api.get('/news/get?id='+this.id)
        this.data = res.data.data[0]
    }
}
</script>