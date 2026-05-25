# todo-list-js
* todo리스트 웹 앱 과제

## 실행 방법
* 모든 파일을 다운로드 받은 후 index.html 실행

## 사용한 언어
* HTML, css, 자바스크립트

## 기능
* 할 일 추가
* 추가한 할 일을 웹페이지에 렌더링
* 추가한 할 일의 완료 여부 체크
* 추가한 할 일의 내용 수정
* 추가한 할 일을 삭제
* 로컬스토리지를 이용해 새로고침해도 초기화되지 않음.

## 적용된 자바스크립트 핵심 기술
* DOM Manipulation : document.querySelector() 를 사용해 HTML 내용을 수정
* LocalStorage, JSON Object 변환 : JSON.stringify를 사용해 로컬스토리지에 저장, JSON.parse를 이용해
* 로컬스토리지에 저장된 내용을 복구하는 형식으로 로컬스토리지와 JSON object변환 사용
* Evnet Handling : 각각의 버튼 내부에 onclick 속성을 넣고, 버튼 클릭 시 자바스크립트 함수가 실행되도록 구현
