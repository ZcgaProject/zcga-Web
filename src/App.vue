<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    updated() {
      window.scroll(0, 0);
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
    width: 100%;
    height: 100vh;
    /*background-color: aqua;*/
  }
  body,
  ol,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  th,
  td,
  dl,
  dd,
  form,
  fieldset,
  legend,
  input,
  textarea,
  select {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    -webkit-text-size-adjust: 100%;
  }

  a {
    color: #2d374b;
    text-decoration: none
  }

  a:hover {
    text-decoration: underline
  }

  em {
    font-style: normal
  }

  ul li {
    list-style: none
  }

  img {
    border: 0;
    vertical-align: middle
  }

  table {
    border-collapse: collapse;
    border-spacing: 0
  }

  p {
    word-wrap: break-word
  }

  select,
  input {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  @media screen and (max-width: 320px) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 321px) and (max-width: 413px) {
    html {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 414px) and (max-width: 639px) {
    html {
      font-size: 17px;
    }
  }

  @media screen and (min-width: 640px) {
    html {
      font-size: 18px;
    }
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .parent:after {
    content: "";
    height: 0;
    display: block;
    clear: both;
  }

  input:focus {
    outline: none;
  }

  select:focus {
    outline: none;
  }

  select {
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -khtml-border-radius: 0;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: button;
  }

  select::-ms-expand {
    display: none;
  }

  a:link {
    /*color: #fff;*/
    text-decoration: none;
  }

  a:visited {
    /*color: #fff;*/
    text-decoration: none;
  }

  a:hover {
    /*color: #fff;*/
    text-decoration: none;
  }

  a:active {
    color: #fff;
    text-decoration: none;
  }

  strong {
    font-weight: 500;
  }

  @media screen and (max-width: 320px) {
    select {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 321px) and (max-width: 413px) {
    select {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 414px) and (max-width: 639px) {
    select {
      font-size: 17px;
    }
  }

  @media screen and (min-width: 640px) {
    select {
      font-size: 18px;
    }
  }
</style>
