# marron-b.github.io
<img src="https://img.shields.io/badge/markdown-000000?style=flat-square&logo=markdown&logoColor=white"/> <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/> <img src="https://img.shields.io/badge/GithubPages-000000?style=flat-square&logo=GithubPages&logoColor=white"/>

## 실행하기
1. 소스 클론하기
```shell
git clone git@github.com:marron-b/marron-b.github.io.git
```

2. yarn 사용해서 패키지 설치하기
```shell
yarn install
```

3. 개발 버전으로 실행하기
```shell
yarn dev
```


## 구조 설명
```shell
brown
└── config
└── context
└── lib
└── pages
    └── api
    └── develop
    └── tech_report
```
* config - 설정
* context - context
* lib - 공통으로 사용하는 유틸
* pages - 페이지
* pages/api - REST api 
* pages/develop - 개발 관련 글 
* pages/tech_reports - 기술 리포트
### apis
```shell

/api/ping - ping
```

## 커맨드
### 린트
```shell
yarn lint
```