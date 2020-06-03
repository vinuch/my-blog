<template>
  <Layout>
    <div class="container mx-auto px-6 sm:px-0">
      <article class="mb-20">
        <header class="mt-10 pt-10 mb-10 text-center">
          <h1 class="text-5xl font-bold">About Me</h1>
        </header>
        <section class="post-full-content">
          <div class="post-content text-2xl font-serif font-hairline text-gray-700 no-image">
            <div class="p-3 m-2 bg-blue-200 float-right rounded-md relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 1052.362 744.094" class="absolute" style="top: -61; left: 41%;"><path d="M100 300c50-250 100-250 150 0" stroke="#000" stroke-width="20" fill="none"/>Sorry, your browser does not support inline SVG.</svg>
              <g-image src="~/assets/img/vince.jpeg"  class="origin-top-right shadow-2xl transform"></g-image>

            </div>
            <p class="pt-10 pr-5">
              Hello My name is Vincent Edeh, my friends call me vince. I am a Software Engineer from Nigeria. <br>
              <br> I mostly specialize in the frontend web development space, with technologies like HTML, CSS and Javascript(vueJS). I have a knack for bringing eye catching
              UI designs to life and I am keen on learning about web accessibility, performance and basically creating 
              a more delighting experience on the web for everybody. <br> <br> This blog is my way of sharing all the information and interesting 
              stuff Ive learnt overtime with the hopes that it helps somebody in the future. <small><i>(probably even me😅).</i></small> <br> It's built with gridsome, tailwindcss and deployed on netlify it also uses netlifyCMS for content management.
              <br><br>
              when im not coding I'm either playing basketball somewhere, watching a romantic comedy at home or just scrolling aimelessly on <a href="https://twitter.com/_DEVince">twitter</a> 😁.
              <br><br>
              so yeah thats basically what I'm about, stick around and I really hope you enjoy the content, also I'd really apprecieate feedback in the comments.

            </p>
          </div>
        </section>
      </article>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us"
  }
};
</script>
