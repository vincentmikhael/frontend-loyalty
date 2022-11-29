<template>
    <div>
        <div class="container">
            <div class="mt-3">Member Management</div>
            <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0 pb-0">Editor</p>
                <button @click="isOpen = !isOpen" class="btn btn-warning">Create New</button>
            </div>

            <div v-show="isOpen" class="card mt-3 p-4">
               <div class="row">
                <div class="col-lg-3">
                    <div class="upload-file">
                        <input accept="image/*" name="picture" @change="uploadImage" type="file">
                        <img :src="picture" alt="">
                    </div>
                </div>

                <div class="col-lg-9">

                    <form>
                        <div class="row">
                            <div class="col-6">

                                <div class="form-floating mb-3 form-dark">
                                    <input type="text" v-model="formdata.fullname" class="form-control" id="floatingInput" placeholder="Fullname" />
                                    <label for="floatingInput">Fullname</label>
                                </div>
                                <div class="form-floating form-dark">
                                    <input v-model="formdata.id_number" type="text" class="form-control" id="floatingPassword"
                                        placeholder="ID Number" />
                                    <label for="floatingPassword">ID Number (KTP/PASSPORT)</label>
                                </div>
                                <div class="form-floating form-dark">
                                    <input v-model="formdata.address" type="text" class="form-control" id="floatingPassword" placeholder="Address" />
                                    <label for="floatingPassword">Address</label>
                                </div>
                                <div class="form-floating form-dark">
                                    <input v-model="formdata.birthdate" type="date" class="form-control" id="floatingPassword"
                                        placeholder="Birthdate" />
                                    <label for="floatingPassword">Birthdate</label>
                                </div>
                                <div class="ms-3">
                                    <p class="mt-4">Gender</p>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" v-model="formdata.gender" id="inlineRadio1" value="male">
                                        <label class="form-check-label" for="inlineRadio1">Male</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" v-model="formdata.gender" id="inlineRadio2" value="famale">
                                        <label class="form-check-label" for="inlineRadio2">Female</label>
                                    </div>
                                    <p class="mt-4">Blood Type</p>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" v-model="formdata.blood_type" id="inlineRadio1" value="O">
                                        <label class="form-check-label" for="inlineRadio1">O</label>
                                    </div>
                                
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" v-model="formdata.blood_type" id="inlineRadio2" value="A">
                                        <label class="form-check-label" for="inlineRadio2">A</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" v-model="formdata.blood_type" id="inlineRadio2" value="B">
                                        <label class="form-check-label" for="inlineRadio2">B</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" v-model="formdata.blood_type" id="inlineRadio2" value="AB">
                                        <label class="form-check-label" for="inlineRadio2">AB</label>
                                    </div>
                                </div>
                                
                                <div class="form-floating form-dark">
                                    <input v-model="formdata.sport_enthusiast" type="text" class="form-control" id="floatingPassword"
                                        placeholder="Sport Enthusiast" />
                                    <label for="floatingPassword">Sport Enthusiast</label>
                                </div>
                                <div class="form-floating form-dark">
                                    <input v-model="formdata.phone" type="text" class="form-control" id="floatingPassword" placeholder="Phone Number" />
                                    <label for="floatingPassword">Phone Number</label>
                                </div>
                                <div class="form-floating form-dark">
                                    <input v-model="formdata.email" type="text" class="form-control" id="floatingPassword" placeholder="Email" />
                                    <label for="floatingPassword">Email</label>
                                </div>
                                <div class="form-floating form-dark">
                                    <input v-model="formdata.password" type="text" class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>

                            </div>
                            <div class="col-6">
                                <div class="form-floating form-dark">
                                    <input disabled v-model="formdata.level" type="text" class="form-control" id="floatingPassword" placeholder="Address" />
                                    <label for="floatingPassword">Point</label>
                                </div>
                                <div class="form-floating form-dark">
                                    <input disabled v-model="formdata.level" type="text" class="form-control" id="floatingPassword" placeholder="Address" />
                                    <label for="floatingPassword">Level</label>
                                </div>
                            </div>
                        </div>
                        
                        <button v-show="!isEdit" @click="register" type="button" id="signin" class="btn btn-outline-light p-2 mt-5 px-4">SIGN UP</button>
                        <button v-show="isEdit" @click="handleEdit" type="button" id="signin" class="btn btn-outline-light p-2 mt-5 px-4">Save</button>
                    </form>

                </div>
               </div>
            </div>

            <p class="mt-4">Level Data</p>
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
    </div>
</template>
<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

export default{
    layout: 'dashboard',
    components: {
        VueGoodTable,
    },
    data(){
        return{
            isOpen: false,
            isEdit: false,
            picture: '/img/placeholder-img.png',
            formdata: {

            },
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                },
                {
                    label: 'Name',
                    field: 'fullname',
                },
                {
                    label: 'Email',
                    field: 'email',
                },
                {
                    label: 'Phone',
                    field: 'phone_number',
                },
                {
                    label: 'Level',
                    field: 'level'
                },
                {
                    label: 'Point',
                    field: 'point'
                },
                {
                    label: 'Member Since',
                    field: 'createdAt'
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

        async register() {
            let formData = new FormData()
            for (var key of Object.keys(this.formdata)) {
                formData.append(key, this.formdata[key])
            }

                let res = await this.$api.post('/auth/register', formData)
                this.formdata = {}
            this.picture = '/img/placeholder-img.png'
            this.$toast.success("User has been saved")
            await this.$fetch()
            // this.$store.commit('setUser',res.data)
            // this.$cookies.set('token',res.data.token)
            // this.$nuxt.$options.router.push('/member')
        },
        async editLevel(id){
            window.scrollTo({ top: 0 })
            this.isOpen = true
            this.isEdit = id
            let res = await this.$api.get('user/get?id='+id)
            res.data.data[0].password = ""
            this.formdata = res.data.data[0]
            this.picture = res.data.data[0].picture
            

        },
        async handleEdit(){
            let fData= new FormData()
            for (var key of Object.keys(this.formdata)) {
                fData.append(key, this.formdata[key])
            }

            let res = await this.$api.put('/user/edit/'+this.isEdit,fData)
            this.$toast.success("Data Updated!")
            this.$fetch()
            this.picture = '/img/placeholder-img.png'
            this.formdata = {}
            
        },
        async handleDelete(id){
            this.$confirm("Delete data", "Are you sure?", "warning").then(async ()=>{
                let res = await this.$api.delete('/level/delete/' + id)
                this.$toast.success(res.data.message)
                this.$fetch()
            })
        }
        
    },
    async fetch() {
        let res = await this.$api.get('user/get?role=member')
        console.log(res)
        this.rows = res.data.data.map(e=>{
            return {
                id: e.id,
                createdAt: e.createdAt,
                fullname: e.fullname,
                email: e.email,
                phone_number: e.phone_number,
                level: "-",
                point: "0"
            }
        })
    }
}
</script>