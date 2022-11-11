<template>
    <div>
        <div class="container">
            <p class="mt-3">Landing Page</p>
            
            <p class="mt-5">1st SECTION</p>
            <div class="card p-4">
                <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input @change="uploadImage" name="picture_1" class="form-control" type="file" id="formFile">
                </div>
                    <small class="light">1920px x 1080px max. 1MB</small>

                <div class="mb-1 row mt-4">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>Title (1st Row) <span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <input v-model="formData.title1_1" type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-1 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>Title (2st Row) <span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <input v-model="formData.title2_1" type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>Description <span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <textarea v-model="formData.description_1" class="form-control" placeholder="Leave a comment here" ></textarea>
                    </div>
                </div>
                <div class="mb-1 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>Button<span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <input v-model="formData.button_1" type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-1 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>Button Link<span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <input v-model="formData.buttonlink_1" type="text" class="form-control">
                    </div>
                </div>
            </div>

            <p class="mt-5">2nd SECTION</p>
            <div class="card mt-2 p-4">
                <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input @change="uploadImage" name="picture_2" class="form-control" type="file" id="formFile">
                </div>
                <small class="light">1920px x 1080px max. 1MB</small>

                <div class="mb-1 row mt-4">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>Title<span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <input v-model="formData.title_2" type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-1 row mt-4">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>Description<span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <input v-model="formData.description_2" type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-1 row mt-4">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>1st Icon<span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <input @change="uploadImage" name="icon1_1" class="form-control" type="file" id="formFile">
                    </div>
                </div>
                <div class="mb-1 row mt-4">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>1st Icon Title<span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <input v-model="formData.icontitle1_2" type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-1 row mt-4">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>1st Description<span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <textarea v-model="formData.icondescription1_2" class="form-control" placeholder="Leave a comment here"></textarea>
                    </div>
                </div>
                
                <div class="mb-1 row mt-4">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>2st Icon<span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <input @change="uploadImage" name="icon2_2" class="form-control" type="file" id="formFile">
                    </div>
                </div>
                <div class="mb-1 row mt-4">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>2nd Icon Title<span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <input v-model="formData.icontitle2_2" type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-1 row mt-4">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>2nd Description<span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <textarea v-model="formData.icondescription2_2" class="form-control" placeholder="Leave a comment here"></textarea>
                    </div>
                </div>
                
                <div class="mb-1 row mt-4">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>3rd Icon<span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <input @change="uploadImage" name="icon3_2" class="form-control" type="file" id="formFile">
                    </div>
                </div>
                <div class="mb-1 row mt-4">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>3rd Icon Title<span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <input v-model="formData.icontitle3_2" type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-1 row mt-4">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>3rd Description<span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <textarea v-model="formData.icondescription3_2" class="form-control" placeholder="Leave a comment here"></textarea>
                    </div>
                </div>

                <div class="mb-1 row mt-4">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>Button<span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <input v-model="formData.button_2" type="text" class="form-control">
                    </div>
                </div>
                <div class="mb-1 row mt-4">
                    <label for="inputPassword" class="col-sm-2 col-form-label">
                        <p>Button Link<span>*</span></p>
                    </label>
                    <div class="col-sm-10">
                        <input v-model="formData.buttonlink_2" type="text" class="form-control">
                    </div>
                </div>
            </div>

            <button @click="handleUpload" class="btn mt-4 btn-light">Upload</button>
        </div>
    </div>
</template>

<script>
import UploadImageVue from "upload-image-vue";
import '~/assets/css/upload-image-vue.css'
export default{
    data(){
        return{
            formData: {

            },
            loading: false
        }
    },
    components: {
        UploadImageVue,
    },
    layout: "dashboard",
    methods: {
        async handleUpload(){
            let formdata = new FormData()
            for (var key of Object.keys(this.formData)) {
                formdata.append(key, this.formData[key])
            }
            
            let res = await this.$api.post('/landingpage/add',formdata)
            this.$toast.success('Successfull!!!')
        },
        uploadImage(e){
            
            this.formData[e.target.name] = e.target.files[0]
            // const reader = new FileReader();
            // reader.readAsDataURL(image);
            // reader.onload = e => {
            //     this.previewImage = e.target.result;
            //     console.log(this.previewImage);
            // }
        }
    },
    async fetch() {
        let res = await this.$api.get('/landingpage/get')
        this.formData = res.data
        console.log('aoj')
    }
}
</script>
