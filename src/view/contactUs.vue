<template>
  <div class="contact-us">
    <div class="font36">欢迎联系我们</div>
    <div v-for="item in contact" class="phone">
      <span>{{ item.name }}</span>
      <span>{{ item.value }}</span>
    </div>
    <div class="code">
      <img :src="code" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: require("../assets/code.png"),
      contact: [
        {
          name: "电话：",
          value: " +86 18210022195",
        },
        {
          name: "微信：",
          value: "seeed_studio",
        },
        {
          name: "小红书：",
          value: "1154122538",
        },
        {
          name: "公众号：",
          value: "兮得生活研究所",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.contact-us {
  width: 100%;
  padding: 55px 0 270px 0;
  text-align: center;
  background: linear-gradient(
    180deg,
    #3598d0 47.92%,
    rgba(193, 228, 249, 0) 100%
  );
  .font36 {
    display: none;
    margin: 0 auto;
    width: 340px;
    text-align: left;
    font-family: "Source Han Sans CN";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 54px;
    color: #ffffff;
    margin-bottom: 40px;
  }
  .phone {
    margin: 0 auto;
    width: 340px;
    text-align: left;
    font-family: "Source Han Sans CN";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    color: #ffffff;
  }
  .code {
    margin-top: 34px;
  }
}
@media screen and (max-width: 500px) {
  .contact-us {
    padding-top: 100px;
    .phone {
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
    }
    .code{
      margin-top: 51px;
    }
    .font36{
      display: block;
    }
  }
}
</style>
