<template>
    <div>
        <div class="container">
            <div class="d-flex mt-3 align-items-center justify-content-between">
                <p class="mb-0 pb-0">Merch Management</p>
                <button @click="isOpen = !isOpen" class="btn btn-warning">Create New</button>
            </div>

            <div v-show="isOpen" class="card mt-3 p-4">
                <div class="row">
                    <div class="col-md-6">
                        <div class="d-flex justify-content-between align-items-center">
                            <p>Level Icon Active</p>
                            <div class="upload-file">
                                <input accept="image/*" name="img_active" @change="uploadImage" type="file">
                                <img :src="placeholder.img_active" alt="">
                            </div>
                        </div>
                        <div class="d-flex mt-3 justify-content-between align-items-center">
                            <p>Level Icon Idle</p>
                            <div class="upload-file">
                                <input accept="image/*" name="img_idle" @change="uploadImage" type="file">
                                <img :src="placeholder.img_idle" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4 mt-md-5">

                        <div class="mb-1 row">
                            <label for="inputPassword" class="col-4 col-form-label">
                                <p>Merch Name</p>
                            </label>
                            <div class="col">
                                <input v-model="formdata.name" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="mb-1 row">
                            <label for="inputPassword" class="col-4 col-form-label">
                                <p>Description</p>
                            </label>
                            <div class="col">
                                <input v-model="formdata.description" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="mb-1 row">
                            <label for="inputPassword" class="col-4 col-form-label">
                                <p>Minimum Point</p>
                            </label>
                            <div class="col">
                                <input v-model="formdata.minimum" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="mb-1 row">
                            <label for="inputPassword" class="col-4 col-form-label">
                                <p>Valid Until</p>
                            </label>
                            <div class="col">
                                <input v-model="formdata.valid_until" type="date" class="form-control">
                            </div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button v-show="!isEdit" @click="handleUpload" class="btn btn-warning">Save</button>
                            <button v-show="isEdit" @click="handleEdit" class="btn btn-warning">Update</button>
                        </div>

                    </div>
                </div>
            </div>

            <p class="mt-4">Merch</p>
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
            placeholder: {
                img_active: '/img/placeholder-img.png',
                img_idle: '/img/placeholder-img.png',
            },
            formdata: {

            },
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                },
                {
                    label: 'Merch Name',
                    field: 'name',
                },
                {
                    label: 'Minimum Point',
                    field: 'minimum',
                },
                {
                    label: 'Valid Until',
                    field: 'valid_until'
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
        uploadImage(e) {
            const image = e.target.files[0]
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = z => {
                this.placeholder[e.target.name] = z.target.result;
            }
            this.formdata[e.target.name] = e.target.files[0]
        },

        async handleUpload() {
            if (Object.keys(this.formdata).length == 6) {
                this.formdata.active = 1
                let formData = new FormData()
                for (var key of Object.keys(this.formdata)) {
                    formData.append(key, this.formdata[key])
                }
                let res = await this.$api.post('merch/add', formData)
                if (res.data.isError == 1) {
                    res.data.errors.forEach(err => {
                        this.$toast.error(err.message)
                    })
                }
                this.$toast.success(res.data.message)
                await this.$fetch()
                this.placeholder = {
                    img_active: '/img/placeholder-img.png',
                    img_idle: '/img/placeholder-img.png',
                }
                this.formdata = {}
            } else {
                this.$toast.error("Form required!!!")
            }

        },
        async editLevel(id) {
            window.scrollTo({ top: 0 })
            this.isOpen = true
            this.isEdit = id
            let res = await this.$api.get('merch/get?id=' + id)
            console.log(res)
            this.formdata = {
                id: res.data.data.id,
                name: res.data.data.name,
                description: res.data.data.description,
                minimum: res.data.data.minimum,
                valid_until: res.data.data.valid_until,
            }
            this.placeholder = {
                img_active: res.data.data.img_active,
                img_idle: res.data.data.img_idle
            }
        },
        async handleEdit() {
            let fData = new FormData()
            for (var key of Object.keys(this.formdata)) {
                fData.append(key, this.formdata[key])
            }
            let res = await this.$api.put('/merch/edit/' + this.isEdit, fData)
            await this.$fetch()
            this.$toast.success("Data Updated!")
            this.placeholder = {
                img_active: '/img/placeholder-img.png',
                img_idle: '/img/placeholder-img.png',
            }
            this.formdata = {}

        },
        async handleDelete(id) {
            let res = await this.$api.delete('/merch/delete/' + id)
            this.$toast.success(res.data.message)
            await this.$fetch()
        }

    },
    async fetch() {

        let res = await this.$api.get('merch/get')
        this.rows = res.data.data.map(e => {
            return {
                id: e.id,
                name: e.name,
                minimum: e.minimum,
                valid_until: e.valid_until,
            }
        })
    }
}
</script>