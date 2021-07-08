const args = process.argv.slice(2);
const path = require('path');
const fs = require('fs')
const getEntries = (dir) => {
    let absPath = path.resolve(dir); // 绝对路径
    let files = fs.readdirSync(absPath); // 只能读取到儿子这一层
    let entries = {}
    files.forEach(item => {
        let p = path.join(absPath, item);
        if (fs.statSync(p).isDirectory()) {
            p = path.join(p, 'index.js');
            entries[item] = p;
        }
    })
    return entries;
}
if (process.env.NODE_ENV === 'production' && args.includes('--all')) {
    module.exports = {
        outputDir: 'dist', // 输出的目录是dist目录
        configureWebpack: {
            entry: {
                ...getEntries('./src/packages')
            },
            output: { // babel-import-plugin
                filename: 'lib/[name]/index.js',
                libraryTarget: 'umd',
                libraryExport: 'default',
                library: ['tailorUI', '[name]'] // window.tailorUI.
            },
            // 排除vue
            externals: {
                vue: {
                    root: 'Vue',
                    commonjs: 'vue',
                    commonjs2: 'vue',
                    amd: 'vue'
                }
            }
        },
        css: {
            sourceMap: true,
            extract: {
                filename: 'css/[name]/style.css'
            }
        },
        // 用户配合babel-import-plugin就可以实现按需导入
        chainWebpack: config => {
            // 修复HMR
            config.resolve.symlinks(false);
            // 删除默认的配置
            config.optimization.delete('splitChunks')
            config.plugins.delete('copy')
            config.plugins.delete('preload')
            config.plugins.delete('prefetch')
            config.plugins.delete('html')
            config.plugins.delete('hmr')
            config.entryPoints.delete('app')
        }
    }
} else {
    module.exports = {
        outputDir: 'dist', // 输出的目录是dist目录
        // 用户配合babel-import-plugin就可以实现按需导入
        chainWebpack: config => {
            // 修复HMR
            config.resolve.symlinks(false);
        },
        devServer: {
            host: '0.0.0.0',
            hotOnly: false,
            disableHostCheck: true
        },
    }
}



