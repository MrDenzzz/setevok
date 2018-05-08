<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">

  .screen
    width 100vw
    height 100vh
    display flex
    justify-content center
    align-items center
    flex-direction row
  .title
    margin-bottom: 20px
  .form
    box-shadow 0px 0px 30px rgba(128, 128, 128, 0.62)
    padding 20px
    border-radius 15px
    width 30%
    min-width 270px

  h1 {
    font-family: "Open Sans";
    font-size: 24px;
    font-style: normal;
    font-variant: normal;
    font-weight: 500;
    line-height: 26.4px;
  }
  h3 {
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-variant: normal;
    font-weight: 500;
    line-height: 15.4px;
  }
  p {
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 20px;
  }
  blockquote {
    font-family: "Open Sans";
    font-size: 21px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 30px;
  }
  pre {
    font-family: "Open Sans";
    font-size: 13px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 18.5714px;
  }
  button
    font-size .9em
    text-decoration none
    font-weight 700
    padding .35em 1em
    background-color #eaeef1
    border-radius 3px
    border rgba(125, 125, 125, 0.47) solid 1px
    color rgba(0,0,0,.6)
    text-shadow 0 1px 1px rgba(255,255,255,.7)
    transition .3s
    outline-color white !important


  button:hover{
    border-radius 3px
    background-color: #fff;
  }

  button:active{
    background-color: #d0d3d6;
    background-image: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,0));
    box-shadow: inset 0 0 2px rgba(0,0,0,.2), inset 0 2px 5px rgba(0,0,0,.2), 0 1px rgba(255,255,255,.2);
  }
  input[type=radio] {
    background-color rgba(0, 0, 0, 0.15)
    border-color rgba(0, 0, 0, 0.15)
  }
  .option-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    position: relative;
    top: 13.33333px;
    right: 0;
    bottom: 0;
    left: 0;
    height: 20px;
    width: 20px;
    transition: all 0.15s ease-out 0s;
    background: #cbd1d8;
    border: none;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    margin-right: 0.5rem;
    outline: none;
    position: relative;
    z-index: 1000;
  }
  .option-input:hover {
    background: #9faab7;
  }
  .option-input:checked {
    background: #40e0d0;
  }
  .option-input:checked::before {
    height: 10px;
    width: 10px;
    position: absolute;
    content: '✔';
    display: inline-block;
    font-size: 25px;
    text-align: center;
    line-height: 20px;
  }
  .option-input:checked::after {
    -webkit-animation: click-wave 0.65s;
    -moz-animation: click-wave 0.65s;
    animation: click-wave 0.65s;
    background: #40e0d0;
    content: '';
    display: block;
    position: relative;
    z-index: 100;
  }
  .option-input.radio {
    border-radius: 50%;
  }
  .option-input.radio::after {
    border-radius: 50%;
  }
  select
    text-decoration none
    border none
    outline-color rgba(255, 255, 255, 0)
    background-color white
    appearance: none;
    cursor: pointer;
  ul
    list-style-type: none;



</style>
