<template>
    <div>
        <div id="d1">
             
        </div>
        <button @click="change">色彩密码</button>
    </div>
</template>
<style scoped>
    #d1{
        width:300px;
        height:300px;
        border-radius: 50%;
        border:1px solid red;
    }
</style>
<script>
export default { 
    data(){
        return {
             num:0
        }
       
    },
    methods:{
        change(){
            this.num++;
            var s = document.getElementById("d1");
            if(this.num%2==0){
                    s.style.width='300px';
            }else{
                    s.style.width='400px';
            }
            
        }
    },
    
}
</script>