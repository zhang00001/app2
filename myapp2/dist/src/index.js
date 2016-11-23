$('.login.page').hide(); //登录界面的隐藏
//定义登录界面
var Login = (function () {
    //构建器，会在new 的时候运行
    function Login() {
        this.$el = $('.login.page');
        this.$username = this.$el.find('#username');
        this.backgroundImages = ["https://www.lawyered.in/static/all_images/banner_images/banner_home1.4d06f0909844.jpg",
            '//blackrockdigital.github.io/startbootstrap-stylish-portfolio/img/bg.jpg',
            "http://www.webhek.com/misc-res/unitethelovers/content/image/bg.jpg",
            'image/956779.jpg',
            'image/1083067.jpg',
            'image/1083106.jpg',
            'image/1112772.jpg',
            'image/1501503.jpg'];
        this.$el.fadeIn(4000); //淡入背景图  fadeOut  淡出
        this.carouseBackground();
    }
    Login.prototype.checkUser = function () {
        var username = this.$username.val();
        if (/^1[3-9]\d{9}$/.test(username)) {
        }
        else {
            alert("error:" + username);
        }
    };
    //轮播背景
    Login.prototype.carouseBackground = function () {
        var _this = this;
        var index = 0;
        this.carouselId = setInterval(function () {
            _this.$el.fadeOut(3000, function () {
                _this.$el.css('backgroundImage', "url(" + _this.backgroundImages[index] + ")");
                index = index == _this.backgroundImages.length - 1 ? 0 : ++index;
                _this.$el.fadeIn(3000);
            });
        }, 5000);
    };
    return Login;
}());
var loginPage = new Login();
//# sourceMappingURL=index.js.map