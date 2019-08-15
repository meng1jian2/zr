<template>
  <div id="app">
    <header>
      <div class="box1"><img src="../assets/lo.png"></div>
      <div class="box2">
        <p>打开自如APP</p>
        <p>住空气质检合格真房源</p>
      </div>
      <div class="box3"><button>打开APP</button><span>x</span></div>
    </header>
    <main>
      <div class="swiper-container a">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img :src="looplist.photos_big[0]"></div>
            <div class="swiper-slide"><img :src="looplist.photos_big[1]"></div>
        </div>
      </div>
    <!-- <swiper :key="looplist.length" ref="myswiper">
      <div class="swiper-slide" v-for="data in looplist" :key="data.bannerId">
        <img :src="data.photos_min[0]">
      </div>
    </swiper> -->
      <div class="mj-box">
        <p>{{looplist.moments_share.content}}</p>
        <ul>
          <li class="mj-i1">￥2930/月（季付价）</li>
          <li class="mj-i2"><span>服务费另计，详情见付款方式</span><i class="iconfont">付款方式  &#xe51c;</i></li>
        </ul>
      </div>
      <div class="mj-box2">
        <ul>
          <li><span>{{looplist.activity_list[0].name}}</span><i>{{looplist.activity_list[0].title}}</i></li>
          <li><span>{{looplist.activity_list[1].name}}</span><i>{{looplist.activity_list[1].title}}</i></li>
          <li><span>{{looplist.activity_list[2].name}}</span><i>{{looplist.activity_list[2].title}}</i></li>
        </ul>
        <a class="iconfont">&#xe51c;</a>
      </div>
      <div class="mj-box3">
        <span>{{looplist.tags[0].title}}</span>
        <span>{{looplist.tags[1].title}}</span>
        <span>{{looplist.tags[2].title}}</span>
        <span>{{looplist.tags[3].title}}</span>
        <span>{{looplist.tags[4].title}}</span>
      </div>
      <div class="mj-box4">
        <span>11.2m²</span>
        <span>3室1厅</span>
        <span>5/6层</span>
        <span>南</span>
      </div>
      <div class="mj-box5">
        <span class="iconfont">&#xe506;     {{looplist.resblock.subway[0]}}</span>
      </div>
      <div class="mj-box6">
        <h2>房源介绍</h2>
        <p>{{looplist.introduction}}</p>
      </div>
      <div class="mj-box7">
        <h2>房源信息</h2>
        <ul>
          <li><span>01卧</span><span>待入住&nbsp;&nbsp;&nbsp;&nbsp;￥</span><span>2590元/月</span><span class="mj-s1">&nbsp;&nbsp;&nbsp;查看房间</span></li>
          <li><span>02卧</span><span>待入住&nbsp;&nbsp;&nbsp;&nbsp;￥</span><span>2590元/月</span><span class="mj-s1">&nbsp;&nbsp;&nbsp;查看房间</span></li>
          <li class="mj-b3"><span>03卧</span><span>待入住&nbsp;&nbsp;&nbsp;&nbsp;￥</span><span>2530元/月</span><span>&nbsp;&nbsp;&nbsp;当前房源</span></li>
        </ul>
      </div>
      <div class="mj-box8">
        <div>
          <b>服务介绍</b><span>查看全部</span>
        </div>
          <ul>
            <li><img :src="looplist.services.detail[0].icon"><p><span>{{looplist.services.detail[0].title}}</span>•{{looplist.services.detail[0].sub_title}}</p></li>
            <li><img :src="looplist.services.detail[1].icon"><p><span>{{looplist.services.detail[1].title}}</span>•{{looplist.services.detail[1].sub_title}}</p></li>
            <li><img :src="looplist.services.detail[2].icon"><p><span>{{looplist.services.detail[2].title}}</span>•{{looplist.services.detail[2].sub_title}}</p></li>
            <li><img :src="looplist.services.detail[3].icon"><p><span>{{looplist.services.detail[3].title}}</span>•{{looplist.services.detail[3].sub_title}}</p></li>
          </ul>
      </div>
      <div class="mj-box9">
        <div class="mj-d1">
          <b>小区介绍</b><span class="iconfont">小区详情     &#xe51c;</span>
        </div>
          <div class="mj-d2">
            <b>{{looplist.resblock.name}}</b>
            <ul>
              <li>{{looplist.resblock.item[0].name}} : {{looplist.resblock.item[0].value}}</li>
              <li>{{looplist.resblock.item[1].name}} : {{looplist.resblock.item[1].value}}</li>
              <li>{{looplist.resblock.item[3].name}} : {{looplist.resblock.item[3].value}}</li>
            </ul>
          <img :src="looplist.resblock.photos[0]">
          </div>
      </div>
      <div class="mj-box10">
        <b>周边及交通</b><span class="iconfont">查看介绍     &#xe51c;</span>
      </div>
      <img src="../assets/v2.png" class="tu1">
      <ul class="mj-pl">
        <li>•{{looplist.resblock.subway[0]}}</li>
        <li>•{{looplist.resblock.subway[1]}}</li>
        <li>•{{looplist.resblock.subway[2]}}</li>
        <li>•{{looplist.resblock.subway[3]}}</li>
        <li>•{{looplist.resblock.subway[4]}}</li>
        <li>•{{looplist.resblock.subway[5]}}</li>
      </ul>
      <div class="mj-box11">
        <h3>您的管家</h3>
        <div><img :src="looplist2.headCorn"><span>{{looplist2.keeperName}}</span><a href="">联系管家</a></div>
        <p>{{looplist2.keeperPresent}}</p>
      </div>
      <div class="mj-box115">
        <h3>{{looplist.questions.title}}</h3>
        <ul>
          <li><span>{{looplist.questions.content[0].title}}</span><a>查看</a></li>
          <li><span>{{looplist.questions.content[1].title}}</span><a>查看</a></li>
          <li><span>{{looplist.questions.content[2].title}}</span><a>查看</a></li>
        </ul>
      </div>
      <div class="mj-box12">
        <h2>为您推荐</h2>
         <swiper :key="looplist3.length" ref="myswiper">
            <div class="swiper-slide" v-for="data in looplist3" :key="data.bannerId">
              <img :src="data.photo">
              <p><span>￥5190</span><span>{{looplist3[0].name}}</span></p>
              <i class="iconfont">&#xe506;</i><span class="mj-ho">{{looplist3[0].subway_station_info}}</span>
              <div class="mj-s">
                <span class="mj-hj">{{looplist3[0].tips[0].title}}</span>
                <span class="mj-hj">{{looplist3[0].tips[1].title}}</span>
                <span class="mj-hj">{{looplist3[0].tips[2].title}}</span>
              </div>
            </div>
          </swiper>
      </div>
      <div class="mj-box13">
        <ul>
          <li><span class="iconfont">&#xe614;</span><br><a>电脑版</a></li>
          <li><span class="iconfont">&#xe65a;</span><br><a>触屏版</a></li>
          <li><span class="iconfont">&#xe600;</span><br><a>客户端</a></li>
        </ul>
        <div class="mj-da"><span></span><img src="../assets/ll.png"><span></span></div>
        <div class="mj-ds"><a href="">首页</a><span></span><a href="">自如找房</a><span></span><a href="">下载自如APP</a></div>
        <p>Copyright@2018 ziroom.com</p>
      </div>
    </main>
    <footer>
      <a class="a1" href="">在APP中打开</a>
      <a class="a2" href="">联系管家</a>
    </footer>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>
<script>
// import vue from 'vue'
import swiper from './filmtail/filmswiper'
import axios from 'axios'
export default {
  data () {
    return {
      looplist: [],
      looplist2: [],
      looplist3: []
    }
  },
  components: {
    swiper
  },
  mounted () {
    axios({
      url: `http://m.ziroom.com/wap/detail/room.json?city_code=110000&id=${this.$route.params.id}`
    }).then(res => {
      console.log(res.data)
      this.looplist = res.data.data
    })
    axios.get(
      '/v7/room/detail-steward.json?id=41681&house_id=4389&resblock_id=1111027378724&house_type=1'
    ).then(res => {
      console.log(res.data)
      this.looplist2 = res.data.data
    })
    axios({
      url: '/v7/room/detail-promotion.json?city_code=110000&id=62467125&house_id=60390679'
    }).then(res => {
      console.log(res.data)
      this.looplist3 = res.data.data
    })
  }
}
</script>

<style>
  html,body{height: 100px; width: 100%;}
  h1,h2,h3,h4,h5,li,ul,ol,dl,dt,dd,img,input,figcaption,figure,p,body{margin: 0;padding: 0;}
  ul{list-style: nome;}
  a{text-decoration: none;}
  i{font-style: normal}
  body{box-sizing: border-box;}
  header,footer,nav,article,aside,main,section{ display:block;}
  html{color: #333;}
  b{list-style: none;}
</style>

<style lang="scss" scoped>
  header{height: calc(123.97px/2); display: flex; position: fixed; top: 0; left: 0; z-index: 10; background: #fff; width: 100%;}
  .box1{ display: flex;
    img{margin: auto; width: 40px;}
  }
  .box2{flex: 1; margin-top: 10px;
    p{height: calc(41px/2);
      font-size: calc(27.975px/2);
      color: #aaa;
     }
  }
  .box3{width: calc(219.97px/2); margin-top: 10px;
    button{width: calc(159.57px/2);
      height: calc(63.97px/2);
      background:#f60;
      color: #fff;
      border: 0;
      }
    span{width: calc(15.97px/2);
         height: calc(15.97px/2);
         color: #aaa;
         display:inline-block;
         position: relative; top: -10px; right: -10px;
      }
  }
  main{flex: 1; overflow: auto; margin-bottom: 50px; margin-top: 50px;
    .a{
      .swiper-wrapper{
        .swiper-slide{img{width: 100%; height: calc(562.5px/2);}}
      }
    }
    .mj-box{
      p{height: calc(132px/2); font-size: 22px; margin-top: 20px; margin-left: 20px; }
      }
      ul{
        .mj-i1{width: calc(678px/2);height: calc(60/2);font-size: 24px;margin-left: 20px; margin-bottom: 5px;}
        .mj-i2{font-size: 14px; color: #999; margin-left: 20px; position: relative; margin-bottom: 40px;
          i{font-size: 14px; position: absolute; right: 20px;}
        }
      }
    .mj-box2{margin-left: 20px; width: calc(678px/2);height:calc(127.94px/2); position: relative; margin-bottom: 15px;
      ul{
        >li{font-size: 13px; margin-bottom: 5px;
        span{color: #000; margin-right: 10px;}
        i{color: #999;}
        }
      }
      a{position: absolute; top: 50%; right: 0; transform: translateY(-50%);}
    }
    .mj-box3{ height: calc(173.91px/2); padding-top:15px; margin-left: 20px; border-top: 1px solid #eee; display: flex; flex-wrap: wrap;
      span{display: block; width: calc(128.86px/2);height: calc(50px/2); font-size: 13px; background: #eee; text-align: center; line-height: calc(50px/2);margin-right: 10px;border-radius: 2px;}
    }
    .mj-box4{display: flex;  height:calc(110.02px/2); margin-left: 20px;
      span{width: calc(169.75px/2);margin-right: 10px; text-align: center; margin-top: 5px;font-size: 14px;}
    }
    .mj-box5{margin-left: 20px; font-size: 12px; width: calc(678px/2); display: block;border-top: 1px solid #ccc;padding-top: 15px;padding-bottom: 15px;border-top: 1px solid #eee;border-bottom: 1px solid #eee;
    }
    .mj-box6{height: calc(341.97px/2); margin-left: 20px; margin-top: 20px;
      h2{font-size: 18px; font-weight: 100;margin-bottom: 20px;}
      p{width: calc(678px/2);height: calc(192px/2);color: #999;}
    }
    .mj-box7{height:calc(415.91px/2);border-top:1px solid #ccc;border-bottom:1px solid #ccc; padding:0 10px;
      h2{width: calc(678px/2);padding-top:20px; font-size: 18px; font-weight: 100;}
      ul{
        li{height: calc(109.97px/2); border-bottom:1px solid #ccc; line-height: calc(109.97px/2); font-size:13px;
          span{width: calc(169.5px/2);height: calc(109.97px/2);display:inline-block;}
        }
        .mj-b3{border: 0;}
        .mj-s1{color: #f60;}
      }
    }
    .mj-box8{height: (741.84px/2);
      div{width: calc(678px/2);height: calc(147.97px/2);margin-left: 20px;line-height: calc(147.97px/2);position: relative;
       span{position: absolute; top: 0; right: 10px;}
      }
      ul{margin-left: 20px;
        li{width: calc(678px/2);height: calc(87px/2);line-height: calc(87px/2);position: relative;margin-bottom:30px;
          img{width: calc(87.97px/2);margin-right: 20px;}
          p{display: inline-block;position: absolute;top: 50%;transform: translateY(-20px);}
        }
      }
    }
    .mj-box9{height: calc(389.94px/2);padding-left: 20px;border-top: 1px solid #eee;border-bottom: 1px solid #eee;
      .mj-d1{height: calc(147.97px/2);position: relative;
        b{line-height:calc(147.97px/2);font-size: 18px; font-weight: 100;}
        span{position: absolute;right:20px;top: 20px;font-size: 14px;color: #999;}
      }
      .mj-d2{position: relative;
        b{height: calc(38px/2); font-size: 16px; font-weight: 100;margin-bottom: 10px;display: block;}
        ul{
          li{height: calc(42px/2);font-size: 12px; color:#999;}
        }
      img{position: absolute; top: 0; right: 20px; width: calc(224.02px/2);height: calc(168px/2);}
      }
    }
    .mj-box10{height: calc(147.97px/2);line-height:calc(147.97px/2);position: relative;padding-left:20px;
      b{font-size: 18px;font-weight: 100;}
      span{position: absolute;top: 0px; right: 20px; font-size: 14px; color: #999;}
    }
    .tu1{width: calc(750px/2); height: calc(337.5px/2);}
    .mj-pl{height: calc(474px/2);margin-top:20px;padding-left:20px;border-bottom:1px solid #eee;
      li{height: calc(75px/2);line-height: calc(75px/2);font-size: 13px;}
    }
    .mj-box11{height: calc(469.98px/2);margin-top:20px;padding:0 20px;border-bottom:1px solid #eee;margin-bottom:20px;
      h3{line-height: calc(36px/2); height: calc(36px/2);font-size: 18px;font-weight: 100;margin-bottom: 20px;}
      div{height: calc(110.02px/2);margin-bottom:50px;position: relative;
        img{width: calc(110.2px/2);height: calc(146.69px/2);}
        span{position: absolute;top: 50%;transform: translateY(-20%);margin-left: 10px;font-size: 18px;}
        a{position: absolute;top: 50%;right:20px;transform: translateY(-20%);width: calc(159.97px/2);height: calc(56.02px/2);display: inline-block;border: 1px solid #f1b9d0;color: #f60;text-align: center;line-height: 30px;}
      }
    }
    .mj-box115{height: calc(415.91px/2);padding-left:20px;
      h3{height: calc(36px/2);margin-bottom: 20px;font-size: 18px;font-weight: 100;}
      ul{
        li{height: calc(111.97px/2);border-bottom:1px solid #eee;position: relative;
          span{line-height: calc(111.97px/2);font-size: 13px;color: #666;}
          a{position: absolute;right: 20px;top:50%;transform: translateY(-50%);color: #f60;}
        }
      }
    }
    .mj-box12{height: calc(833.52px/2);margin-top:20px;
      h2{margin-bottom: 20px; font-size: 18px; font-weight: 100;padding-left: 20px;}
      div{
        img{width:100%;}
        p{height: calc(51.57px/2);margin-left:20px;
          span{margin-right: 10px;font-size: 14px; font-weight: bold;}
        }
        i{margin-left: 20px;}
        .mj-ho{font-size: 12px; color: #999;}
        .mj-s{overflow: hidden;
        .mj-hj{font-size: 9px;margin-left: 20px;color: #0ff;display: block;width: calc(86.06px/2);height: calc(34px/2);border: 1px solid #0ff; text-align: center;margin-top: 10px;float: left;}
        }
      }
    }
    .mj-box13{height: calc(421.97px/2);margin-top:20px;border-top:1px solid #eee;
      ul{display: flex;justify-content:center;margin-top:30px;
        li{
          span{margin: 0 20px;width: calc(75.97px/2);height: calc(75.97px/2); border: 1px solid #999; border-radius: 50%; display: inline-block;text-align: center;line-height: calc(75.97px/2)}
          a{font-size: 12px;margin-left: 21px;}
        }
      }
      .mj-da{padding: 0 20px;margin-top:20px;
        span{display: inline-block;height: 1px;width: 135px; background: #eee;margin-bottom: 5px;}
      }
      .mj-ds{display: flex;justify-content:center;margin-top:30px;
        a{color: #999;margin: 0 20px;font-size: 13px;}
        span{height: 12px;width: 1px;background: #999;margin-top: 4px;}
      }
      p{text-align: center;font-size: 14px;color: #999;margin-top: 10px;}
    }

    .b{
      .swiper-wrapper{
        .swiper-slide{img{width: calc(675px/2); height: calc(506.25px/2);}}
        }
      }
    }
  footer{height: calc(96px/2); display: flex; text-align: center; line-height: calc(96px/2); position: fixed;bottom:0;left:0;width:100%;z-index: 10;
  a{flex:1}
  .a1{ background: #f90; color: #fff;}
  .a2{ background: #f60; color: #fff;}
  }
</style>
