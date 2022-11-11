<template>
    <div class="mx-2 mt-5 mt-md-0">
        <p class="mt-3">Level Member</p>
        
        <div class="card shadow p-3">
            <div class="container d-flex flex-column align-items-center">
                <small class="light">Hello Friska, currently you have 4000 points, and now at Bronze level, increase your points and get
                    your Silver Level!</small> <br>

                    <div class="d-flex text-center align-items-center level-step">
                        <div class="">
                            <div>Bronze Level</div>
                            <img class="img-fluid" src="/img/bronze.png" alt="">
                            <p>10.000 Point</p>
                        </div>
                        
                        <div class="line d-none d-md-block"></div>
                        <div class="d-none d-md-block">
                            <div class="">Silver Level</div>
                            <img class="img-fluid" src="/img/unlevel.png" alt="">
                            <p>20.000 Point</p>
                        </div>
                        <div class="line d-none d-md-block"></div>
                        <div class="d-none d-md-block">
                            <div class="">Gold Level</div>
                            <img class="img-fluid" src="/img/unlevel.png" alt="">
                            <p>30.000 Point</p>
                        </div>
                        <div class="line d-none d-md-block"></div>
                        <div class="d-none d-md-block">
                            <div class="">Platinum Level</div>
                            <img class="img-fluid" src="/img/unlevel.png" alt="">
                            <p>40.000 Point</p>
                        </div>


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



        };
    },
}
</script>

