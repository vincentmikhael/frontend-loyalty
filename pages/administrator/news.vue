<template>
    <div class="container">
        <div class="d-flex mt-3 align-items-center justify-content-between">
            <p class="mb-0 pb-0">News & Promo</p>
            <button @click="isOpen = !isOpen" class="btn btn-warning">Create New</button>
        </div>

        <div v-show="isOpen" class="card mt-3 p-4">
            <p class="mb-0">Picture</p>
            <div class="upload-file">
                <input accept="image/*" name="picture" @change="uploadImage" type="file">
                <img :src="picture" alt="">
            </div>
            <small class="light">1920px x 1080px max. 1MB</small>
            <div class="mb-1 mt-3 row">
                <label for="inputPassword" class="col-3 col-form-label">
                    <p>Title</p>
                </label>
                <div class="col">
                    <input v-model="formdata.title" type="text" class="form-control">
                </div>
                
            </div>
            <div class="mb-1 mt-3 row">
                <label for="inputPassword" class="col-3 col-form-label">
                    <p>Category</p>
                </label>
                <div class="col">
                    <input v-model="formdata.category" type="text" class="form-control">
                </div>
            </div>
            <div class="mb-1 mt-3 row">
                <label for="inputPassword" class="col-3 col-form-label">
                    <p>Description</p>
                </label>
                <div class="col">
                    <vue-editor v-model="formdata.description" :editorToolbar="customToolbar" placeholder="..."></vue-editor>
                </div>
            </div>
            <div class="d-flex mt-4 justify-content-end">
                <button v-show="!isEdit" @click="handleUpload" class="btn btn-warning">Save</button>
                <button v-show="isEdit" @click="handleEdit" class="btn btn-warning">Update</button>
            </div>
        </div>
        
        <p class="mt-4">Voucher</p>
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
                        {{props.formattedRow[props.column.field]}}
                    </span>
                </template>
            </vue-good-table>
        </div>

    </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

    export default{
        layout: 'dashboard',
        components: {
            VueGoodTable
        },
        isEdit: false,
        data(){
            return{
                isOpen: true,
                picture: '/img/placeholder-img.png',
                formdata: {},
                columns: [
                    {
                        label: 'ID',
                        field: 'id',
                    },
                    {
                        label: 'Date',
                        field: 'date',
                    },
                    {
                        label: 'Title',
                        field: 'title',
                    },
                    {
                        label: 'Category',
                        field: 'category'
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
                    this.picture = z.target.result;
                }
                this.formdata[e.target.name] = e.target.files[0]
            },
            async handleUpload(){
                if (Object.keys(this.formdata).length == 4){
                    console.log(this.formdata)
                    let formData = new FormData()
                    for (var key of Object.keys(this.formdata)) {
                        formData.append(key, this.formdata[key])
                    }

                    let res = await this.$api.post('news/add', formData)
                    if (res.data.isError == 1) {
                        res.data.errors.forEach(err => {
                            this.$toast.error(err.message)
                        })
                    }else{
                        this.$toast.success(res.data.message)
                        await this.$fetch()
                        this.picture = '/img/placeholder-img.png'
                        this.formdata = {}
                    }
                }else{
                    this.$toast.error("Form required!!!")
                }


                
            },
            async editLevel(id) {
                window.scrollTo({ top: 0 })
                this.isOpen = true
                this.isEdit = id
                let res = await this.$api.get('news/get?id=' + id)
                this.formdata = {
                    id: res.data.data[0].id,
                    date: res.data.data[0].date,
                    title: res.data.data[0].title,
                    category: res.data.data[0].category,
                    description: res.data.data[0].description,
                }
                this.picture = res.data.data[0].picture
            },
            async handleEdit() {
                let fData = new FormData()
                for (var key of Object.keys(this.formdata)) {
                    fData.append(key, this.formdata[key])
                }
                let res = await this.$api.put('/news/edit/' + this.isEdit, fData)
                if(!res.data.isError){
                    this.$toast.success("Data Updated!")
                }
                
                await this.$fetch()
                this.picture = '/img/placeholder-img.png'
                this.formdata = {}

            },
            async handleDelete(id) {
                this.$confirm("Delete data", "Are you sure?", "warning").then(async()=>{
                    let res = await this.$api.delete('/news/delete/' + id)
                    this.$toast.success(res.data.message)
                    await this.$fetch()
                })
            }
        },
        
        async fetch() {

            let res = await this.$api.get('news/get')
            this.rows = res.data.data.map(e => {
                return {
                    id: e.id,
                    date: e.createdAt,
                    title: e.title,
                    category: e.category,
                }
            })
        }
    }
</script>

<style>
.ql-formats svg{
    filter: invert(100%) sepia(0%) saturate(1396%) hue-rotate(147deg) brightness(120%) contrast(105%)
}
.ql-toolbar .ql-formats .ql-image,.ql-toolbar .ql-formats .ql-video{
    display: none;
}
.quillWrapper .ql-snow.ql-toolbar,.ql-container.ql-snow{
    border: none !important;
}
.quillWrapper{
    background:#2C2D36;
    border-radius: 20px;
}
</style>