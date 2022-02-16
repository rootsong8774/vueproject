const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path'); // 현재 directory absolute path를 가져올수있게 하는 모듈

module.exports = {
    mode: 'development', //개발단계에서 사용하는 모드, 배포 단계에서는 'production'
    devtool: 'eval', //Webpack이 Build하는 속도가 빨라짐, 배포단계에서는 'hidden-source-map' 사용
    resolve: {
        extensions: ['.js','.vue'] // 확장자 처리, import할 때 확장자 떼고 작성 가능
    },
    entry: {
        app: path.join(__dirname, './main.js'), // __dirname은 현재 디렉토리
    },
    module: {
        rules: [{
            test: /\.vue$/, // 끝부분이 .vue인 것을 찾는 정규식 $가 끝부분을 의미함
            loader: 'vue-loader'
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './dist')
    }
}