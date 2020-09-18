<template>
  <div>
  
    <animate-number
      from="1" 
      :to="num" 
      duration="1000" 
      easing="easeOutQuad"
      :formatter="formatter"
    ></animate-number>
  </div>
</template>

<script>
  export default {
    data(){
        return {
            num:22
        }
    }
  }
</script>
