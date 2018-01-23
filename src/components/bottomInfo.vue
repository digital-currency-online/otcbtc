<template>
  <footer>
    <div class="footer-container exchange-container">
      <div class="main-info">
        <div class="base-intro">
          <h5>OTCBTC</h5>
          <p>OTCBTC 是一个提供区块链场外交易和币币交易的平台，我们致力于让区块链资产更有效的流动，让更多人可以参与到区块链行业中来。</p>
        </div>
        <div class="quick-link">
          <div class="link-section">
            <h5 class="section-header">客户服务</h5>
            <span class="collapse-indicator">+</span>
            <ul class="section-content">
              <li><a href="https://otcbtc.com/how_it_works#faqs">常见问题</a></li>
              <li><a href="https://otcbtc.zendesk.com/hc/zh-cn/categories/115000223312" target="_blank">帮助中心</a></li>
              <li> <a href="https://otcbtc.com/fee">费率说明</a></li>
            </ul>
          </div>

          <div class="link-section">
            <h5 class="section-header">关于我们</h5>
            <span class="collapse-indicator">+</span>
            <ul class="section-content">
              <li> <a href="https://otcbtc.com/company">公司介绍</a></li>
              <li> <a href="https://otcbtc.com/team">团队专访</a></li>
              <li> <a href="https://otcbtc.com/contact_us">联系方式</a></li>
              <li> <a href="https://otcbtc.com/careers"><span class="translation_missing" title="translation missing: zh-CN.common.footer.careers">Careers</span></a></li>
            </ul>
          </div>

          <div class="link-section">
            <h5 class="section-header">官方社群</h5>
            <span class="collapse-indicator">+</span>
            <ul class="section-content">
              <li><a href="https://t.me/otcbtc_cn" target="_blank"><i class="fa fa-paper-plane" aria-hidden="true"></i> Telegram </a></li>
              <li><a href="https://twitter.com/otcbtc" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a>  </li>
              <li><a href="https://www.jianshu.com/u/e30b80ec5661" target="_blank"><i class="fa fa-rss" aria-hidden="true"></i> Blog</a></li>
            </ul>
          </div>

          <div class="link-section">
            <h5 class="section-header">相关下载</h5>
            <span class="collapse-indicator">+</span>
            <ul class="section-content">
              <li><a download="OTCBTC_media_kit" href="/OTCBTC_media_kit.zip">Media Kit</a></li>
              <li><a href="https://otcbtc.com/ios_beta_client">iOS App</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="copyright-info">
        <a class="link-left" href="https://otcbtc.com/terms_of_service">使用条款</a>
        <a class="link-ritght" href="https://otcbtc.com/privacy">隐私政策</a>
        <p class="company"><span class="short-split-line">|</span>OTCBTC<span class="symbol">©</span>2017</p>

        <div class="legal-info">
          <span class="translation_missing" title="translation missing: zh-CN.service_time">Service Time</span>：09:00 ~ 21:00 (UTC+08:00)
        </div>

        <div class="dropup legal-info dropup__language">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            简体中文<b class="caret"></b>
          </a>

          <ul class="dropdown-menu">
            <li><a rel="nofollow" data-method="patch" href="/locales?locale=zh-CN">简体中文</a></li>
            <li><a rel="nofollow" data-method="patch" href="/locales?locale=zh-TW">繁體中文</a></li>
            <li><a rel="nofollow" data-method="patch" href="/locales?locale=en">English</a></li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  footer
    margin-top: 0;
    background-color: #F5F5F5;
    padding: 30px 15px;
    color: rgba(74,74,74,0.89);
    border-top: 1px solid rgba(151,151,151,0.25);
    .footer-container
      width: 100%;
      max-width: 1170px;
      margin: 0 auto;
      .main-info
        width: 100%;
        max-width: 100%;
        .base-intro
          h5
            font-size: 16px;
            margin-bottom: 15px;
          p
            letter-spacing 1px
        .quick-link
          .link-section
            float: left;
            width: 130px;
            h5.section-header
              margin-bottom: 15px;
            ul
              list-style: none;
              padding-left: 30px;
              a
                color: rgba(74,74,74,0.69);
                display: block;
                padding: 6px 0;
      .copyright-info
        clear: both;
        color: #A0A0A0;
        a
          color: #A0A0A0;
        a.link-left
          padding-right: 30px;
        p.company
          margin-top: 10px;
          span.short-split-line
            display: none;
          span.symbol
            padding: 0 3px;
        .legal-info
          float: right;
        .dropup__language
          margin-right: 20px;
          a
            color: #A0A0A0;
  @media (min-width: 768px)
    footer
      .main-info
        .base-intro
          float: left;
          width: 50%;
          border-bottom: none;
          margin-bottom: 15px;
          p
            max-width: 85%;
        .quick-link
          float: right;
          text-align: left;
          .link-section
            float: left;
            width: 130px;
            border-bottom: none;
            .collapse-indicator
              display: none;
            .section-content
              display: block;
              margin-left: -28.5px;
              a
                padding: 2px 0;
      .copyright-info
        padding-top: 15px;
        border-top: 1px solid rgba(74,74,74,0.1);
        a
          display: inline-block;
        a.link-left
          padding-right: 10px;
        p.company
          margin-top: 0;
          display: inline-block;
          span.short-split-line
            display: inline-block;
            padding: 0 8px 0 0;
        .dropup__language
          margin-right: 20px;
          a
            display: inline-block;
</style>
