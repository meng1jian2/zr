<template>
  <div class="zujin">
    <ul class="price">
      <li
      v-for="(data,index) in datalist"
      :key="data.title"
      :class="currentIndex===index?'active':''"  @click="handleClick(index)"
      >
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
      this.datalist = res.data.data.price
    })
  }
}
</script>
<style scoped>
.zujin{
    margin-top: 70px;
    text-align: center
}
.price{
    flex: 1;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 435px;
    font-size: 17px;
    overflow: hidden;
    color: #999;
    line-height: 1;
}
.price li{
  height: 30px;
  margin-bottom: 15px;
}
.active{
    color: #ffa000;
  }
</style>
