module.exports = {
  publicPath: '/', 
  devServer: {
     proxy: 'https://www.erescambio.com',
     headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    }
  },
  pluginOptions: {
    compression:{
      brotli: {
        filename: '[path].br[query]',
        algorithm: 'brotliCompress',
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        compressionOptions: {
          level: 11,
        },
        minRatio: 0.8,
      },
      gzip: {
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8,
      }
    }
  },//desde aca para exportar con el mismo nombre
  filenameHashing: false,
  configureWebpack: {
    output: {
      filename: 'js/app.9f163af6.js',
      chunkFilename: 'js/chunk-vendors.fc1c89fd.js'
    }
  },
  css: {
    extract: {
      filename: 'css/app.b1a9a820.css', 
      chunkFilename: 'css/chunk-vendors.1a06b43d.css'
    }
  }//hasta aca para exportar con el mismo nombre
  


}
