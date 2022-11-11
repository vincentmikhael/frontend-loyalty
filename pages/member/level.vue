<template>
    <div>
        <img src="/img/logo.png" class="img-fluid" alt="">
        <div class="row align-items-center">
            <div class="col-5">
                <div class="card-member">
                    <div class="mt-5">{{ user.namaPengguna }}</div>
                    <p>Member ID: {{ user.id_pengguna }}</p>
                </div>
            </div>
            <div class="col-3">
                <!-- <div class="">
                    <apexchart width="300" type="donut" :options="options" :series="series"></apexchart>
                </div> -->
            </div>
            <div class="col-4">
                <div class="card p-2 mt-4">
                    <div class="d-flex justify-content-end">
                        <div class="btn-group">
                            <button class="btn btn-secondary bg-transparent btn-sm dropdown-toggle" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
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



        <p class="mt-3">PURCHASE HISTORY</p>
        <vue-good-table :columns="columns" :rows="rows" theme="nocturnal" :select-options="{
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
    async mounted() {
        this.user = this.$store.state.user
        let a = await this.$api.get("/store/penjualan?token=" + this.$store.state.user.token)
        console.log(this.$store.state.user.token)
        console.log(a.data)
        this.rows = a.data.map(e => {
            return {
                id: e.id,
                date: e.tanggal_transaksi,
                product: e.detailPesananList[0].nama_barang,
                shop: e.lokasi_store,
                quantity: e.sum_qty,
                price: e.total,
                discount: e.diskon,
                total: e.total
            }
        })
    },
}
</script>
<style>
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

