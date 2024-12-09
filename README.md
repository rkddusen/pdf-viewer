# PDF Viewer

React.js, Node.js, PDF.js로 구현한 PDF 뷰어 애플리케이션입니다.

## 기능
1. PDF 파일 업로드
2. 업로드한 PDF 파일의 웹 뷰어
3. PDF 파일의 신구조문을 배열 형태로 파싱

## 코드 진행 방향

#### 1. PDF 업로드

루트 폴더 안에 프론트엔드의 `client` 폴더와 백엔드의 `server` 폴더를 위치시켰습니다.

프론트엔드는 Vite를 사용하여 React.js로 개발을 진행했으며, 백엔드는 Node.js에서 Express.js를 통해 개발을 진행했습니다.

프론트엔드에서 `input 태그`를 통해 PDF 파일을 선택할 수 있도록 했습니다. (client/src/components/PdfUploader.tsx)

이후, `Axios`를 통해 백엔드와 `API 통신`을 진행하여 백엔드로 PDF 파일을 전송했습니다.

```
export const postPdf = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  return instance.post(`/api/upload-pdf`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
```

백엔드에서는 PDF 파일을 받아서 서버에 업로드하고, 프론트엔드로 PDF 파일이 업로드된 주소를 json형태로 전송했습니다. (server/server.js)

#### 2. PDF 뷰잉

프론트엔드에서 주소를 받은 이후, `PDF.js`를 통해 canvas에 PDF를 그리는 작업을 진행했습니다. (client/src/components/PdfViewer.tsx)

#### 3. 신구조문을 배열 형태로 파생

PDF.js를 통해 canvas에 PDF를 그리는 과정에서 `getTextContent` 메서드를 통해 PDF를 텍스트로 저장했습니다. (client/src/components/PdfViewer.tsx)

이후 신구조문을 분석한 결과 "신·구조문대비표" 이후의 2열로 이루어진 표의 내용으로 확인했습니다.

이에 따라 "신·구조문대비표" 이후의 정보를 `x 좌표`로 구분하여 현행과 개정안을 구별하여 저장했습니다.


## 기술 스택
#### FrontEnd
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=black"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
#### BackEnd
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">


# 시작 가이드
## 권장 요구 사항
- [Node.js 22.12.0](https://nodejs.org/en/blog/release/v22.12.0)
- [Npm 10.9.2](https://www.npmjs.com/package/npm?activeTab=versions)

## 설치
```
$ git clone https://github.com/rkddusen/pdf-viewer.git
$ npm install
```
#### FrontEnd
```
// 프로젝트의 루트 경로에서 시작
$ cd client
$ npm install
```
#### BackEnd
```
// 프로젝트의 루트 경로에서 시작
$ cd server
$ npm install
```

## 실행
#### 1. 서버 실행
```
// 프로젝트의 루트 경로에서 시작
$ npm start
```


#### 2. 웹페이지 접속

크롬 혹은 사파리 브라우저에서 링크 접속
([https://localhost:5173](http://localhost:5173))

#### 3. `파일 선택` 버튼을 통해 PDF 업로드

#### 4. PDF 조회

#### 5. 신구조문의 배열 형태 확인

웹 개발자 도구를 통해 콘솔에 신구조문을 배열 형태로 출력

## 화면 구성
<img width="1440" alt="PDF 업로드" src="https://github.com/user-attachments/assets/cd1ebf8a-ad7e-4921-a8d0-c311709e393f">
<img width="1440" alt="PDF 뷰어" src="https://github.com/user-attachments/assets/a7830880-69ef-45f7-a825-60ffe664300c">
<img width="1440" alt="신구조문 배열" src="https://github.com/user-attachments/assets/dacc8b79-6fdf-49e0-b792-df9852aedf29">
