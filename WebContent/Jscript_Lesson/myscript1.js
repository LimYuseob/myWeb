/**
 * 이 외부 스크립트에는 이벤트와 이벤트함수를 정의해서 문서의 요소에 적용해 봅니다.
 */

var heading = document.querySelector("#heading");

//요소에 이벤트 연결..
heading.onclick = function(){
	heading.style.color = 'red';
	
}