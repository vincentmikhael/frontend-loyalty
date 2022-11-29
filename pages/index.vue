<template>
  <div class="" v-if="$fetchState.pending"></div>
  
  <div v-else>
    <div class="jumbotron" :style="{ 'background-image': 'url('+content.picture_1+')'}">
      <div class="content">
        <h1><span>{{content.title1_1}}</span> <br> {{content.title2_1}}</h1>
        <p class="text-jumbotron">{{content.description_1}}</p>
          <NuxtLink :to="{ path: content.buttonlink_1 }">
            <button type="button" class="btn btn-outline-light p-3 mt-4">{{content.button_1}}</button>
          </NuxtLink>
      </div>
    
      <div class="d-flex icon-jumbotron justify-content-center">
        <img src="/img/logo-jumbotron.png" alt="">
      </div>
    </div>
    
    <section id="membership" >
      <div class="content">
        <div class="text-center d-md-flex align-items-center">
          <img class="img-fluid" :src="content.picture_2" alt="">
          <div class="text-center ms-0 ms-md-3 text-md-start">
            <h1>{{content.title_2}}</h1>
            <p>{{content.description_2}}</p>
          </div>
        </div>
    
        <div class="row mt-5 mt-md-2 justify-content-center">
          <div class="col-12 col-md-4">
            <div class="d-flex  align-items-center">
              <img src="img/tags.png" alt="">
              <div class="ms-3">
                <p class="light">{{content.icontitle1_2}}</p>
                <p class="light">{{content.icondescription1_2}}</p>
              </div>
    
            </div>
          </div>
          <div class="col-12 col-md-4 my-3 my-md-0">
            <div class="d-flex align-items-center">
              <img src="img/gift.png" alt="">
              <div class="ms-3">
                <p class="light">{{content.icontitle2_2}}</p>
                <p class="light">{{content.icondescription2_2}}</p>
              </div>
    
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="d-flex align-items-center">
              <img src="img/bc.png" alt="">
              <div class="ms-3">
                <p class="light">{{content.icontitle3_2}}</p>
                <p class="light">{{content.icondescription3_2}}</p>
              </div>
    
            </div>
          </div>
        </div>
    
        <div class="d-flex justify-content-center mt-5">
          <NuxtLink :to="{path: content.buttonlink_2}">
          <button type="button" class="btn btn-outline-light p-3">{{content.button_2}}</button>
          </NuxtLink>
        </div>
    
      </div>
    
    </section>
    
    <section class="dark" id="news">
      <div class="content">
        <h1><span>NEWS &</span> PROMO</h1>

    
        <div class="d-flex gap-5" style="overflow-x: scroll">
          <div class="" v-for="data in news" :key="data.id">
            <NuxtLink :to="'/news/'+data.title+'?id='+data.id">
              <div class="news-card" style="flex-shrink: 0;">
                <img class="img-fluid" style="object-fit: cover; height: 200px;" :src="data.picture" alt="">
                <p>{{data.title}}</p>
              </div>
            </NuxtLink>
          </div>
          
  
      </div>
    
      </div>
    </section>
    <section>
      <div class="content d-md-flex text-center text-md-start align-items-center">
        <img class="img-fluid" src="img/phone.png" alt="">
        <div class="ms-0 ms-md-4">
          <h1><span>WILL BE</span> AVAILABLE SOON</h1>
          <img src="img/store.png" alt="">
        </div>
      </div>
    
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      content: "",
      news: []
    }
  },
  name: 'IndexPage',
  layout: 'default',
  computed: {
    loading() {
      return this.$store.state.page.loading
    }
  },
  methods: {
    async getContent(){
      let res = await this.$api.get('/landingpage/get')
      let resNews = await this.$api.get('/news/get')
      this.news = resNews.data.data
      this.content = res.data
    },

  },
  async fetch() {
    this.$store.commit('setLoading',true)
    await this.getContent()

    console.log('aoj')
    this.$store.commit('setLoading',false)
  }
}
</script>


