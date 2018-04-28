<template>
    <div>
      <label for="div">Рассылка заданий</label>
      <div class="filter">
        <input type="text" placeholder="Написать Заказ">
        <input type="text" placeholder="Написать Города">
      </div>
      <textarea placeholder="текст сообщения" name="" id="" cols="30" rows="10"></textarea>
      <div class="dist-button">
        <button>Отправить сообщение</button>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Distribution"
    }
</script>

<style lang="stylus" scoped>
  .filter
  display flex
  flex-direction row
  justify-content space-between
  ::-webkit-input-placeholder {
    text-align: center;
  }

  :-moz-placeholder { /* Firefox 18- */
    text-align: center;
  }

  ::-moz-placeholder {  /* Firefox 19+ */
    text-align: center;
  }

  :-ms-input-placeholder {
    text-align: center;
  }
  textarea{
    width 100%
  }
  .dist-button
    display flex
    justify-content flex-end
  input
    width 49%
  input[type="text"]
    border none
    outline-color rgba(255, 255, 255, 0)
</style>
