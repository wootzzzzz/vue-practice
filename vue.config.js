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
      },
      prerenderSpa: {
        registry: undefined,
        renderRoutes: [
          '/',
          '/home',
          '/c2c'
        ],
        useRenderEvent: true,
        onlyProduction: true,
        
        headless: false, // <- this could also be inside the customRendererConfig
        customRendererConfig: 
        {
          args: ["--auto-open-devtools-for-tabs"]
        },
        postProcess: route => {
          // Defer scripts and tell Vue it's been server rendered to trigger hydration
          route.html = route.html
            .replace(/<script (.*?)>/g, '<script $1 defer>')
            .replace('id="app"', 'id="app" data-server-rendered="true"');
          return route;
        }
      }
    },
    // configureWebpack: () => {
    //   if (process.env.NODE_ENV !== 'production') return;
    //   return {
    //     plugins: [
    //       new PrerenderSPAPlugin({
    //         // The path to the generated file can also be the same as that packaged by webpakc.
    //         // The following sentence is very important! ! !
    //         // This directory can only have one level. If the directory level is greater than one level, there will be no error prompts when generating, and it will on$
    //         staticDir: path.join(__dirname, 'dist'),
     
    //         // Corresponding to your own routing file, for example, a has parameters, you need to write /a/param1.
    //         routes: ['/', '/home', '/c2c/'],
     
    //         // This is very important, if it is not configured, it will not be precompiled.
    //         renderer: new Renderer({
    //           // In main.js document.dispatchEvent(new Event('render-event')), the event names of the two should correspond.
    //           renderAfterDocumentEvent: 'render-event'
    //         })
    //       })
    //     ]
    //   };
    // },
  };
  