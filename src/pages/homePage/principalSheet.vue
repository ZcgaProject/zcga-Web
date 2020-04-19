<template>
    <div class="bigBoxSheet">
        <div class="headBoxSheet">
            <van-search
                    v-model="value"
                    shape="round"
                    show-action
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
                    style="width: 100%;height: 100%;"
            >
                <div slot="action" @click="onSearch">
                    <img style="width: 70%;height: 70%;" src="../../assets/homePage/shuaxin.png" alt="">
                </div>
            </van-search>
        </div>
        <div class="logoSheet">
            <div class="logoSheet_left">
                <div class="logoSheet_leftlogo">
                    <img style="width: 55%;height: 70%" src="../../assets/logozc.png" alt="">
                </div>
                <div class="logoSheet_leftfont">
                    <span style="margin-top: 0.3rem;">中创国安</span>
                </div>
            </div>
            <div class="logoSheet_right">
                <div class="logoSheet_rightBox">
                    <div class="logoSheet_rightFont">设为首页</div>
                    <div class="logoSheet_rightFont">客户留言</div>
                </div>
                <div class="logoSheet_rightLine"></div>
                <div class="logoSheet_rightBox">
                    <div class="logoSheet_rightFont">加入收藏</div>
                    <div class="logoSheet_rightFont">联系我们</div>
                </div>
            </div>
        </div>
        <div class="choiceSheet">
            <div class="choiceSheetBox">
                <div class="choiceSheetBox_one" @click="tabDianji('jg')">组织架构</div>
                <div class="choiceSheetBox_one" @click="tabDianji('cx')">诚信中国</div>
                <div class="choiceSheetBox_one" @click="tabDianji('xt')">信用托管</div>
                <div class="choiceSheetBox_one" @click="tabDianji('gp')">国普集团</div>
                <div class="choiceSheetBox_one" @click="tabDianji('sq')">授权资质</div>
            </div>
            <div class="choiceSheetBox">
                <div class="choiceSheetBox_one" @click="tabDianji('fh')">GIFF峰会</div>
                <div class="choiceSheetBox_one" @click="tabDianji('zl')">资料下载</div>
                <div class="choiceSheetBox_one" @click="tabDianji('jy')">创 就 业</div>
                <div class="choiceSheetBox_one" @click="tabDianji('wm')">关于我们</div>
                <div style="font-size: 0.32rem;font-weight: bold" class="choiceSheetBox_one">+</div>
            </div>
            <div class="choiceSheetBig">
                <div class="choiceSheetBig_img" @click="gAnxiny">
                    <img style="width: 100%;height: 100%;" src="../../assets/homePage/1.png" alt="">
                </div>
                <div class="choiceSheetBig_img">
                    <img style="width: 100%;height: 100%;" src="../../assets/homePage/2.png" alt="">
                </div>
                <div class="choiceSheetBig_img">
                    <img style="width: 100%;height: 100%;" src="../../assets/homePage/3.png" alt="">
                </div>
                <div class="choiceSheetBig_img" @click="ziFenzhongxin">
                    <img style="width: 100%;height: 100%;" src="../../assets/homePage/4.png" alt="">
                </div>
            </div>
        </div>
        <div class="swiperSheet">
            <div class="swiperSheetBox">
                <van-swipe class="my-swipe" :autoplay="5000"  indicator-color="white">
                    <van-swipe-item>
                        <div class="swiperBigBox">
                            <img style="width: 100%;height: 100%" src="../../assets/homePage/banner.jpg" alt="">
                            <div class="swiperfontBox">8月19日下午，“企业信用研讨会”在国务院国资委机关事事局成功举办 </div>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div class="swiperBigBox">
                            <img style="width: 100%;height: 100%" src="../../assets/homePage/banner.jpg" alt="">
                            <div class="swiperfontBox">8月19日下午，“企业信用研讨会”在国务院国资委机关事事局成功举办 </div>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div class="swiperBigBox">
                            <img style="width: 100%;height: 100%" src="../../assets/homePage/banner.jpg" alt="">
                            <div class="swiperfontBox">8月19日下午，“企业信用研讨会”在国务院国资委机关事事局成功举办 </div>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div class="swiperBigBox">
                            <img style="width: 100%;height: 100%" src="../../assets/homePage/banner.jpg" alt="">
                            <div class="swiperfontBox">8月19日下午，“企业信用研讨会”在国务院国资委机关事事局成功举办 </div>
                        </div>
                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
        <div class="noticeSheet">
            <div class="noticeSheetBox">
                <div class="noticeSheetBox_one">
                    <div class="oneLogo">
                        <img style="width: 75%;height: 80%;" src="../../assets/homePage/icon-tz.png" alt="">
                    </div>
                    <div class="oneFont">
                        <span>关于预定子分中心的通知</span>
                    </div>
                </div>
                <div class="noticeSheetBox_two"> 更多 > </div>
            </div>
        </div>
        <div class="sinceritySheet">
            <div class="sinceritySheetBox">
                <div class="sinceritySheetBox_one">
                    <span class="sinceritySheetBox_fontone">诚信企业</span>
                    <span class="sinceritySheetBox_fonttwo">Honest Enterprise</span>
                </div>
                <div class="sinceritySheetBox_two">
                    <div class="sinceritySheetBox_twobox">
                        <div class="twobox_one">
                            <img style="width: 100%;height: 100%;" src="../../assets/homePage/cx.jpg" alt="">
                        </div>
                        <div class="twobox_two">
                            <span>国普健康产业集团有限公司</span>
                            <span>重庆万州彭窖梁蔬菜水果种植场</span>
                            <span>重庆夏钰萍水产养殖场</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="querySheet">
            <div class="querySheetbox">
                <div class="querySheetbox_one">
                    <span class="querySheetbox_fontone">数据查询</span>
                    <span class="querySheetbox_fonttwo">  Data query </span>
                </div>
                <div class="querySheetbox_two">
                    <div class="twoFont">
                        <span>企业信用信息查询</span>
                        <span>机构授权查询</span>
                        <span>人员查询</span>
                    </div>
                    <div class="twoQuery">
                        <div class="twoQuerybox">
                            <van-search
                                    v-model="valuetwo"
                                    show-action
                                    placeholder="请输入搜索关键词"
                                    @search="onSearch"
                            >
                                <div slot="action" @click="onSearchtwo">搜索</div>
                            </van-search>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="weixinSheet">
            <div class="weixinSheet_one">
                <div class="weixinSheet_oneImg"><img style="width: 65%;height: 75%" src="../../assets/homePage/5.jpg" alt=""></div>
                <div class="weixinSheet_oneImg"><img style="width: 65%;height: 75%" src="../../assets/homePage/6.jpg" alt=""></div>
            </div>
            <div class="weixinSheet_two">
                <div class="weixinSheet_twoBox">
                    <img style="width: 70%;height: 80%;" src="../../assets/homePage/wx.png" alt="">
                </div>
            </div>
            <div class="weixinSheet_thr">
                <img style="width: 100%;height: 100%" src="../../assets/homePage/7.jpg" alt="">
            </div>
        </div>
        <div class="hrefSheet">
            <div class="hrefSheet_one">
                <span class="hrefSheet_oneFont">相关链接</span>
                <div class="hrefSheet_oneBox">
                    <div class="hrefSheet_font"></div>
                    <div class="hrefSheet_icon">
                        <van-dropdown-menu direction="up">
                            <van-dropdown-item v-model="value2" :options="option2" />
                        </van-dropdown-menu>
                    </div>
                </div>
            </div>
            <div class="hrefSheet_two">
                <div class="hrefSheet_twoimg">
                    <img style="width: 60%;height: 60%" src="../../assets/logozc.png" alt="">
                </div>
                <span>     监督举报电话：400-838-5198 </span>
            </div>
        </div>
        <div class="footerSheet">
            <div class="footerSheet_img">
                <div class="footerSheet_imgbox">
                    <img style="width: 100%;height: 84%" src="../../assets/homePage/footer-1.jpg" alt="">
                </div>
                <div class="footerSheet_imgbox">
                    <img style="width: 100%;height: 84%" src="../../assets/homePage/footer-2.png" alt="">
                </div>
            </div>
            <div class="footerSheet_font">版权所有:中创国安信用管理股份有限公司</div>
            <div class="footerSheet_font">Copyright©2001-2007 BFA All Rights Reserv</div>
            <div class="footerSheet_font">ICP备案号：琼ICP备19004493号-1  </div>
            <div class="footerSheet_kong"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "principalSheet",
        data() {
            return {
                value:'',
                valuetwo:'',
                option2: [
                    { value: 'a' },
                    { value: 'b' },
                    { value: 'c' },
                ],
                value2: 'a'
            }
        },
        created() {},
        mounted(){
        },
        methods:{
            isMobile(){
                let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
                return flag;
            },
            onSearch(){
                console.log('搜索')
            },
            onSearchtwo(){
                console.log('搜索')
            },
            gAnxiny(){
                console.log(123123123)
                location.href = 'http://www.xn--vuqz4h8v4cgwj.top/#/loadLogin'
            },
            ziFenzhongxin(){
                this.$router.push({name: 'Sheetchildren'})
            },
            tabDianji(index){
                console.log(index)
                if(index === "cx"){
                    location.href = 'http://www.cctvxy.com/#/integrityPage'
                }else if(index === "gp"){
                    if(this.isMobile) {
                        location.href = 'http://www.guopu.co/#/guopuYidong'
                    }else {
                        location.href = 'http://www.guopu.co/#/guopuPage'
                    }

                }
            }
        }
    }
</script>

<style src="../../style/homePage/principalSheet.css" scoped></style>
<style scoped>
    .van-field__left-icon{
        width: 20px !important;
        height: 100% !important;
    }
    .van-search__action{
        width: 10% !important;
        height: 100% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    }
    .my-swipe .van-swipe-item {
        /*width: 100% !important;*/
        height: 100% !important;
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
    .van-swipe{
        height: 100% !important;
    }
    .van-search--show-action{
        width: 100% !important;
        height: 100% !important;
    }
    .van-search{
        background-color: #e6e6e6 !important;
    }
    .van-dropdown-menu{
        height: 10px !important;
    }
    .van-search__action{
        font-size: 12px !important;
    }
</style>
