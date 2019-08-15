<template>
    <div class="shangxia">
        <ul>
      <li v-for="(data,index) in datalist" :key="data.title" :class="currentIndex===index?'active':''"  @click="handleClick(index)">

        {{data.title}}
      </li>
    </ul>
    </div>
</template>
<script>

import axios from 'axios'

export default {
  data () {
    return {
      datalist: [],
      currentIndex: 0
    }
  },

  methods: {
    handleClick (index) {
      console.log(index)
      this.currentIndex = index
    }
  },

  mounted () {
    axios({
      url: '/wap/room/filter.json?city_code=110000',
      headers: {
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data.sort
    })
  }
}
</script>
<style  lang="scss" scoped>
.shangxia{
  margin-top: 70px;
  text-align: center;
  color: #585757;
}
.active{
    color: #ffa000;
  }
</style>
