<template>
  <div>
    <div class="lp-section-1">
      <div class="lp-first-image">
        <b-container class="container">
          <b-row class="row">
            <b-col md="12">
              <h1>OTCBTC</h1>
              <h2>最流畅、最靠谱、最好用的换币平台</h2>
              <p>支持 BTC / ETH / EOS / DEW / QTUM / ZEC / GXS / BCH<br><br>下单 =&gt; 微信/支付宝转账 =&gt; 成交<br>提币顺畅，不卡子弹</p>
            </b-col>
          </b-row>
          <div class="exchange-input">
            <form action="/" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓">
              <div class="currency-select">
                <div class="select-btc">
                  <span class="select-text">购买</span>
                  <el-select v-model="currencyValue" filterable placeholder="代币类型">
                    <el-option
                      v-for="item in currencyOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="select-cny">
                  <span class="select-text">使用</span>
                  <el-select v-model="fiatCurrencyValue" filterable placeholder="纸币类型">
                    <el-option
                      v-for="item in fiatCurrencyOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="currency-input">
                <el-input-number v-model="amount" controls-position="right" placeholder="输入欲购买的法币金额" :min="1" :max="10"></el-input-number>
              </div>
              <div class="search-button">
                <input name="payment_type" value="all" hidden="hidden">
                <el-button type="success" icon="el-icon-search">搜索兑换</el-button>
              </div>
            </form>
          </div>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      amount: '',
      currencyValue: '',
      fiatCurrencyValue: '',
      currencyOptions: [{
      }],
      fiatCurrencyOptions: [
        {
          label: '人民币',
          value: 'twd'
        },
        {
          label: '新台币',
          value: 'cny'
        },
        {
          label: '港币',
          value: 'hkd'
        },
        {
          label: '美元',
          value: 'usd'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .lp-section-1
    background-color #0B0D11;
    .lp-first-image
      padding: 50px 0 30px;
      color: #fff;
      background: url('../common/images/landing.png');
      background-position: center;
      background-size: cover;
      .row
        .col-md-12
          p
            font-size: 16px;
            margin: 30px auto 30px;
            letter-spacing: 3px;
            line-height: 30px;
      .container
        .exchange-input
          margin: 0 15% 30px 15%;
          background-color: #ffffff;
          color: #333333;
          padding: 15px 10px;
          border-radius: 3px;
          form
            .currency-select
              .select-btc, .select-cny
                float left
                width 20%
                span.select-text
                  float: left;
                  width: 50px;
                  text-align: center;
                  padding-top: 8px;
                .el-select
                  width: calc(100% - 50px);
                  height: 40px;
                  border: 1px solid #cccccc;
            .currency-input
              float: left;
              width: 40%;
              padding: 0 10px;
              input
                height: 40px;
                border: 1px solid #cccccc;
                letter-spacing: 0.5px;
            .search-button
              .el-button
                width: 20%;
                border-radius: 4px;
</style>
