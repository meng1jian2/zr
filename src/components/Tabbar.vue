<template>
  <div class="topbar">
    <div class="search">
      <span>自如租房</span>
      <input type="text" placeholder="输入您想住的区域或小区" >
      <i class="iconfont icon-skip"></i>
    </div>
    <ul>
      <!-- 声明式导航 -->
      <router-link to="/hezu" tag="li" activeClass="myactive">
      租法<i class="iconfont icon-moreunfold"></i>
      </router-link>
      <router-link to="/weizhi" tag="li" activeClass="myactive">
      位置<i class="iconfont icon-moreunfold"></i></router-link>
      <router-link to="/zujin" tag="li" activeClass="myactive">
      租金<i class="iconfont icon-moreunfold"></i></router-link>
      <router-link to="/shaixuan" tag="li" activeClass="myactive">
      筛选<i class="iconfont icon-moreunfold"></i></router-link>
      <router-link to="/shangxia" tag="li" activeClass="myactive">
      <i class="iconfont icon-category"></i></router-link>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.myactive{
  color:red;
}

.topbar{
  position: fixed;
  top: 0px;
  left:0px;
  width:100%;
  height: 70px;
  background:white;
  border-bottom:1px solid #ccc;
.search {
  margin-left:10px;
  span{
    color: #ffa000;
  }
input{
  margin-top:5px;
  width:70%;
  height: 25px;
  margin-right:5px;
  margin-left:5px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid #ccc;
  background:#f5f5f5;
}
}
  ul{
    display: flex;
    li{
      flex:1;
      font-size: 15px;
      line-height: 50px;
      text-align: center;
    }
  }
}
</style>
