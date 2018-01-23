<template>
  <div class="signUp-wrapper">
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
          <h3>注册</h3>
          <div class="input-area">
            <b-form @submit="onSignUp">
              <div class="form-group">
                <b-form-input class="input-item" required placeholder="电子邮箱" v-model="user.email">
                </b-form-input>
              </div>
              <div class="form-group">
                <b-form-input class="input-item" required placeholder="密码，至少8位英文数字组合" v-model="user.password">
                </b-form-input>
              </div>
              <div class="form-group">
                <b-form-input class="input-item" required placeholder="确认密码" v-model="user.passwordConfirm">
                </b-form-input>
              </div>
              <input type="submit" name="commit" value="注 册" class="signBtn" data-disable-with="注 册">
            </b-form>
          </div>
          <div class="links-area">
            <span class="help-term-content"> 注册即表示同意 OTCBTC <a target="_blank" href="/terms_of_service">使用条款</a> </span>
            <hr>
            <span class="new-registration-link">已经有帐号？</span><a href="/sign_in">登录</a>
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
    onSignUp (evt) {
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
  .signUp-wrapper
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
            font-size 24px
            font-weight normal
            text-align left
            margin-bottom 30px
          .input-area
            form
              .form-group
                margin-bottom 15px
                .input-item
                  height 50px
                  padding 6px 12px
                  font-size 14px
                  line-height 1.42857143
                  margin-bottom 30px
                  background-color: #F3F3F3;
                  box-shadow inset 0 1px 3px 0 rgba(178,178,178,0.5)
                  border-radius 4px
                  border none
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
            .help-term-content
              display block
              margin 20px 0 10px 0
            .new-registration-link
              color #9B9B9B
            a
              color #43CB83
</style>
