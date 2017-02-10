const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
// const dllManifest = require('./manifest.json');

// TODO: dll插件使用

module.exports = function getPlugins(env) {
    // 定义运行环境全局变量
    const defineVariable = new webpack.DefinePlugin({
        // 定义当前运行环境，在运行环境中可以通过process.env.NODE_ENV访问当前环境
        'process.env.NODE_ENV': JSON.stringify(env),
    });
    // css代码编译
    const extractCSS = new ExtractTextPlugin('[name].css');

    // const dllReference = new webpack.DllReferencePlugin({
    //     context: __dirname,
    //     manifest: dllManifest
    // });

    if (env === 'develop') {
        // 代码热更新
        const hotReplace = new webpack.HotModuleReplacementPlugin();
        // 控制台增强
        const dashboard = new DashboardPlugin(new Dashboard().setData);
        return {
            plugins: [
                defineVariable,
                extractCSS,
                hotReplace,
                dashboard
            ],
            pluginModule: {
                extractCSS
            }
        };
    }

    if (env === 'produce') {
        return {
            plugins: [
                defineVariable,
                extractCSS
            ],
            pluginModule: {
                extractCSS
            }
        };
    }

    return {
        plugins: [],
        pluginModule: {}
    };
};
