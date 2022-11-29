<template>
    <div>
        
        <div class="row align-items-center">
            <div class="col-md-4">
                <div class="card-member mt-3">
                    <div class="mt-5">{{$store.state.user.fullname}}</div>
                    <p>Member ID: {{$store.state.user.id}}</p>
                </div>
            </div>
 
            <div class="col-md-4 mt-3 mt-md-0">
                <p class="">PURCASE STATISTIC</p>
                <div class="card pe-3 pt-4 rounded-4">
                    <div class="d-flex justify-content-end">
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
                    <apexchart height="110" width="100%" type="line" :options="options" :series="series"></apexchart>
                </div>
            </div>

        </div>
        <div class="d-flex">
            
            
            

        </div>

        

        <p class="mt-5 mt-md-3 mb-1 ms-3">PURCHASE HISTORY</p>
        <vue-good-table 
        :columns="columns" 
        :rows="rows" 
        theme="nocturnal"
        :select-options="{
    enabled: true,
    selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
    selectionInfoClass: 'custom-class',
    selectionText: 'rows selected',
    clearSelectionText: 'clear',
    disableSelectInfo: true, // disable the select info panel on top
    selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
  }">
        >
        </vue-good-table>
    </div>
</template>
<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
export default{
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
                { id: 1, date: "22-10-2022", product: 'Lorem', shop: 'Ipsum', quantity: '2', price: '1000', discount: '20%',total: '500' },
                { id: 2, date: "22-10-2022", product: 'Product One', shop: 'Test Shop', quantity: '55', price: '400000', discount: '20%',total: '370000' },
                { id: 3, date: "22-10-2022", product: 'Product Two', shop: 'Ipsum', quantity: '2', price: '1000', discount: '20%',total: '500' },
                { id: 3, date: "22-10-2022", product: 'Product Two', shop: 'Ipsum', quantity: '2', price: '1000', discount: '20%',total: '500' },
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
    async mounted(){
        this.user = this.$store.state.user
        // let a = await this.$api.get("/store/penjualan?token="+this.$store.state.user.token)
        // console.log(this.$store.state.user.token)
        // console.log(a.data)
        // this.rows = a.data.map(e=>{
        //     return {
        //         id: e.id,
        //         date: e.tanggal_transaksi,
        //         product: e.detailPesananList[0].nama_barang,
        //         shop: e.lokasi_store,
        //         quantity: e.sum_qty,
        //         price: e.total,
        //         discount: e.diskon,
        //         total: e.total
        //     }
        // })
    },
}
</script>
<style>

</style>

