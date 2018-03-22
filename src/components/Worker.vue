<template>
    <div class="full-screen">
        <div class="style-form">
            <h2>Исполнитель {Вот здесь должно быть имя}</h2>
            <div class="madeOrder">
                <MadeOrder/>
            </div>
            <div class="orders">
                <Order/>
            </div>
        </div>
    </div>
</template>

<script>
import Order from "./layouts/Order";
import MadeOrder from "./layouts/MadeOrder";

export default {
    name:"Worker",

    components:{
        Order,
        MadeOrder
    }        
}
</script>

<style lang="stylus">
.full-screen {
    width: 99vw;
    height: 98vh;
    position: fixed;
    z-index: -1;
    background: #506371;
}
.style-form {
    padding: 30px;
    position: relative;
    font-family: 'Raleway', 'Lato', Arial, sans-serif;
    color: white;
    text-shadow: 0 3px 1px rgba(0, 0, 0, 0.5);
}
</style>