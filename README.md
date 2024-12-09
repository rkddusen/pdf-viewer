# PDF Viewer

React.js, Node.js, PDF.js로 구현한 PDF 뷰어 애플리케이션입니다.

## 기능
1. PDF 파일 업로드
2. 업로드한 PDF 파일의 웹 뷰어
3. PDF 파일의 신구조문을 배열 형태로 파싱

## 기술 스택
#### FrontEnd
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=black"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
#### BackEnd
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">


# 시작 가이드
## 권장 요구 사항
- [Node.js 22.12.0](https://nodejs.org/en/blog/release/v22.12.0)
- [Npm 10.8.1](https://www.npmjs.com/package/npm?activeTab=versions)

## 설치
```
$ git clone https://github.com/rkddusen/pdf-viewer.git
$ npm install
```
#### __FrontEnd__
```
// 프로젝트의 루트 경로에서 시작
$ cd client
$ npm install
```
#### __BackEnd__
```
// 프로젝트의 루트 경로에서 시작
$ cd server
$ npm install
```

## 실행
__1. 서버 실행__
```
// 프로젝트의 루트 경로에서 시작
$ npm start
```


__2. 웹페이지 접속__

크롬 혹은 사파리 브라우저에서 링크 접속
([https://localhost:5173](http://localhost:5173))

__3. `파일 선택` 버튼을 통해 PDF 업로드__

__4. PDF 조회__

__5. 신구조문의 배열 형태 확인__

웹 개발자 도구를 통해 콘솔에 신구조문을 배열 형태로 출력

## 화면 구성
<img width="1440" alt="PDF 업로드" src="https://github.com/user-attachments/assets/cd1ebf8a-ad7e-4921-a8d0-c311709e393f">
<img width="1440" alt="PDF 뷰어" src="https://github.com/user-attachments/assets/a7830880-69ef-45f7-a825-60ffe664300c">
<img width="1440" alt="신구조문 배열" src="https://github.com/user-attachments/assets/dacc8b79-6fdf-49e0-b792-df9852aedf29">
