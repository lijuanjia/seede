<template>
  <div class="seede-header">
    <div class="web-header">
      <div class="left">
        <div class="in-block main-title mr28">
          <img class="logo-flower" src="@/assets/flower.png" alt="" />
          <img class="logo-img" src="@/assets/xide.png" alt="" />
          <img class="menu-but" src="@/assets/menuBut.png" alt="" />
        </div>

        <div class="in-block main-tips">
          <div class="font20">设计咨询工作室</div>
          <div class="font20">Seeed Design&Art studio, Beijing</div>
        </div>
      </div>
      <div class="right">
        <div class="in-block mr20">
          <div class="font18">好的设计，就是好的商业</div>
          <div class="font22">Good design is good business</div>
        </div>
        <div class="in-block">
          <img class="flower" src="@/assets/flower.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.web-header {
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  .main-title {
    width: 144px;
  }
  .font20 {
    font-family: "Source Han Sans CN";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    text-align: left;
    height: 30px;
    line-height: 30px;
    color: #232323;
  }
  .font18 {
    font-family: "PingFang SC";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    height: 25px;
    color: #232323;
  }
  .font22 {
    font-family: "Slackside One";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    height: 32px;
    line-height: 32px;
    color: #232323;
  }
  .right {
    text-align: right;
    height: 63px;
    line-height: 63px;
  }
  .flower {
    width: 48px;
    height: 63px;
  }
}
@media screen and (min-width: 500px) {
  .logo-flower {
    display: none;
  }
  .menu-but {
    display: none;
  }
  .logo-img {
    width: 144px;
    height: 59px;
  }
  .web-header {
    padding: 0 80px;
  }
}
@media screen and (max-width: 500px) {
  .main-tips {
    display: none;
  }
  .right {
    display: none;
  }
  .logo-flower {
    width: 23px;
    height: 30px;
    margin-right: 5px;
    display: inline-block;
  }
  .logo-img {
    width: 68px;
    height: 28px;
    display: inline-block;
  }
  .web-header {
    padding: 0;
  }
  .main-title {
    width: auto !important;
    margin-left: 10px;
  }
  .menu-but {
    display: inline-block;
    width: 25px;
    height: 21px;
    position: absolute;
    left: 87%;
    top: 33%;
  }
}
.mr28 {
  margin-right: 28px;
}
.mr20 {
  margin-right: 20px;
}
</style>
