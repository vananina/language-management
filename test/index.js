// test/index.js
// 특별한 webpack 기능을 사용하기 위해 모든 테스트 파일이 필요합니다.
// https://webpack.github.io/docs/context.html#require-context
var testsContext = require.context('.', true, /\.spec$/)
testsContext.keys().forEach(testsContext)