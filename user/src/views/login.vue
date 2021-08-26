<template>
    <div class="box">
        <!-- 图片 -->
        <div class="box1">
            <div class="tu">
                <img src="../assets/切图/img/login.png" alt="">
            </div>
        </div>
        <!-- 验证 -->
        <div class="box2">
            <div class="from">
               <div class="p">
                    <img src="../assets/切图/img/手机.png" alt="">
                    <input type="text" placeholder="请输入手机号" v-model="from.mobile"/> 
                   <button  @click="yz">{{txt}}</button></div>
               <div class="p2"> 
                   <img src="../assets/切图/img/手机2.png" alt="">
                   <input type="text" placeholder="请输入验证码" v-model="from.sms_code" />
                </div>
            </div>
             <div class="btn">
                 <button class="btn2" @click="login">登录</button>
             </div>
        </div>
    </div>
</template>

<script>
export default {
   data(){
       return{
           txt:"获取验证码",
           from:{
               mobile:'',
               sms_code:'',
           }
       }
   },
   mounted(){
     
   },
   methods:{
       yz(){
          var time=60
          var timer =setInterval(() => {
               this.txt=`还有${time}秒`
              if (time<=0) {
                   clearInterval(timer)
                 this.txt='获取验证码'
              }
              time--
              
          }, 1000);
           this.axios.post('/smsCode',{
               mobile:this.from.mobile,
               sms_type:"login"
           }).then(res=>{
               console.log(res)
           })
       },
      login(){
           this.axios.post('/login',{
               mobile:this.from.mobile,
               sms_code:this.from.sms_code,
               type:2,
               client:"1"
           }).then(res=>{
               console.log(res)
               localStorage.setItem("token",JSON.stringify(res.data))
           })
       }
   }
};
</script>

<style lang="scss" scoped>
.box{
  width: 100%;
   
  
    .box1{
      width: 100%;
      height: 300px;
      background: white;
       display: flex;
          justify-content: center;
          align-items: center;
      .tu{
          width: 80%;
          height: 180px;
        img{
            width: 100%;
            height: 100%;
        }
      }
    }
    .box2{
        width: 100%;
        height: 400px;
        background: white;
        .from{
          width: 100%;
          .p{
              width: 90%;
               height: 50px;
               line-height: 50px;
              text-align: center;
              input{
                  margin-top: -20px;
                  width: 300px;
                  margin: 2%;
                  border: 0;

              }
              img{
                  margin-top: 10px;
              }
              button{
                   background: orangered;
               border: 0;
               box-sizing: border-box;
               color: white;
               font-size: 30px;
               padding: 10px;
              }
          }
          .p2{
              width: 100%;
               height: 50px;
               line-height: 50px;
              margin-left: 40px;
              margin-top: 30px;
              input{
                  width: 300px;
                  margin: 2%;
                  border: 0;
              }
              img{
                  margin-top: 10px;
                  margin-left: 30px;
              }
          }
         
        }
        .btn{
            width: 85%;
           
            margin: auto;
           .btn2{
                margin-top: 100px;
               width: 100%;
               background: orangered;
               border: 0;
               box-sizing: border-box;
               padding: 10px;
               color: white;
           }
        }
    }
}
</style>