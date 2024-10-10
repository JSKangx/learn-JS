# TypeScript compiler 설치하기

- 설치 경로 : 06-typescript 하위 전역에서 tsc를 사용하기 위해서 06-typescript 폴더에 설치할 것.
  > npm install typescript 명령어로 설치
- npm으로 설치된 것은 node_modules 폴더 하위에 다운로드 된다.
  - node_modules에 설치된 모든 것은 node_modules가 있는 폴더의 모든 하위 폴더에서 사용가능하다.
- 설치된 컴파일러를 이용해 ts 파일을 js 파일로 컴파일 시켜서 브라우저에서 구동시켜야 한다.
  - 개발자가 만든 타입스크립트 파일이 있는 곳에서 아래 명령어 실행.
  - npx : tsc라는 컴파일러를 실행시키고, 없다면 다운로드해라.
    > npx tsc main.ts
- 컴파일러를 실행시킨 뒤, html에서는 js를 연결하여 실행시켜야 한다.
