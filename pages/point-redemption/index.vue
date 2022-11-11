<template>
    <div class="mx-2 mt-5 mt-md-0">
        <p class="mt-3">Point Redemption</p>

        <div class="card shadow p-5 position-relative">
            <div class="row position-relative align-items-center">
                <div class="col-md-2">
                    <radial-progress-bar :strokeWidth="14" :diameter="120" :completed-steps="46" :total-steps="100">
                        46%
                    </radial-progress-bar>
                    <p style="font-size: 14px;" class="text-center mt-2">4.000 Point</p>
                </div>
                <div class="col-7">
                    <p class="flex-fill">
                        Hello Friska, currently you have 4000 points, and now at Bronze level, You can exchange your points for interesting
                        merchandise that we provide. We will send this merchandise directly to your home
                    </p>
                </div>
                <div class="col">
                    <img style="top: -70%;" class="img-fluid position-absolute" src="/img/asset1.png" alt="">
                </div>
                
                
                
            </div>
            
        </div>

    </div>
</template>
<script>
import RadialProgressBar from 'vue-radial-progress'
export default {
    components: {
        RadialProgressBar
    },
    layout: "dashboard",
    data() {
        return {
            user: {},
        };
    },
}
</script>

