<template>
   <router-view/>  
</template>
<script>
export default {
  metaInfo() {
    return this.$config.metaInfo(this.$content)
  }
}
</script>
