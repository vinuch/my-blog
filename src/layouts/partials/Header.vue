<template>
  <header>  
    
    <div class="flex w-full relative text-gray-400 mx-auto bg-black px-4 sm:px-0">
      <div class="container w-full mx-auto flex flex-wrap">  
        <div class="w-full md:w-6/12 sm:w-3/12 lg:w-2/12 my-5 mx-2">
        <a href="/">
          <span>
           <g-image
      src="~/assets/img/logo.png"
      alt="dark background photo for header"
      width="40"
      height="40"
      class="inline"
    ></g-image>
          </span>
          <span class=" text-white pl-1 text-sm">{{ $static.metadata.siteName }}</span>
          </a>
        </div>
        <div class="w-full md:w-5/12 md:w-9/12">
          <div class="flex-1 text-gray-500 text-xs text-center mb-6 pt-1">
            <HeaderNavigation/>
          </div>
        </div>
      </div>
    </div>

  </header>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>



<script>

import HeaderNavigation from "~/layouts/partials/HeaderNavigation.vue";
export default {

  components: {
    HeaderNavigation
  }

}
</script>
