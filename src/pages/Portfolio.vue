<template>
  <div class=""> 
    <Layout>
      <div class=" md:px-56 my-10 ">
        <!-- <h2 class="text-blue-900 text-2xl underline font-semibold">Selected Projects</h2> -->
          <h1 class="text-5xl font-bold text-center mb-8">My Projects</h1>
        <div v-for="(item, index) in $static.metadata.navigation" :key="`${item.title}-${index}`" :class="`flex justify-between w-full h-full my-16 flex-wrap-reverse p-4 ${index % 2 ? 'flex-row-reverse' : 'flex-row'}`">
          <div class="md:w-6/12">
              <g-link :to="item.link">
            <h4 class="hover:underline cursor-pointer">{{item.title}} </h4>
              </g-link>
            <p class="text-sm leading-normal tracking-wide text-gray-700">
             {{item.description}}
            </p>
            <p class="font-semibold mt-2 flex items-center">
              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 293.129 293.129"><path d="M162.179 140.514a24.18 24.18 0 0111.042-2.64 24.135 24.135 0 0117.133 7.071l9.868-9.867c24.42 8.56 52.664 3.08 72.186-16.441 16.426-16.426 22.904-39.026 19.446-60.329a6.33 6.33 0 00-4.303-5.011 6.328 6.328 0 00-6.423 1.544l-14.652 14.652c-11.932 11.932-31.279 11.932-43.211 0-11.933-11.932-11.933-31.279 0-43.211l14.652-14.652A6.331 6.331 0 00234.449.904c-21.302-3.458-43.903 3.02-60.328 19.446-19.812 19.812-25.144 48.604-16.032 73.269l-21.402 21.402 25.492 25.493zM123.179 179.296l-25.385-25.385-88.765 88.764c-11.542 11.542-11.542 30.255 0 41.797 11.542 11.542 30.255 11.542 41.797 0l76.521-76.52c-7.718-7.759-9.109-19.473-4.168-28.656z"/><path d="M179.795 155.597c-1.815-1.815-4.195-2.723-6.574-2.723s-4.759.908-6.574 2.723l-5.299 5.299-94.392-94.392 4.412-4.412c4.02-4.019 3.521-10.686-1.061-14.06L31.795 19.669a9.297 9.297 0 00-12.087.912L3.356 36.934a9.297 9.297 0 00-.912 12.087l28.362 38.512c3.374 4.581 10.037 5.085 14.06 1.061l4.412-4.413 94.392 94.392-5.672 5.672a9.297 9.297 0 000 13.148l87.079 87.079c11.542 11.542 30.255 11.542 41.797 0 11.542-11.542 11.542-30.255 0-41.797l-87.079-87.078z"/></svg>
              <span class="ml-2">Tools</span>
            </p>
            <ul class="flex my-4">
              <li v-for="(item, index) in item.tools" :key="`${item}-${index}`" class="mr-2 bg-gray-300 text-sm py-1 rounded px-4">{{item}}</li>
            </ul>
            <span>
              <g-link :to="item.link" class="flex items-center my-2 ">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.997 511.997"><path d="M212.26 390.24l-60.331 60.331c-25.012 25.012-65.517 25.012-90.508.005-24.996-24.996-24.996-65.505-.005-90.496l120.683-120.683c24.991-24.992 65.5-24.992 90.491 0 8.331 8.331 21.839 8.331 30.17 0 8.331-8.331 8.331-21.839 0-30.17-41.654-41.654-109.177-41.654-150.831 0L31.247 329.909c-41.654 41.654-41.654 109.177 0 150.831 41.649 41.676 109.177 41.676 150.853 0l60.331-60.331c8.331-8.331 8.331-21.839 0-30.17s-21.84-8.33-30.171.001z"/><path d="M480.751 31.24c-41.654-41.654-109.199-41.654-150.853 0l-72.384 72.384c-8.331 8.331-8.331 21.839 0 30.17 8.331 8.331 21.839 8.331 30.17 0l72.384-72.384c24.991-24.992 65.521-24.992 90.513 0 24.991 24.991 24.991 65.5 0 90.491L317.845 284.638c-24.992 24.992-65.5 24.992-90.491 0-8.331-8.331-21.839-8.331-30.17 0s-8.331 21.839 0 30.17c41.654 41.654 109.177 41.654 150.831 0l132.736-132.736c41.654-41.654 41.654-109.178 0-150.832z"/></svg>
                <span class="text-black ml-2 hover:underline text-orange-400">{{item.link.replace('https://', '')}}</span>
              </g-link>
            </span>
          </div>
          <div class="md:w-5/12">
            <g-link :to="item.link">
              <g-image :src="require(`~/assets/img/${item.img}`)"  class="sm:w-full mx-auto rounded-lg border-2 border-black"></g-image>
            </g-link>
          </div>
        </div>
      </div>
      
    </Layout>
    
  </div>
</template>

<static-query>
query {
  metadata {
    navigation : portfolioProjects {
      title
      description
      link
      img
      tools
    }
  }
}
</static-query>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>