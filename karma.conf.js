const path = require('path');

module.exports = function (config) {
  const babelPresets = [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }]
  ];

  config.set({
    frameworks: ['jasmine'],

    files: [
      'test/**/*.spec.js'
    ],

    preprocessors: {
      'test/**/*.spec.js': ['webpack']
    },

    webpack: {
      mode: 'development',

      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, 'src'),
            use: {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                configFile: false,
                presets: babelPresets,
                plugins: ['babel-plugin-istanbul']
              }
            }
          },
          {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, 'test'),
            use: {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                configFile: false,
                presets: babelPresets
              }
            }
          }
        ]
      },

      resolve: {
        extensions: ['.js', '.jsx']
      }
    },

    browsers: ['ChromeHeadless'],

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: path.join(__dirname, 'coverage'),
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' }
      ]
    },

    singleRun: true,
    autoWatch: false
  });
};