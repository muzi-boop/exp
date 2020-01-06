<template>
  <div class="content">
    <p class="P-Title">通过手机号码注册</p>
    <div class="iponeBox">
      <input class="IponInput_1" type="text" placeholder="手机号" />
      <p class="yzm">获取验证码</p>
    </div>
    <input class="input_2" type="text" placeholder="验证码" />
    <input class="input_3" type="text" placeholder="密  码" />
    <input class="input_4" type="submit" value="提价注册" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .P-Title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin-top: 50px;
    border-bottom: 4px solid #ccc;
  }
  .iponeBox {
      margin-top: 30px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    .IponInput_1 {
      outline: none;
      border: none;
      border-bottom: 1px solid #ccc;
      flex: 1;
    }
    .yzm {
        color: #adc700;
      border-bottom: 1px solid #ccc;
    }
  }
  .input_2 {
       margin-top: 30px;
      height: 40px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
    width: 100%;
  }
  .input_3 {
       margin-top: 30px;
      height: 40px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
     width: 100%;
  }
  .input_4 {
       margin-top: 50px;
      height: 40px;
    outline: none;
    border: none;
     width: 100%;
    background: #adc700;
    border-radius: 20px;
    color: #fff;
  }
}
</style>