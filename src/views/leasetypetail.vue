<template>
    <div class="mins">
        <div v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-immediate-check="false"
    infinite-scroll-distance="0">
        <div class="kuang" v-for="data in datalist" :key="data.id" @click="chuanZhi(data.id)">
            <div class="left">
                <img :src="data.photo_min_webp">
            </div>
            <div class="right">
                <h4>{{data.type_text}}.{{data.name}}</h4>
                <div class="aaa">
                    <span class="arefl">{{data.area}}㎡ | {{data.floor}}/{{data.floor_total}}层</span>
                    <span class="price">价钱面议</span>
                </div>
                <div class="addre">
                    <i class="iconfont icon-map"></i><span>{{data.subway_station_info}}</span>
                </div>
                <div class="tese">
                    <span>{{data.tags[0].title}}</span>
                    <span>{{data.tags[1].title}}</span>
                    <span>{{data.tags[2].title}}</span>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      current: 1,
      total: 1
    }
  },
  mounted () {
    axios({
      url: `http://m.ziroom.com/v7/room/list.json?city_code=110000&page=1&type=&price=&face=&rface=&hface=&feature=&around=&leasetype=${this.$route.params.value}&tag=&version=&area=&subway_code=&subway_station_code=&district_code=&bizcircle_code=&clng=&clat=&suggestion_type=&suggestion_value=&keywords=&sort=&rapid=`,
      headers: {

      }
    }).then(res => {
      this.datalist = res.data.data.rooms
    })
  },
  methods: {
    chuanZhi (id) {
      this.$router.push(`/detail/${id}`)
    },
    loadMore () {
      console.log('到底了,为什么不加载？？？？')
      this.loading = true

      if (this.total === this.datalist.length) {
        return
      }

      this.current++
      axios({
        url: `http://m.ziroom.com/v7/room/list.json?city_code=110000&page=${this.current}&type=&price=&face=&rface=&hface=&feature=&around=&leasetype=&tag=&version=&area=&subway_code=&subway_station_code=&district_code=&bizcircle_code=&clng=&clat=&suggestion_type=&suggestion_value=&keywords=&sort=`,
        headers: {

        }
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.rooms]
        this.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.mins{
    margin-top:70px;
    font-size: 14px;
.kuang{
    border-bottom: 1px solid #ccc;
    height: 131px;
    .left{
        float: left;
        width: 35%;
        img{
            width: 122px;
            height: 92px;
            margin-top: 19px;
            margin-left:11px;
        }
    }
    .right{
        margin-top: 10px;
        float: right;
        width: 55%;
        .price{
            color: #ffa000;
            float: right;
            margin-right:5px;
        }
        .tese{
            span{
                padding: 2px;
                 margin-right:10px;
                 font-size: 12px;
                 border:1px solid #585757;
                }
            }
        span{
            color:#585757;
            }
        }
    }
}
</style>
