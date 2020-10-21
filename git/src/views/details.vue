<template>
    <div>
        <div id="d1">
           
        </div>
    </div>
</template>
<style scoped>
    #d1{
        width: 800px;
        height: 200px;
        background-color: pink;
    }
</style>
<script>
export default {
    mounted(){
        this.axios.get("/details",{
            params:{lid:5}
        }).then(result=>{
            console.log(result.data);
        })
    }
}
</script>