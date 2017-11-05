var url = require('url');

var curURL = url.parse('http://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');

var curStr = url.format(curURL);

console.log('주소문자열 : %s', curStr);
console.log(curURL);

var querystring = require('querystring');
var param = querystring.parse(curURL.query);

console.log('요청 파라미터 중 query의  값 : %s', param.query);
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));