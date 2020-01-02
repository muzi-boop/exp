<template>
    <div class="content">
       <div>{{date | format('yyyy-MM-dd')}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    beforeCreate (){
        console.log(`beforeCreate`);
    },
    created (){
        console.log(`created`);
    },
    beforeMount () {
        console.log('beforeMount');
    },
    mounted () {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated")
    },
    beforeDestroy() {
        console.log("beforeDestroy")
    },
    destroyed() {
        console.log("destroyed")
    },
}
</script>
