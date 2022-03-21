<template>
  <div class="menu">
    <div class="item-menu" v-for="item in tabArr">
      <div
        class="in-block menu-img"
        :style="{ backgroundImage: 'url(' + item.img + ')' }"
      ></div>
      <div class="in-block font16">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabArr: [
        {
          id: "1",
          title: "设计案例",
          mark: "case",
          img: require("../assets/ice.png"),
        },
        {
          id: "2",
          title: "工作室简介",
          mark: "desc",
          img: require("../assets/ren.png"),
        },
        {
          id: "3",
          title: "服务范围",
          mark: "range",
          img: require("../assets/hand.png"),
        },
        {
          id: "4",
          title: "联系我们",
          mark: "we",
          img: require("../assets/poster.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .menu {
    display:none;
  }
}
@media screen and (min-width: 500px) {
  .menu {
    display: flex;
    justify-content: flex-start;
    height: 130px;
    align-items: center;
    padding: 0 80px;
    .item-menu {
      height: 130px;
      line-height: 130px;
      margin-right: 80px;
    }
    .menu-img {
      background-repeat: no-repeat;
      background-position: center;
      background-blend-mode: darken;
      width: 56px;
      height: 50px;
      vertical-align: middle;
    }
    .font16 {
      font-family: "Source Han Sans CN";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #000000;
      cursor: pointer;
    }
  }
}
</style>
