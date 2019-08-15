<template>
  <div>
    <tabbar></tabbar>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'
// import axios from 'axios'
export default {
  components: {
    tabbar
  }
}

</script>
<style lang="scss">
 *{
    margin:0;
    padding:0;
    list-style: none;
  }

</style>
