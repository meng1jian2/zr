<template>
    <div class="shaixuan">
       <div class="face">
           <h4>房源朝向</h4>
            <span v-for="data in datalist.face" :key="data.index" @click="chao(data.value)">{{data.title}}</span>
       </div>
       <div class="feature">
           <h4>房源特色</h4>
            <span v-for="data in datalist.feature" :key="data.index" @click="teSe(data.value)" >{{data.title}}</span>
       </div>
       <div class="leasetype">
           <h4>签约时长</h4>
           <span v-for="data in datalist.leasetype" :key="data.index" @click="time(data.value)">{{data.title}}</span>
       </div>
       <div class="tag">
           <h4>房源状态</h4>
           <span v-for="data in datalist.tag" :key="data.index" @click="fangshi(data.value)">{{data.title}}</span>
       </div>
       <div class="xia">
        <router-link to="/film" tag="button" class="back">回去</router-link>
        <button class="go">就决定是你了</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []

      // itemlist: []
    }
  },

  mounted () {
    axios({
      url: 'http://m.ziroom.com/wap/room/filter.json?city_code=110000',
      headers: {

      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data
    })
  },

  methods: {
    chao (value) {
      console.log(`${value}`)
      this.$router.push(`/facetail/${value}`)
    },

    teSe (value) {
      console.log(`${value}`)
      this.$router.push(`/featuretail/${value}`)
    },

    time (value) {
      console.log(`${value}`)
      this.$router.push(`/leasetypetail/${value}`)
    },
    
    fangshi (value) {
      console.log(`${value}`)
      this.$router.push(`/tagtail/${value}`)
    }

  }
}
</script>
<style lang="scss" scoped>
    .shaixuan{
        margin-top: 70px;
        text-align: center;
        .face{
            height:120px;
            border-bottom: 1px solid #ccc;
        }
        .feature{
            height:160px ;
             border-bottom: 1px solid #ccc;
        }
        .leasetype{
            height:82px ;
             border-bottom: 1px solid #ccc;
        }
        .tag{
            height:82px ;
             border-bottom: 1px solid #ccc;
        }
        span{
                font-size: 10px;
                width: 60px;
                height: 20px;
                padding-top: 5px;
                display:inline-block;
                margin:5px;
                border: 1px solid #999;
                 color: #585757;
        }
        .xia{
            margin-top:20px;
        .back{
            width:30%;
            height: 43px;
            color:#fff;
            background-Color:#999;
            border: none;
            border-radius: 3px;
        }
        .go{
            width: 60%;
            height: 43px;
            margin-left:20px;
            color:#fff;
            background-Color:#f60;
            border: none;
            border-radius: 3px;
        }
        }
    }
</style>
