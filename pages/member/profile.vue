<template>
    <div class="mx-5 mx-md-2 mt-5 mt-md-0">
        <p class="mt-3">Data Profile</p>
        <div class="row mt-2 mt-md-5">
            <div class="col-12 col-md-3">
                <div class="div" style="width: 100%; height: 200px; background-color: gray;"></div>
                <small>Upload your photo profile <br/>
                max. 10 MB</small>
            </div>
            <div class="col-md-9">
                <form class="row">
                    <div class="col-md-6">
                        <div class="form-floating form-dark">
                            <input type="text" v-model="username" class="form-control" id="floatingInput" placeholder="Fullname" />
                            <label for="floatingInput">Fullname</label>
                        </div>
                        <div class="form-floating form-dark">
                            <input v-model="password" type="text" class="form-control" id="floatingPassword" placeholder="ID Number" />
                            <label for="floatingPassword">ID Number (KTP/PASSPORT)</label>
                        </div>
                        <div class="form-floating form-dark">
                            <input v-model="password" type="text" class="form-control" id="floatingPassword" placeholder="Address" />
                            <label for="floatingPassword">Address</label>
                        </div>
                        <div class="form-floating form-dark">
                            <input v-model="password" type="text" class="form-control" id="floatingPassword" placeholder="Birthdate" />
                            <label for="floatingPassword">Birthdate</label>
                        </div>
                        <div class="ms-3">
                            <p class="mt-4">Gender</p>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                                <label class="form-check-label" for="inlineRadio1">Male</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                <label class="form-check-label" for="inlineRadio2">Female</label>
                            </div>
                            <p class="mt-4">Blood Type</p>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                                <label class="form-check-label" for="inlineRadio1">O</label>
                            </div>
                        
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                <label class="form-check-label" for="inlineRadio2">A</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                <label class="form-check-label" for="inlineRadio2">B</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                <label class="form-check-label" for="inlineRadio2">AB</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating form-dark">
                            <input v-model="password" type="text" class="form-control" id="floatingPassword" placeholder="Sport Enthusiast" />
                            <label for="floatingPassword">Sport Enthusiast</label>
                        </div>
                        <div class="form-floating form-dark">
                            <input v-model="password" type="text" class="form-control" id="floatingPassword" placeholder="Phone Number" />
                            <label for="floatingPassword">Phone Number</label>
                        </div>
                        <div class="form-floating form-dark">
                            <input v-model="password" type="text" class="form-control" id="floatingPassword" placeholder="Email" />
                            <label for="floatingPassword">Email</label>
                        </div>
                        <div class="form-floating form-dark">
                            <input v-model="password" type="text" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                    </div>
                    
                
                    <button type="button" id="signin" class="btn btn-outline-light p-2 mt-5 px-4">UPDATE</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
export default {
    layout: "dashboard",
    components: {
        VueGoodTable,
    },
    data() {
        return {
            user: {},
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                },
                {
                    label: 'DATE',
                    field: 'date',
                },
                {
                    label: 'PRODUCT',
                    field: 'product',
                },
                {
                    label: 'SHOP',
                    field: 'shop',
                },
                {
                    label: 'QUANTITY',
                    field: 'quantity'
                },
                {
                    label: 'PRICE',
                    field: 'price'
                },
                {
                    label: 'DISCOUNT',
                    field: 'discount'
                },
                {
                    label: 'TOTAL PRICE',
                    field: 'total'
                }
            ],
            rows: [
                { id: 1, date: "22-10-2022", product: 'Lorem', shop: 'Ipsum', quantity: '2', price: '1000', discount: '20%', total: '500' },
                { id: 2, date: "22-10-2022", product: 'Product One', shop: 'Test Shop', quantity: '55', price: '400000', discount: '20%', total: '370000' },
                { id: 3, date: "22-10-2022", product: 'Product Two', shop: 'Ipsum', quantity: '2', price: '1000', discount: '20%', total: '500' },
                { id: 3, date: "22-10-2022", product: 'Product Two', shop: 'Ipsum', quantity: '2', price: '1000', discount: '20%', total: '500' },
                { id: 2, date: "22-10-2022", product: 'Product One', shop: 'Test Shop', quantity: '55', price: '400000', discount: '20%', total: '370000' },
                { id: 2, date: "22-10-2022", product: 'Product One', shop: 'Test Shop', quantity: '55', price: '400000', discount: '20%', total: '370000' },

            ],

            options: {
                chart: {

                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnheight: '20%',
                        distributed: true,
                        colors: {
                            backgroundBarColors: ['#F2F4F6']
                        },
                    }
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series: [{
                data: [0, 0, 0, 0, 2, 0, 0, 0]
            }]


        };
    },
}
</script>
<style>
.apexcharts-text,
.apexcharts-xaxis-label {
    display: none;
    color: white !important;
}

.vgt-table.nocturnal {
    background-color: #51525C !important;
}

.vgt-table.nocturnal th.vgt-checkbox-col {
    background: #51525C !important;
}

.vgt-table.nocturnal thead th {
    background: #51525C !important;
}

.vgt-responsive {
    background: #51525C !important;
    border-radius: 30px;
    padding: 25px;
}
</style>

