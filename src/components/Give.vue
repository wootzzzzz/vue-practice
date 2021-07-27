<template>
  <div>
      <h1>give 2</h1>
  </div>
</template>

<script lang='ts'>

import Vue from 'vue';
import Component from 'vue-class-component';




@Component({
metaInfo() {
    return {
      title: 'this.details.ngo_name',
      htmlAttrs: {
        lang: 'en-US'
      },
   meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'Clean Water' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Cent to Change'},
        { property: 'og:type', content: 'website'},
        { property: 'og:site_name', content: 'Baseco Tondo'},
        // { property: 'og:url', content: process.env.VUE_APP_BASE_URL + '/' + this.$route.params.link },
        { property: 'og:image', content: 'https://api.heropoints.tech/public/upload/ngo/1/1/form_image.jpeg' }, 
        { property: "twitter:card", content:"summary"},
        { property: "twitter:url", content:"https://loftie.com"},
        { property: "twitter:title", content:"Vue Social Cards Example"},
        { property: "twitter:description", content:"Vue sample site showing off Twitter and Facebook Cards."},
        { property: "twitter:image", content:"http://dev.to/social_previews/user/139093.png"}
      ]
    };
  },
})
export default class Give extends Vue {
 
}
</script>

<style>
</style>
