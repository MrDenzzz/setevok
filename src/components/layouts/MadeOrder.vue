<template>
    <div>
        <div>
            <label for="p">Дата проверки</label><p>{{today}} - 2016-09-10</p>
        </div>

        <div>
            <p>2016-09-10</p>
        </div>

        <div>
            <p>2016-09-10</p>
        </div>

        <div>
            <p>2016-09-10</p>
        </div>
        
        <div>
            <p>2016-09-10</p>
        </div>

        <div>
            <p>2016-09-10</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "madeOrder",
        data() {
            return {
                today:""
            }
        },
        methods:{
            today(){
                today = Date.now;
                this.today = today;
                console.log(today. this.today)
            }
        }
    }
</script>

<style scoped>

</style>