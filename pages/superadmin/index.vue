<template>
    <div>
        <div class="container">
            <div class="d-flex mt-3 align-items-center justify-content-between">
                <p class="mb-0 pb-0">Role Management</p>
                <button @click="isOpen = !isOpen" class="btn btn-warning">Create New</button>
            </div>

            <div v-show="isOpen" class="card mt-3 p-4">
                <div class="row">
                    <div class="col-md-6 mt-4 mt-md-5">

                        <div class="mb-1 row">
                            <label for="inputPassword" class="col-4 col-form-label">
                                <p>Name</p>
                            </label>
                            <div class="col">
                                <input v-model="formdata.fullname" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="mb-1 row">
                            <label for="inputPassword" class="col-4 col-form-label">
                                <p>Email</p>
                            </label>
                            <div class="col">
                                <input v-model="formdata.email" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="mb-1 row">
                            <label for="inputPassword" class="col-4 col-form-label">
                                <p>Password</p>
                            </label>
                            <div class="col">
                                <input v-model="formdata.password" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="mb-1 row">
                            <label for="inputPassword" class="col-4 col-form-label">
                                <p>Role</p>
                            </label>
                            <div class="col">
                                <select v-model="formdata.role" class="form-select" aria-label="Default select example">
                                    <option disabled>Role Menu</option>
                                    <option :selected="formdata.role == 'member'" value="member">Member</option>
                                    <option :selected="formdata.role == 'administrator'" value="administrator">Administrator</option>
                                    <option :selected="formdata.role == 'manajemen'" value="manajemen">Manajemen</option>
                                </select>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button v-show="!isEdit" @click="handleUpload" class="btn btn-warning">Save</button>
                            <button v-show="isEdit" @click="handleEdit" class="btn btn-warning">Update</button>
                        </div>

                    </div>
                </div>
            </div>

            <p class="mt-4">Role Administrator & Manajemen</p>
            <div class="card mt-2 px-2 py-3">
                <vue-good-table class="" :columns="columns" :rows="rows" theme="nocturnal" :select-options="{
                    enabled: true,
                    selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
                    selectionInfoClass: 'custom-class',
                    selectionText: 'rows selected',
                    clearSelectionText: 'clear',
                    disableSelectInfo: true, // disable the select info panel on top
                    selectAllByGroup: true,
                }" :search-options="{
                    enabled: true,
                }">
                    >
                    <template slot="table-row" slot-scope="props">
                        <span v-if="props.column.field == 'action'">
                            <span class="me-2">
                                <i @click="editLevel(props.row.id)" class="fa-regular fa-pen-to-square"></i>
                            </span>
                            <span>
                                <i @click="handleDelete(props.row.id)" class="fa-regular fa-trash-can"></i>
                            </span>
                        </span>
                        <span v-else>
                            {{ props.formattedRow[props.column.field] }}
                        </span>
                    </template>
                </vue-good-table>
            </div>



        </div>
    </div>
</template>
<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

export default {
    layout: 'dashboard',
    components: {
        VueGoodTable
    },
    data() {
        return {
            isOpen: false,
            isEdit: false,
            formdata: {

            },
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                },
                {
                    label: 'Name',
                    field: 'name',
                },
                {
                    label: 'Email',
                    field: 'email',
                },
                {
                    label: 'role',
                    field: 'role'
                },
                {
                    label: 'Action',
                    field: 'action'
                },
            ],
            rows: [],
        }
    },
    methods: {
        async handleUpload() {
            if (Object.keys(this.formdata).length == 4) {
                this.formdata.active = 1
                let formData = new FormData()
                for (var key of Object.keys(this.formdata)) {
                    formData.append(key, this.formdata[key])
                }
                let res = await this.$api.post('auth/register', formData)
                if (res.data.isError == 1) {
                    res.data.errors.forEach(err => {
                        this.$toast.error(err.message)
                    })
                }else{
                    this.$toast.success(res.data.message)
                }
                await this.$fetch()
                this.formdata = {}
            } else {
                this.$toast.error("Form required!!!")
            }

        },
        async editLevel(id) {
            window.scrollTo({ top: 0 })
            this.isOpen = true
            this.isEdit = id
            let res = await this.$api.get('user/get?role=manajemen,administrator&id=' + id)
            this.formdata = {
                fullname: res.data.data[0].fullname,
                email: res.data.data[0].email,
                role: res.data.data[0].role,
            }
            this.placeholder = {
                img_active: res.data.data[0].img_active,
                img_idle: res.data.data[0].img_idle
            }
        },
        async handleEdit() {
            let fData = new FormData()
            for (var key of Object.keys(this.formdata)) {
                fData.append(key, this.formdata[key])
            }
            let res = await this.$api.put('/user/edit/' + this.isEdit, fData)
            console.log(res)
            this.$toast.success("Data Updated!")
            this.$fetch()
            this.formdata = {}

        },
        async handleDelete(id) {
            this.$confirm("Delete data", "Are you sure?", "warning").then(async ()=>{
                let res = await this.$api.delete('/user/delete/' + id)
                this.$toast.success(res.data.message)
                await this.$fetch()
            })
            
        }

    },
    async fetch() {

        let res = await this.$api.get('user/get?role=manajemen,administrator')
        this.rows = res.data.data.map(e => {
            return {
                id: e.id,
                name: e.fullname,
                email: e.email,
                role: e.role,
            }
        })
    },
    mounted(){
        this.$fetch()
    }
}
</script>