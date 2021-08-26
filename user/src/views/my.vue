<template>
    <div class="box">
        <div class="bar">
            <div class="tu">
                <van-uploader :after-read="afterRead"/>
                <b @click="login()">登录</b>/
                <b>注册</b>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    login() {
        this.$router.push('/login')
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 750px;
  height: 400px;
  background: red;
  .van-uploader {
  }
}
</style>