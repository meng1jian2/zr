<template>
    <div class="swiper-container">
            <div class="swiper-wrapper">
               <slot></slot>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

        </div>
</template>

<script>
import Swiper from 'swiper' // js
import 'swiper/dist/css/swiper.css' // css
export default {
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {

        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-wrapper{
  img{
    width: 100%;
  }
}

.swiper-pagination{
  text-align: right;
}
</style>
