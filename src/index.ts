$('.login.page').hide();   //登录界面的隐藏

//定义登录界面


class Login {            //显现登录界面
    $el = $('.login.page');
    $username = this.$el.find('#username');
    $tree = $('.trunk, .trunk div');

    carouselId: number;
    backgroundImages = [`https://www.lawyered.in/static/all_images/banner_images/banner_home1.4d06f0909844.jpg`
        , '//blackrockdigital.github.io/startbootstrap-stylish-portfolio/img/bg.jpg',
        `http://www.webhek.com/misc-res/unitethelovers/content/image/bg.jpg`,
        'image/956779.jpg',
        'image/1083067.jpg',
        'image/1083106.jpg',
        'image/1112772.jpg',
        'image/1501503.jpg']

    //构建器，会在new 的时候运行
    constructor() {
        this.$el.fadeIn(4000);  //淡入背景图  fadeOut  淡出
        this.carouseBackground();


        //树自动修改颜色
        this.carouselTreeColor();
    }
    carouselTreeColor() {
        setInterval(() => {
            var [r, g, b] = [parseInt(Math.random() * 10 + ''), parseInt(Math.random() * 10 + ''), parseInt(Math.random() * 10 + '')];
            this.$tree.css('background', `#${r}${g}${b}`);
        }, 3000);
    }
    checkUsername() {
        var username = this.$username.val()
        if (/^1[3-9]\d{9}$/.test(username)) {


        } else {
            alert(`error:${username}`);
        }
    }







    //轮播背景
    carouseBackground() {
        var index = 0;
        this.carouselId = setInterval(() => {
            this.$el.fadeOut(3000, () => {
                this.$el.css('backgroundImage', `url(${this.backgroundImages[index]})`);
                index = index == this.backgroundImages.length - 1 ? 0 : ++index;
                this.$el.fadeIn(3000);
            });


        }, 5000);

    }
}
var loginPage = new Login();   