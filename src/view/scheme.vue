<template>
  <div class="scheme">
    <div class="scheme-content">
      <div class="scheme-item" v-for="item in schemeDara">
        <img :src="item.src" alt="" />
      </div>
    </div>
    <div class="scheme-content-app">
      <div class="scheme-item" v-for="item in schemeDaraApp">
        <img :src="item.src" alt="" />
      </div>
    </div>
    <div class="title">过往合作企业</div> -->
    <div class="consociation">
      <!-- <img class="consociation-app" :src="consociationApp" alt="" /> -->
      <img class="consociation-web" :src="consociation" alt="">
    </div>

    <div class="scheme-bottom">
      Do What Makes Your Soul Happy @ Seeed studio
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schemeDara: [
        {
          src: require("../assets/case/mengniu.png"),
        },
        {
          src: require("../assets/case/fafacat.png"),
        },
        {
          src: require("../assets/case/zhonghai.png"),
        },
        {
          src: require("../assets/case/baiwei.png"),
        },
        {
          src: require("../assets/case/aidi.png"),
        },
        {
          src: require("../assets/case/xiehe.png"),
        },
      ],
      schemeDaraApp: [
        {
          src: require("../assets/case/mengniu-h5.png"),
        },
        {
          src: require("../assets/case/fafacat-h5.png"),
        },
        {
          src: require("../assets/case/zhonghai-h5.png"),
        },
        {
          src: require("../assets/case/baiwei-h5.png"),
        },
        {
          src: require("../assets/case/aidi-h5.png"),
        },
        {
          src: require("../assets/case/xiehe-h5.png"),
        },
      ],
      consociationApp: require("../assets/case/hezuo-h5.png"),
      consociation: require("../assets/case/hezuo.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
.scheme {
  padding: 62px 118px 130px 118px;
}

.title {
  text-align: left;
  font-family: "Source Han Sans CN";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 75px;
  color: #000000;
  margin-bottom: 30px;
  margin-top: 60px;
}
.consociation {
  width: 100%;
  img{
    width: 100%;
  }
}
.scheme-content-app {
  width: 100%;
}
@media screen and (max-width: 500px) {
  .scheme-content {
    display: none;
  }
  .scheme {
    padding: 20px;
    background: rgb(250, 250, 250);
    margin-top: 60px;
  }
  .scheme-item {
    width: 100%;
    margin-bottom: 20px;
    img {
      width: 100%;
    }
  }
  .title {
    margin-top: 20px;
    font-size: 24px;
    line-height: 36px;
  }
  // .consociation-web{
  //   display: none;
  // }
  // .consociation-app{
  //   display: block;
  // }
}
.scheme-bottom {
  margin: 40px auto 10px auto;
  font-family: "Source Han Sans CN";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 15px;
  /* identical to box height */
  color: #000000;
}
@media screen and (min-width: 500px) {
  .scheme-content-app {
    display: none;
  }
  // .consociation-web{
  //   display: block;
  // }
  // .consociation-app{
  //   display: none;
  // }
  .scheme-bottom {
    display: none;
  }
  .scheme-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .scheme-item {
    width: 586px;
    height: 620px;
    margin-bottom: 30px;
  }
}
</style>
