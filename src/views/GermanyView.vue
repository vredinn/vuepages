<template>
  <ul v-if="catalog_data" class="list-reset catalog-list" >
    <div class="row">
      <li v-for="data in catalog_data.data" :key="data.title" class="catalog__item col-lg-4 col-sm-6 col-xs-12">
      <article class="product">
        <img :src="loadImg(data.image)" v-bind:alt="data.title" class="product__image">
        <div class="product__content">
          <span class="product__author">{{data.author}}</span>
          <h3 class="product__title">{{data.title}}</h3>
          <span class="product__props">{{data.descr}}</span>
          <div class="product__price">{{data.price}} руб</div>
          <button class="btn-reset btn btn--stroke product__btn">В корзину</button>
        </div>
      </article>
    </li>
    </div>
  </ul>
</template>

<script>

import data_file from '../assets/catalog/germany/data.json'
const images = require.context('@/assets/catalog/germany', false, /\.png$|\.jpg$|\.jpeg$/)

export default {
  name: 'GermanyView',
  data(){
    return{
      catalog_data : data_file
    }
  },
  mounted(){
  },
  methods: {
    loadImg(imgPath) {
      return images('./' + imgPath)
    }
  }
}
</script>
<style>
  .list-reset {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .catalog__item{
    margin-bottom: 30px;
  }
  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: 100%;
    background-color: var(--lighter-green);
  }
  .product__image{
    width: 100%;
    height: auto;
  }
  .product__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding-top: 16px;
    padding-bottom: 10px;
    width: 100%;
  }

  .product__author {
    display: inline-block;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 21px;
    color: var(--light-text);
  }

  .product__title {
    margin: 0;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    color: var(--text-color);
  } 

  .product__props {
    display: inline-block;
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 21px;
    color: var(--text-color);
  }

  .product__price {
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 28px;
    color: var(--main-green);
  }

  .product__btn {
    margin-top: auto;
    width: 100%;
  }

  @media (max-width: 768px) {
    .product__author {
      font-size: 16px;
      line-height: 19px;
    }
    .product__title {
      font-size: 24px;
      line-height: 28px;
    }
    .product__props {
      margin-bottom: 11px;
      min-height: 38px;
      font-size: 16px;
      line-height: 19px;
    }
    .product__btn {
      padding: 20px 40px;
    }
  }

  @media screen and (max-width: 576px) {
    .product__image {
      width: 250px;
      min-width: 0px;
      max-height: 250px;
    }
    .product__btn {
      padding: 14px 40px;
    }
  }
</style>