<template>
  <div class="login">
    <!-- 头像区域 -->
    <div class="login-box">
      <div class="avatar-img">
        <img src="../assets/logo.png" alt />
      </div>
      <section class="login-form">
        <div class="input-box">
          <div class="flex mt-30">
            <span>账号:</span>
            <input type="text" placeholder="请输入账号" />
          </div>
          <div class="flex mt-30">
            <span>密码:</span>
            <input type="password" placeholder="请输入密码" />
          </div>
        </div>
        <div @click="submitForm('login_form')" class="text-right">登录</div>
        <div class="text-right">重置</div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      login_form: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入活动名称',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      window.sessionStorage.setItem('token', 'token')
      this.$router.push('Home')
      // 接收一个回调函数
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     /**
      //      * 1.token 保存到客户端的sessionStorage中
      //      * 除登录接口外都要带token访问
      //      * token只应当前网页期间打开生效，所以将token保存在sessionStorage
      //      * 2.函数式导航跳转到后台主页，路由/home
      //      * */

      //     if (
      //       this.login_form.username === 'admin' &&
      //       this.login_form.password === '123456'
      //     ) {
      //       this.$message({
      //         message: '登录成功',
      //         type: 'success'
      //       })
      //       window.sessionStorage.setItem('token', 'token')
      //       this.$router.push('Home')
      //     } else {
      //       this.$message.error('登录失败！')
      //     }
      //     // true
      //     console.log(valid)
      //     // 有六个属性都是axios封装好的，接下里结构赋值，重名命名为res, 现在就只有data这个属性了.
      //     // 其他的五个属性不要了
      //     // const { data: res } = await this.$axios(
      //     //     '/api/cart/create',
      //     //     this.login_form
      //     // );
      //     // console.log(res);
      //     // this.axios('/api/type/list').then(res => {
      //     //     console.log(res);
      //     // });
      //   } else {
      //     return false
      //   }
      // })
    },
    resetForm(formName) {
      // ref获取表单的实例对象  通过this.$refs.[formName] 获取
      // 表单的引用对象 ref
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  background-color: #2b4b6b;
  height: 100vh;
}
.login-box {
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .avatar-img {
    border: 1px solid #eee;
    border-radius: 50%;
    height: 10rem;
    width: 10rem;
    padding: 0.6rem;
    box-shadow: 0 0 5px #ddd;
    background-color: #fff;
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
}
.mt-30 {
  margin-top: 3rem;
}
.text-right {
  width: 6rem;
  text-align: right;
  font-size: 20px;
  background: rosybrown;
}
.input-box {
  width: 15rem;
  & input {
    width: 100%;
    font-size: 14px;
    border: none;
    outline: none;
    padding: 0.5rem;
  }
  & span {
    width: 3rem;
    text-align: center;
    line-height: 3rem;
    background: #fff;
  }
}
</style>
