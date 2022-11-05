<template>
  <div>

    <div class="jumbotron">
      <div class="content">
        <h1><span>GET YOUR</span> <br> MEMBERSHIP</h1>
        <p class="text-jumbotron">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
          velit
          interdum, ac aliquet
          odio
          mattis. Class aptent taciti sociosqu ad litora torquent</p>
          <NuxtLink to="/login">
            <button type="button" class="btn btn-outline-light p-3">MEMBER AREA</button>
          </NuxtLink>
      </div>
    
      <div class="d-flex icon-jumbotron justify-content-center">
        <img src="" alt="">
      </div>
    </div>
    
    <section>
      <div class="content">
        <div class=" d-md-flex align-items-center">
          <img class="img-fluid" src="img/card.png" alt="">
          <div class="text-center text-md-start">
            <h1>MEMBERSHIP <span>PROGRAM</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio
              mattis. Class aptent taciti sociosqu ad litora torquent</p>
          </div>
        </div>
    
        <div class="row mt-5 justify-content-center">
          <div class="col">
            <div class="d-flex align-items-center">
              <img src="img/tags.png" alt="">
              <div class="ms-3">
                <p class="light">LOREM IPSUM</p>
                <p class="light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
    
            </div>
          </div>
          <div class="col my-3 my-md-0">
            <div class="d-flex align-items-center">
              <img src="img/gift.png" alt="">
              <div class="ms-3">
                <p class="light">LOREM IPSUM</p>
                <p class="light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
    
            </div>
          </div>
          <div class="col">
            <div class="d-flex align-items-center">
              <img src="img/bc.png" alt="">
              <div class="ms-3">
                <p class="light">LOREM IPSUM</p>
                <p class="light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
    
            </div>
          </div>
        </div>
    
        <div class="d-flex justify-content-center mt-5">
          <button type="button" class="btn btn-outline-light p-3">BECOME A MEMBER</button>
        </div>
    
      </div>
    
    </section>
    
    <section class="dark">
      <div class="content">
        <h1><span>NEWS &</span> PROMO</h1>
    
        <div class="d-flex" style="overflow-x: hidden">
         <div class="news-card" style="flex-shrink: 0;">
            <img class="img-fluid" src="img/news.png" alt="">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div class="news-card" style="flex-shrink: 0;">
          <img class="img-fluid" src="img/news2.png" alt="">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
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
  name: 'IndexPage',
  layout: 'default'
}
</script>
