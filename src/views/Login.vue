<template>
  <div class="login">
    <!-- 头像区域 -->
    <div class="login-box">
      <div class="avatar-img">
        <img src="../assets/logo.png" alt />
      </div>
      <div @click="submitForm('login_form')">登录</div>
      <div>重置</div>
      <!-- 登录表单 -->
      <!-- <el-form
        class="login-form"
        :rules="rules"
        ref="login_form"
        :model="login_form"
      >
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="login_form.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-discount"
            v-model="login_form.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm('login_form')"
            >登录</el-button
          >
          <el-button type="info" @click="resetForm('login_form')"
            >重置</el-button
          >
        </el-form-item>
      </el-form> -->
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
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar-img {
    border: 1px solid #eee;
    border-radius: 50%;
    height: 130px;
    width: 130px;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.login-form {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
