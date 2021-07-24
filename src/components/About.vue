<template>
 <div>
   <h1>About</h1>
 </div>
</template>

<script>

import Vue from 'vue';
import Component from 'vue-class-component';
// import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: `About`,
  metaInfo() {
    return {
      title: 'Cent to Change',
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
        { property: 'og:image', content: 'https://api.heropoints.tech/public/upload/ngo/1/1/form_image.jpeg' }    
      ]
    };
  },
})
export default class About extends Vue {


}
</script>

<style>
</style>
