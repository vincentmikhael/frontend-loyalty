<template>
    <div class="mx-2 mt-5 mt-md-0">
        <p class="mt-3">Level Member</p>
        
        <div class="card shadow p-3">
            <div class="container d-flex flex-column align-items-center">
                <small class="light">Hello Friska, currently you have 4000 points, and now at Bronze level, increase your points and get
                    your Silver Level!</small> <br>


                    <div class="d-flex text-center align-items-center level-step">
                        <template v-for="(item,i) in data">
                            <div :class="
                                item.name != 'Silver' ? 'd-none d-md-block' : ''
                                ">
                                <div>{{item.name}} Level</div>
                                <img class="img-fluid" :src="'Silver' == item.name ? item.img_active : item.img_idle" alt="">
                                <p>{{item.minimum}} Points</p>
                            </div>
                            
                            <div v-if="(data.length - 1) != i" class="line d-none d-md-block"></div>
                        </template>

                    </div>
                    
            </div>
            
        </div>

        <p class="mt-5">REWARDS</p>
        <div class="card shadow p-1 p-md-3">
            <div class="d-flex mb-4 mt-3 justify-content-end">
                <div class="btn-group">
                    <button class="btn btn-secondary bg-transparent btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Small button
                    </button>
                    <ul class="dropdown-menu">
                        ...
                    </ul>
                </div>
            </div>
           <div class="d-flex justify-content-center flex-wrap gap-4">
            <img class="" src="/img/voucher1.png" alt="">
            <img class="" src="/img/voucher1.png" alt="">
            <img class="" src="/img/voucher1.png" alt="">
            <img class="" src="/img/voucher2.png" alt="">
            <img class="" src="/img/voucher4.png" alt="">
            <img class="" src="/img/voucher3.png" alt="">
           </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "dashboard",
    data() {
        return {
            user: {},
            data: []
        };
    },
    methods: {
        async getData (){
            let res = await this.$api.get('level/get')
            console.log(res.data.data)
            this.data = res.data.data
        }
    },
    mounted(){
        this.getData()
    }
}
</script>

