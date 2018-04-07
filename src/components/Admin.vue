<template>
    <div>
        <h2>Администратор {{$route.params.name}}</h2>
            <div class="orders">
                <Orders></Orders>
            </div>
    </div>
</template>

<script>
import Orders from "./layouts/Orders";

    export default {
        name:"Admin",
        components:{
            Orders
        }   
        
        
    }
</script>

<style lang="stylus" scoped>

.orders
    width 90%
    margin-left 5%
    margin-right 5%    

</style>