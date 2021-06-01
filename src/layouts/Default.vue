<template>
  <div>
    <HeaderPartial></HeaderPartial>
    <div class="contain">
      <slot/>
    </div>
    <FooterPartial></FooterPartial>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>

import HeaderPartial from '~/layouts/partials/Header.vue'
import FooterPartial from '~/layouts/partials/Footer.vue'

export default {
  components : {
    HeaderPartial,
    FooterPartial
  }
}
</script>

<style scoped>
.contain {
  min-height: 73.6vh;
  /* width: 100vw; */
}
</style>