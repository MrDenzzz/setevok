<template>
    <div class="style-form">
        <div class="dateOrder">Календарь</div>
        <label class="ordersDetales" for="input">Плакаты<input type="text"/></label>
        <label class="ordersDetales" for="input">Сити-постеры<input type="text"/></label>
        <label class="ordersDetales" for="input">Хард-постеры<input type="text"/></label class="ordersDetales">
        <label class="ordersDetales" for="input">Флаеры<input type="text"/></label>
        <label class="ordersDetales" for="input">Стенди-постеры <input type="text"/></label>
    </div>
</template>

<script>
    export default {
        name: "ReclameOrder",
    }
</script>

<style lang="stylus" scoped>
.orderDetales
    justify-content: space-between;
     
.style-form input[type=text] {
    width 1000%
    display: flex;
    padding: 8px 4px 8px 10px;
    margin-bottom: 15px;
    border: 1px solid #4e3043;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    -webkit-transition: all 0.7s linear;
    -moz-transition: all 0.7s linear;
    -ms-transition: all 0.7s linear;
    -o-transition: all 0.7s linear;
    transition: all 0.7s linear;
    /* Font styles */
    font-family: 'Raleway', 'Lato', Arial, sans-serif;
    color: #fff;
    font-size: 16px;
}

.style-form input[type=text]:hover {
    border-color: #435664;
    box-shadow: inset 123px 108px -198px #435664;
    transition: all 0.4s linear;
}

.style-form input[type=text]:focus {
    box-shadow: 0px 0px 0.1px rgba(0, 0, 0, 1);
}

.no-boxshadow .style-form input[type=text]:focus {
    outline: -10px solid rgba(255, 255, 255, 0.1);
}

label
    color white
</style>