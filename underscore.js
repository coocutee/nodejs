/**
 * Created by cookie on 2017-05-25.
 */

// 이 프로젝트에 underscore가 필요해용! 이걸 쓰면 undersocre모듈을 받아서 사용할 수 있는 객체 리턴
// unsderscore는 변수를 _ 로 쓰는 관습이 있어욥
var _ = require('underscore');
var arr = [3,6,9,1,12];

//배열의 첫 원소 뽑기
console.log(arr[0]);
console.log(_.first(arr))

//배열의 마지막 원소 뽑기
console.log(arr[arr.length-1]);
console.log(_.last(arr));

