<template>
    <div class="hezu">
        <div  v-for="data in datalist.type_extra" :key="data.type" class="mian">
            <h4>{{data.title}}</h4>
            <p class="ss">{{data.desc}}</p>
            <span class="an" v-for="ie in datalist.type" :key="ie.value" v-if="ie.type === data.type ? true : false" @click="handLe(ie.value)">{{ie.title}}</span>
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
    handLe (value) {
      console.log(`${value}`)
      this.$router.push(`/hezutail/${value}`)
    }
  }
}
</script>
<style lang="scss" scoped>
    .hezu{
        margin-top: 70px;
        text-align: center;
        .mian{
            height: 100px;
            border-bottom: 1px solid #ccc;
            padding: 10px;
            span,p{
                font-size: 13px;
                color: #585757;
            }
            .ss{
                margin-top: 10px;
                margin-bottom:10px;
            }
            .an{
                font-size: 15px;
                width: 68px;
                height: 28px;
                padding-top: 5px;
                display:inline-block;
                margin:5px;
                border: 1px solid #999;
            }

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
