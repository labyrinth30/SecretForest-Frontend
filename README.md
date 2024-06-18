# 2024-1 소프 캡스톤디자인 프론트엔드 레포지토리

### 프로젝트 구현에 사용된 기술과 버전
```
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^3.0.2",
    "axios": "^1.6.8",
    "svelte": "^4.2.12",
    "svelte-material-ui": "^7.0.0-beta.18",
    "tinro": "^0.6.12",
    "vite": "^5.1.6",
    "yup": "^1.4.0"
  },
  "dependencies": {
    "dayjs": "^1.11.10"
  }
  ```

  ### 프로젝트 설치 및 실행
  * node.js를 설치해야합니다.
  1. yarn add로 패키지 설치
  2. yarn dev로 실행
  3. localhost:3000 으로 접속

  ### 프로젝트 구조
  * src
    * components: 컴포넌트 파일들
    * routes: 페이지 라우팅 파일들
    * stores: 상태 관리 파일들
    * utils: 유틸리티 파일들
    * App.svelte: 라우팅 및 컴포넌트 조합
    * main.js: 앱 시작점
  * public
    * index.html: html 파일
  * .gitignore: git 무시 파일들
  * package.json: 패키지 버전 관리 파일
  * README.md: 프로젝트 설명 파일
  * vite.config.js: Vite 설정 파일