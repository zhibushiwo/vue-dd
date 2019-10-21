module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'localhost:3000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
        }
    },
    css :{
        loaderOptions:{
            scss:{
                data:` @import "~@/style/variables.scss";
                       @import "~@/style/mixin.scss";
                `
            }
        }
    }
}