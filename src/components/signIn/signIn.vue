<template>
  <div class="signIn-wrapper">
    <b-container class="sign-box">
      <b-row>
        <b-col md="5" class="left-desc">
          <h4>
            <img src=""> 自由交易虚拟货币
          </h4>
          <p>强大的广告系统，让交易数字币安全又快速</p>
          <h4>
            <img src=""> 场外交易可以很简单
          </h4>
          <p>不论是购买、出售数字币，都可立即上手</p>
          <h4>
            <img src=""> 最全面的交易种类
          </h4>
          <p>支持 BTC / ETH 等主流货币，及多种交易方式</p>
        </b-col>
        <b-col md="7" class="sign-input">
          <h3>登录</h3>
          <div class="input-area">
            <b-form @submit="onSignIn">
              <div class="form-group">
                <b-form-input class="input-item" required placeholder="电子邮箱" v-model="user.email">
                </b-form-input>
              </div>
              <div class="form-group">
                <b-form-input class="input-item" required placeholder="密码" v-model="user.password">
                </b-form-input>
              </div>
              <input type="submit" name="commit" value="登 录" class="signBtn" data-disable-with="登 录">
            </b-form>
          </div>
          <div class="links-area">
            <span class="new-password-link"><a href="#">忘记密码</a></span>
            <hr>
            <span class="new-registration-link"> 还没有帐号？</span><a href="/sign_up">注册</a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import api from '../../api/index'

export default {
  data () {
    return {
      user: {
        email: '',
        password: '',
        passwordConfirm: ''
      }
    }
  },
  methods: {
    onSignIn (evt) {
      evt.preventDefault()
      api.signUp(this.user).then((res) => {
        if (res.data.code === 200) {
          window.location = '/'
        } else {
          alert('请输入正确的邮箱和密码')
        }
      })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .signIn-wrapper
    width 100%
    max-width 1050px
    margin 0 auto
    overflow hidden
    .sign-box
      width 94opx
      margin 40px auto 60px
      background-color #fff
      box-shadow 0 2px 4px 0 rgba(155,155,155,0.44)
      border-radius 4px
      .row
        .left-desc
          padding 110px 60px 30px 90px
          background-position center
          background-size cover
          background-image url("../../common/images/devise-bg.png")
          h4
            margin 0 0 5px 0
            font-size 18px
            font-weight normal
          p
            margin 0 0 50px 50px
            color #9b9b9b
            text-align left
        .sign-input
          padding 40px 60px
          h3
            margin-bottom 30px
            font-weight normal
            text-align left
            margin-bottom 30px
          .input-area
            form
              .form-group
                margin-bottom 15px
                .input-item
                  height 50px
                  margin-bottom 30px
              .signBtn
                height 50px
                box-shadow 0 2px 4px 0 rgba(69,146,69,0.5)
                border-radius 4px
                background-color #43cb83
                width 100%
                font-size 16px
                color #fff
                outline none
          .links-area
            text-align center
            .new-password-link
              display block
              margin 100px auto 10px auto
              a
                color #9B9B9B
              a:hover
                  color #43CB83
                  box-shadow none
            .new-registration-link
              color #9B9B9B
            a
              color #43CB83
</style>
