<template>
  <header class="header">      
        <div class="container header__container">
          <div class="header__left">
            <a href="#" class="logo"><img class="logo__img" src="@/assets/logo.svg" alt="logo"></a>
          </div>
          <div class="header__right">              
            <nav class="header__nav" :class="{ 'header__nav--active': navActive }">                
              <a href="#catalog" v-scroll-to="'#catalog'" class="header__link" v-on:click="navActive ? toggleNav() : ''" to="/">Репродукции</a>
              <a href="#news" class="header__link" v-on:click="navActive ? toggleNav() : ''" to="/news">Новинки</a> 
              <a href="#about" class="header__link" v-on:click="navActive ? toggleNav() : ''" to="/about">О нас</a>
            </nav>
            <button class="burger" :class="{ 'burger--active': navActive }" v-on:click="toggleNav()" aria-label="Открыть меню">
              <span class="burger__line"></span>
            </button>
              <svg width="22.000000" height="22.000000" viewBox="0 0 22 22" fill="none" class="header__cart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <clipPath id="clip4_1053">
                    <rect id="shopping-cart" rx="0.000000" width="21.000000" height="21.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                  </clipPath>
                </defs>
                <rect id="shopping-cart" rx="0.000000" width="21.000000" height="21.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
                <g clip-path="url(#clip4_1053)">
                  <path id="Vector" d="M8.25 20.16C7.74 20.16 7.33 19.75 7.33 19.25C7.33 18.74 7.74 18.33 8.25 18.33C8.75 18.33 9.16 18.74 9.16 19.25C9.16 19.75 8.75 20.16 8.25 20.16Z" class="header__cart-elem" stroke="#2C2D35" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                  <path id="Vector" d="M18.33 20.16C17.82 20.16 17.41 19.75 17.41 19.25C17.41 18.74 17.82 18.33 18.33 18.33C18.83 18.33 19.25 18.74 19.25 19.25C19.25 19.75 18.83 20.16 18.33 20.16Z" class="header__cart-elem" stroke="#2C2D35" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                  <path id="Vector" d="M0.91 0.91L4.58 0.91L7.04 13.19C7.12 13.61 7.35 13.99 7.68 14.26C8.02 14.53 8.44 14.67 8.87 14.66L17.78 14.66C18.21 14.67 18.63 14.53 18.96 14.26C19.3 13.99 19.53 13.61 19.61 13.19L21.08 5.5L5.5 5.5" class="header__cart-elem" stroke="#2C2D35" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                </g>
              </svg>
          </div>
        </div>
  </header>
  <main>
    <section class="hero">
      <div class="container">
        <div class="row">
          <picture class="hero__img--wrapper col-md-6 col-sm-5">
            <img class="hero__img" src="@/assets/imgs/hero-img.png" alt="">
          </picture>
          <div class="hero__content col-md-6 col-sm-7">
            <h1 class="hero__title">
              Реплики картин от <span class="hero__title--accent">Ink. House</span>
            </h1>
            <p class="hero__descr">
              Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.
            </p>
            <a href="#" class="btn hero__button">Продукция</a>
          </div>
        </div>
      </div>
    </section>
    <section class="catalog" id="catalog">
      <div class="container">
        <div class="catalog__nav">
          <h2 class="title catalog__title">Репродукции</h2>
          <div class="catalog__tabs">
            <router-link to="/" class="catalog__tab" activeClass="catalog__tab--active">Франция</router-link>
            <router-link to="germany" class="catalog__tab" activeClass="catalog__tab--active">Германия</router-link>
            <router-link to="england" class="catalog__tab" activeClass="catalog__tab--active">Англия</router-link>
          </div>
        </div>
        <router-view/>
      </div>
    </section>
    <section class="news" id="news">
      <div class="container">
          <div class="news__container col-xl-6 col-md-9">
            <h2 class="title news__title">Новая коллекция французских авторов</h2>
            <div class="news__content">
              <p class="news__descr">Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые,
                в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.</p>
              <p class="news__descr">Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую
                востребованность направлений прогрессивного развития</p>
            </div>            
          <div class="row">
            <div class="col">
              <a href="#" class="btn news__button">Ознакомиться</a>
            </div>
          </div>
          </div>
      </div>
    </section>
    <section class="about" id="about">
      <div class="container">
        <div class="row">
          <picture class="about__img-wrapper col-md-5">
            <img src="@/assets/imgs/about-img.png" alt="about" class="about__img">
          </picture>
          <div class="about__content col-md-7">
            <h2 class="title about__title">Наша команда</h2>
            <p class="about__descr">
            Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение
            экспериментов, поражающих по своей масштабности играндиозности. Мы вынуждены отталкиваться
            от того, что консультация с широким активом.
          </p>
          <div class="about__team">
            <img src="@/assets/imgs/about-team-1.png" alt="Член команды" class="about__item">
            <img src="@/assets/imgs/about-team-2.png" alt="Член команды" class="about__item">
            <img src="@/assets/imgs/about-team-3.png" alt="Член команды" class="about__item">
          </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer class="footer" id="footer">
    <div class="container footer__container">
      <div class="footer__left">
        <a class="logo footer__logo">
          <img src="@/assets/logo.svg" alt="Логотип Ink House">
        </a>
        <div class="footer__phone">
          <a href="tel:+79995435454" class="footer__phone-link">+7 (999) 543-54-54</a>
          <span class="footer__phone-text">Мастерская</span>
        </div>
      </div>
      <div class="footer__right">
        <div class="footer-menu">
          <div class="footer-menu__col">
            <h3 class="footer-menu__title">Репродукции</h3>
            <ul class="list-reset footer-menu__list">
              <li class="footer-menu__item"><router-link v-scroll-to="'#catalog'" to="/" class="footer-menu__link">Франция</router-link></li>
              <li class="footer-menu__item"><router-link v-scroll-to="'#catalog'" to="germany" class="footer-menu__link">Германия</router-link></li>
              <li class="footer-menu__item"><router-link v-scroll-to="'#catalog'" to="england" class="footer-menu__link">Англия</router-link></li>
            </ul>
          </div>
          <div class="footer-menu__col">
            <h3 class="footer-menu__title">Новинки</h3>
            <ul class="list-reset footer-menu__list">
              <li class="footer-menu__item"><a href="#" class="footer-menu__link">2021</a></li>
              <li class="footer-menu__item"><a href="#" class="footer-menu__link">2020</a></li>
            </ul>
          </div>
          <div class="footer-menu__col">
            <h3 class="footer-menu__title">О нас</h3>
            <ul class="list-reset footer-menu__list">
              <li class="footer-menu__item"><a href="#" class="footer-menu__link">Художники</a></li>
              <li class="footer-menu__item"><a href="#" class="footer-menu__link">Менеджеры</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-props">
          <ul class="list-reset social">
            <li class="social__item">
              <a href="#" class="social__link" aria-label="Ink House в Фейсбуке">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path class="social__link-elem" d="M15.402 21V14.034H17.735L18.084 11.326H15.402V9.598C15.402 8.814 15.62 8.279 16.744 8.279H18.178V5.857C17.4838 5.78334 16.7861 5.74762 16.088 5.75C14.021 5.75 12.606 7.012 12.606 9.33V11.326H10.268V14.034H12.606V21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H15.402Z"></path>
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a href="#" class="social__link" aria-label="Ink House в Инстаграме">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path class="social__link-elem" d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"></path>
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a href="#" class="social__link" aria-label="Ink House в Ютубе">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path class="social__link-elem" d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5L16 12L10 8.5V15.5Z"></path>
                </svg>
              </a>
            </li>
          </ul>
          <p class="footer__copyright">
            Ink. House <sup class="reg">®</sup>
            <span class="rights">All rights reserved</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default{
  data(){
    return{
      navActive: false
    }
  },
  methods: {
    toggleNav(){      
      this.navActive = !this.navActive;
      document.body.classList.toggle('stop-scroll')
    }
  }
}

</script>

<style>
@import url("./css/bootstrap-grid.min.css");
@import url("./css/bootstrap-reboot.min.css");
@import url("./assets/fonts/stylesheet.css");
#app {
  font-family: Raleway, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-weight: 500;
  --lighter-green: #e1ede6;
  --light-green: #D4E8D9;
  --main-green: #598D66;
  --dark-green: #376B44;
  --light-text: #86928b;
  --semi-white: #F4F6F5;
  --text-color: #2c2d35;
  --main-yellow: #eedb6d;
  --light-yellow: #faeb97;
  --dark-yellow: #D9B949;
}

.stop-scroll{  
  overflow: hidden;
}

.btn {
  background-color: transparent;
  border: 1px solid var(--main-green);
  display: inline-block;
  outline: none;
  padding: 20px 40px;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: var(--main-green);
  transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  text-decoration: none;
}

.btn:hover{  
  background-color: var(--main-green);
  color: var(--semi-white);
}

.btn:active{  
  background-color: var(--dark-green);
  color: #fff;
}

.title {
    margin: 0;
    font-weight: 500;
    font-size: 40px;
    line-height: 110%;
    color: var(--text-color);
}

.header{
  background-color: var(--lighter-green);
  padding: 31px 0;
}

.header__container {
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__right {
  display: flex;
  align-items: center;
}

.header__link {
  color: var(--text-color);
  font-size: 20px;
  line-height: normal;
  text-align: right;
  text-decoration: none;
  transition: color .25s ;
  margin-right: 60px;
  padding: 2px;
}
.header__link:hover{
  color: rgb(89, 141, 102);
}
.header__link:active{
  color: var(--text-color);
  background: rgb(212, 232, 217);
}

.header__cart{
    z-index: 1;
}

.header__cart-elem{
  transition: stroke 0.3s ease-in-out;
}

.header__cart:hover{
  cursor: pointer;
}

.header__cart:hover .header__cart-elem{  
  stroke: var(--main-green);
}

.header__cart:active{
  
  background-color: var(--light-green);
}


.header__cart:active .header__cart-elem{  
  stroke: var(--dark-green);
}

.burger {
    --burger-width: 20px;
    --burger-height: 16px;
    --burger-line-height: 2px;
    display: none;
    position: relative;
    border: none;
    padding: 0;
    z-index: 105;
    width: var(--burger-width);
    height: var(--burger-height);
    color: #4c5866;
    background-color: transparent;
    cursor: pointer;
    transform: translateX(5px);
}

.burger__line {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: var(--burger-line-height);
    background-color: var(--dark-green);
    transform: translateY(-50%);
    transition: transform 0.3s ease-in-out;
}

.burger::before, .burger::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: var(--burger-line-height);
    background-color: var(--dark-green);
    transition: transform 0.3s ease-in-out, top 0.3s ease-in-out;
}

.burger::before {
    top: 0;
}

.burger::after {
    top: calc(100% - var(--burger-line-height));
}

.burger--active::before {
    top: 50%;
    transform: rotate(45deg);
    transition: transform 0.3s ease-in-out, top 0.3s ease-in-out;
}
.burger--active::after {
    top: 50%;
    transform: rotate(-45deg);
    transition: transform 0.3s ease-in-out, top 0.3s ease-in-out;
}
.burger--active .burger__line {
    transform: scale(0);
    transition: transform 0.3s ease-in-out;
}

.hero__img{
  width: 100%;
  height: auto;
}

.hero__content{
  padding-top: 145px;
  text-align: left;
}

.hero__title{
  color: var(--text-color);
  margin: 0;
  margin-bottom: 20px;
  font-size: 60px;
  line-height: 110%;
}

.hero__title--accent{  
  color: var(--main-green);
}

.hero__descr {
    margin: 0;
    margin-bottom: 60px;
    font-size: 18px;
    line-height: 150%;
    color: var(--light-text);
}

.hero__button{
  min-width: 225px;
}
.catalog{
  padding-top: 50px;
  padding-bottom: 70px;
}
.catalog__nav{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.catalog__title {
    margin-right: 20px;
}
.catalog__tabs {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

.catalog__tab{
  position: relative;
  outline: none;
  border-radius: 20px;
  padding: 10px 21px;
  font-size: 20px;
  line-height: 23px;
  color: var(--text-color);
  background: var(--light-green);
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  text-decoration: none;
}

.catalog__tab:not(:last-child) {
  margin-right: 34px;
}

.catalog__tab:hover{
  background-color: var(--main-green);
  color: var(--semi-white);
}

.catalog__tab:active, .catalog__tab--active{
  background-color: var(--dark-green);
  color: #fff;
}

.news{
  position: relative;
  overflow: hidden;
  padding-top: 66px;
  padding-bottom: 73px;
  background-image: url('./assets/imgs/news-lar.jpeg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.news__container{
  height: 100%;
  background-color: rgba(13, 43, 67, 0.7);
  box-shadow: 0 0 5rem 10rem rgba(13, 43, 67, 0.7);
}

.news__title {
    position: relative;
    z-index: 5;
    margin-bottom: 16px;
    padding-left: 100px;
    max-width: 521px;
    color: #fff;background-image: url('./assets/imgs/star.svg');
    background-position: left center;
    background-size: 80px 80px;
    background-repeat: no-repeat;
}

.news__content {
    position: relative;
    z-index: 5;
    margin-bottom: 60px;
    max-width: 540px;
    font-size: 18px;
    line-height: 150%;
    color: #fff;
}

.news__button{
  min-width: 257px;
  color: var(--text-color);
  background-color: var(--main-yellow);
}

.news__button:hover{
  background-color: var(--light-yellow);
  color: var(--text-color);
}

.news__button:active{
  background-color: var(--dark-yellow);
  color: var(--text-color);
}

.about {
  padding: 70px 0;
}

.about__img{
  width: 100%;
  height: auto;
}

.about__content {
  padding-top: 123px;
}

.about__title{
  margin-bottom: 20px;
}
.about__descr {
  margin: 0;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 150%;
  color: var(--text-color);
}

.about__team{
  display: flex;
  align-items: center;
}
.about__item:not(:last-child) {
  margin-right: 30px;
}

.footer {
    padding-top: 22px;
    padding-bottom: 22px;
    background-color: var(--lighter-green);
}
.footer__container {
    display: flex;
}

.footer__left {
  margin-right: 115px;
}

.footer__phone {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.footer__phone-link {
  position: relative;
  z-index: 5;
  outline: none;
  display: inline-block;
  margin-bottom: 7px;
  font-size: 20px;
  font-weight: 500;
  line-height: 23px;
  color: var(--text-color);
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  text-decoration: none;
  padding: 5px;
  margin: -5px;
}

.footer__phone-link:hover{
  color: var(--main-green);
}

.footer__phone-link:active{
  color: var(--text-color);
  background-color: var(--main-green);
}

.footer__phone-text {
  font-size: 18px;
  line-height: 21px;
  color: var(--light-text);
}

.footer__right {
  display: flex;
  flex-grow: 1;
}
.footer-menu {
    display: flex;
    margin-right: auto;
}
.footer-menu__col:not(:last-child) {
    margin-right: 63px;
}

.footer-menu__title {
  margin: 0;
  margin-bottom: 7px;
  font-size: 20px;
  line-height: 23px;
  color: var(--text-color);
}

.footer-menu__list{
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.footer-menu__item:not(:last-child) {
  margin-bottom: 5px;
}

.footer-menu__link {
  position: relative;
  outline: none;
  z-index: 5;
  font-size: 18px;
  line-height: 150%;
  color: var(--light-text);
  text-decoration: none;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  padding: 5px;
  margin: -5px;
}

.footer-menu__link:hover{
  color: var(--main-green);
}
.footer-menu__link:active{
  color: var(--text-color);
  background-color: var(--main-green);
}

.footer-props {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.social {    
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
}
.social__link{
  padding: 2px;
  margin: -2px;
  transition: background-color .25s ease-in-out;
}
.social__link-elem{
  transition: fill .25s ease-in-out;
}
.social__item:not(:last-child) {
  margin-right: 30px;
}

.social__link:hover .social__link-elem{  
  fill: var(--main-green);
}

.social__link:active{  
  background-color: var(--light-green);
}

.social__link:active .social__link-elem{  
  fill: var(--dark-green);
}
.footer__copyright {
  margin: 0;
  padding-top: 11px;
  padding-right: 29px;
  font-size: 12px;
  line-height: 120%;
  color: var(--light-text);
}

.rights{
  display: block;
}

@media screen and (max-width: 992px) {
  .about__content {
      padding-top: 50px;
  }
  .footer__container {
    flex-direction: column;
  }
  .footer__left {
    margin-right: 0;
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 768px) {
  .btn {
        padding: 17px 40px;
  }
  .title {
        font-size: 30px;
        line-height: 110%;
  }
  .header{    
    padding: 16px 0;
  }
  .header__container {
    flex-direction: column;
    justify-content: center;
    padding: 0 33px;
  }
  .header__link {
  font-size: 18px;
  }

  .header__left{
    margin-bottom: 10px;
  }
  
  .header__right {
    justify-content: space-between;
    width: 100%;
    padding-top: 16px;
    border-top: 1px solid #c3d1c6;
  }
  .hero__content {
        padding-top: 35px;
  }
  .hero__title{
    font-size: 40px;
    line-height: 100%;
  }
  .hero__descr {
        margin-bottom: 40px;
  } 
  .hero__button {
        min-width: 210px;
  }
  .catalog {
        padding-top: 30px;
        padding-bottom: 48px;
  }    
  .catalog__title {
    margin-right: 0;
    margin-bottom: 21px;
  }
  .news {
        padding-top: 72px;
        background-image: url('./assets/imgs/news-mid.jpeg');
  }
  .news__title {
    margin-bottom: 30px;
    padding-left: 81px;
    max-width: 510px;
    line-height: 100%;
    background-size: 60px 60px;
  } 
  .news__descr {
    margin-bottom: 16px;
  }
  .news__button{
    min-width: 190px;
  }
  .about {
    padding: 50px 0;
  } 
  .about__content {
    padding-top: 35px;
  }
  
  .about__title{
    margin-bottom: 30px;
  }

  .about__descr {
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 140%;
  }
  .footer__left {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .footer__phone-text {
    font-size: 16px;
    line-height: 19px;
  }
  .footer__right {
    flex-direction: column;
  }
  .footer-menu__col:not(:last-child) {
    margin-right: 20px;
  }
  .footer-menu {
    margin-right: 0;
    margin-bottom: 13px;
    justify-content: space-between;
  }
  .footer-props {
    align-items: center;
    border-top: 1px solid #c3d1c6;
    padding-top: 16px;
  }
  .footer__copyright {
    white-space: nowrap;
    padding-right: 0;
  }
  .rights{
    display: inline;
  }
}

@media screen and (max-width: 576px){
  .header{
    background-color: #fff;
  }
  .header__container{
    padding: 0 15px;
  }
  .header__right{
    border:none;
    position: relative;
    padding: 16px 0;
  }
  
  .header__right::after {
    content: "";
    position: absolute;
    left: -15px;
    right: -15px;
    height: 100%;
    z-index: 0;
    background-color: var(--light-green);
  }
  .header__nav {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: start;
    left: -15px;
    top: 0;
    height: 100vh;
    padding: 15px;
    padding-top: 76px;
    width: calc(100% + 30px);
    background-color: var(--light-green);
    z-index: 1;
    transform: translateX(-150%);
    transition: transform 0.3s ease-in-out;
  }
  
  .header__link{
    margin-bottom: 50px;
  }
  .burger {
    display: block;
  }
  .hero__img{
    display: none;
  }
  .hero__title {
        margin-bottom: 19px;
        font-size: 30px;
        line-height: 100%;
  }
  .hero__descr {
      margin-bottom: 40px;
  }
  .hero__link {
        padding: 13px 29px;
        min-width: auto;
    }
  .header__nav--active {
    transform: none;
  }
  .catalog {
        padding-top: 40px;
        padding-bottom: 57px;
  }
  .catalog__tabs {
        overflow-x: auto;
  }
  .catalog__tab:not(:last-child) {
        margin-right: 21px;
  }
  .news {
        padding-top: 50px;
        padding-bottom: 50px;
        background-image: url('./assets/imgs/news-lit.jpeg');
  }
  .news__title{
    padding-left: 60px;
    font-size: 24px;
    line-height: 100%;
    margin-bottom: 19px;
    max-width: 400px;
    padding-left: 70px;
    background-size: 50px 50px;
  }
  .news__button{    
    width: 100%;
  }  
  .about__title{
    margin-bottom: 20px;
  }
  .about__content {
    padding-top: 26px;
  }
  .about__descr {
    margin-bottom: 20px;
  }

  .about__item:not(:last-child) {
    margin-right: 25px;
  }
  .footer__left {
    display: block;
  }
  .footer__logo {
    margin-bottom: 15px;
  }
  .footer__phone-link {
    font-size: 16px;
    line-height: 19px;
  }
  .footer__right {
    display: block;
  }
  .footer-menu__col:not(:last-child) {
    margin-right: 0;
    margin-bottom: 20px;
  }
  .footer-menu {
    display: block;
  }
}

</style>
