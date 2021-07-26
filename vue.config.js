// const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
// const path = require('path');
module.exports = {
    pluginOptions: {
      moment: {
        locales: [
          '',
          'en'
        ]
      }
    },
    configureWebpack: () => {
      if (process.env.NODE_ENV !== 'production') return;
      return {
        plugins: [
          new PrerenderSPAPlugin({
            // The path to the generated file can also be the same as that packaged by webpakc.
            // The following sentence is very important! ! !
            // This directory can only have one level. If the directory level is greater than one level, there will be no error prompts when generating, and it will on$
            staticDir: path.join(__dirname, 'dist'),
     
            // Corresponding to your own routing file, for example, a has parameters, you need to write /a/param1.
            routes: ['/', '/home', '/c2c/'],
     
            // This is very important, if it is not configured, it will not be precompiled.
            renderer: new Renderer({
              // In main.js document.dispatchEvent(new Event('render-event')), the event names of the two should correspond.
              renderAfterDocumentEvent: 'render-event'
            })
          })
        ]
      };
    },
  };
  