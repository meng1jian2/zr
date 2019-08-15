<template>
  <div class="weizhi">
    <ul class="left-list l">
      <li>附近</li>
      <li v-on:click="handleMyClick()">商圈</li>
      <li v-on:click="handleMyClick2()">地铁</li>
    </ul>
    <ul class="right-list l" v-show="isShow">
      <li v-for="(data,index) in datalist" :key="data.district_code"
      class="right-list-li"
      :class="currentIndex===index?'active':''"  @click="handleClick(index)">
      {{data.district_name}}
      </li>
    </ul>
    <ul class="right-lister l" v-show="isShow2">
      <li v-for="(data,index) in datalist1" :key="data.subway_code" class="right-lister-li" :class="currentIndex===index?'active':''"  @click="handleClick(index)">
      {{data.subway_name}}
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
      datalist1: [],
      isShow: true,
      isShow2: false,
      currentIndex: 0
    }
  },
  methods: {
    handleMyClick () {
      this.isShow === true,
      this.isShow2 === false
    },
    handleMyClick2 () {
      this.isShow = false,
      this.isShow2 = true
    },
    handleClick (index) {
      this.currentIndex = index
    }
  },
  mounted () {
    axios({
      url: '/v5/setting/bizcircle.json?city_code=110000',
      headers: {

      }

    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data
    })
    axios({
      url: '/v5/setting/subway.json?city_code=110000',
      headers: {

      }

    }).then(res => {
      console.log(res.data)
      this.datalist1 = res.data.data
    })
  }

}

</script>
<style scoped>
.weizhi{
    margin-top: 70px;}
.l{
  float: left;
    }
.left-list{
    flex: 1;
    overflow: hidden;
    text-align: center;
    width:50%;
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 1;
}
.left-list li{
    position: relative;
    margin-top: 15px;
    font-size: 17px;
    color: #666;
}
.right-list{
    flex: 1;
    height: 466px;
    overflow: hidden;
    text-align: center;
    background-color: #fbfbfb;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 50%;
    overflow: scroll;
    line-height: 1;
}
.right-list-li{
    position: relative;
    margin-top: 15px;
    font-size: 17px;
    color: #666;
    height: 30px;
}
.right-lister{
    flex: 1;
    height: 466px;
    overflow: hidden;
    text-align: center;
    background-color: #fbfbfb;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 50%;
    overflow: scroll;
}
.right-lister-li{
    position: relative;
    margin-top: 15px;
    font-size: 17px;
    color: #666;
    height: 30px;
}
.active{
    color: #ffa000;
  }
</style>
