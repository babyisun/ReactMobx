const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

export default {
  assets: {
    images: {
      extensions: ['png', 'jpg', 'jpeg', 'gif', 'ico', 'svg'],
    },
    css: {
      extensions: ['css'],
      filter(module, regex, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regex, options, log);
        }
        return regex.test(module.name);
      },
      path(module, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(module, options, log);
        }
        return module.name;
      },
      parser(module, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.css_modules_loader_parser(module, options, log);
        }
        return module.source;
      },
    },
    less: {
      extensions: ['less'],
      filter(module, regex, options, log) {
        if (options.development) {
          return webpack_isomorphic_tools_plugin.style_loader_filter(module, regex, options, log);
        }

        return regex.test(module.name);
      },

      path(module, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(module, options, log);
        }

        return module.name;
      },

      parser(module, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.css_modules_loader_parser(module, options, log);
        }

        return module.source;
      },
    },
  },
};
