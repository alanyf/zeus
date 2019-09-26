var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
const { VueLoaderPlugin } = require('vue-loader')
var chalk = require('chalk')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// var vueMarkdown = require('./vue-markdown');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const striptags = require('./strip-tag');
const vueMarkdown = {
  use: [
    [require('markdown-it-container'), 'demo', {
      validate: (params) => {

        console.log('\n********************\n\n\n\n444',params.trim().match(/^demo\s*(.*)$/) ,'\n\n\n\n**************************');
        return params.trim().match(/^demo\s*(.*)$/)
      },
      render: function(tokens, idx) {

        console.log('\n********************\n\n\n\n3234e',tokens ,'\n\n\n\n**************************');
        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
          var desc = tokens[idx + 2].content;
          const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))
          // 移除描述，防止被添加到代码块
          tokens[idx + 2].children = [];
          return `<demo-block>
                        <div slot="desc">${html}</div>
                        <div slot="highlight">`;
        }
        return '</div></demo-block>\n';
      }
    }],
    [require('markdown-it-container'), 'tip'],
    /* or */
    [require('markdown-it-container'), 'warning']
  ],
  preprocess: (MarkdownIt, source) => {
    console.log('\n********************\n\n\n\n111\n\n\n\n**************************');
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)

    // ```code`` 给这种样式加个class code_inline
    const code_inline = MarkdownIt.renderer.rules.code_inline
    MarkdownIt.renderer.rules.code_inline = function(...args){
      args[0][args[1]].attrJoin('class', 'code_inline')
      console.log('\n********************\n\n\n\n2',code_inline(...args) ,'\n\n\n\n**************************');
      return code_inline(...args)
    }
    console.log('\n********************\n\n\n\n3',source ,'\n\n\n\n**************************');
    return source
  },
};


module.exports = {
  // entry: {
  //   app: './src/main.js'
  // },
  entry: utils.getEntries('./src/views/**/main.js'),
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css', '.less'],
    alias: {
      //'vue$': 'vue/dist/vue.js',
      '@': resolve('src'),
      'src': resolve('src')
    }
  },
  module: {
    rules: [
    //   {
    //     test: /\.(js|vue)$/,
    //     loader: 'eslint-loader',
    //     enforce: "pre",
    //     include: [resolve('src'), resolve('test')],
    //     options: {
    //       formatter: require('eslint-friendly-formatter')
    //     }
    //   },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
    //   {
    //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    //     loader: 'url-loader',
    //     query: {
    //       limit: 10000,
    //       name: utils.assetsPath(`../img/[name].[${config.prefix}].[ext]`)
    //       //name: `./img/[name].[${config.prefix}].[ext]`
    //     },
    //     exclude: /icons/
    //   },
      {
        test: /\.svg(\?\S*)?$/,
        loader: 'svg-sprite-loader',
        query: {
            prefixize: true,
            name: '[name]-[hash]'
        },
        include: [resolve('src')],
        exclude: /node_modules|bower_components/
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: vueMarkdown
      }

    ]
  },
  plugins: [
    //new VueLoaderPlugin(),
    new ProgressBarPlugin({
      format: 'build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds) : (:msg)',
      clear: false,
      width: 60
    })
  ]
}
