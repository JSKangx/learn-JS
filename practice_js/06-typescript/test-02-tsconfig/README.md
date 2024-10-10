# tsconfig.json 이용하여 TypeScript 환경 구축하기

## npm init

- node.js 명령어
  - node : js 실행시키는 명령어
  - npm, npx : 패키지, 프로젝트 관리하기 위한 명령어
- 해당 프로젝트 폴더를 npm 명령으로 관리하기 위해 초기화시키는 명령어. npm의 환경파일인 package.json이 자동으로 만들어진다.
  > npm init

## 필요한 library(package) 혹은 tool 다운로드

- 다운로드한 라이브러리 혹은 툴은 package.json의 dependencies에 자동으로 기록된다.
  - 왜 기록이 되어야 할까?
    - 팀 단위로 개발을 할 때, 한 팀이 동일한 환경을 구축해야 한다. 동일한 라이브러리를 깐다고 해도, 버전이 맞지 않으면 충돌 문제가 발생할 수 있는 등 완벽히 동일한 환경이 아니다.
    - 그래서 환경 구축을 완료한 package.json만 공유하면, 그 파일을 다운로드받아서 `npm install` 만 입력하면 완벽히 동일한 개발 환경이 구축된다.
- npm install ... : npm repository server로 부터 ... 패키지를 다운로드 받는 명령어.
- '-D' 옵션을 주면 tool이고, 안 주면 라이브러리다.
  > npm install -D typescript
- devDependencies : 개발자 모드에서만 사용하는 툴
- dependencies : 실제 런타임 시에 사용하는 라이브러리

## tsconfig.json(ts환경파일) 준비하기

- tsconfig.json 초기화하기
  > npx tsc -init
- tsconfig.json에 들어가 있는 컴파일 설정을 사용하고 싶다면 필요한 옵션을 주석 해제해서 쓰면 된다. (https://typescript-kr.github.io/pages/tsconfig.json.html)
- tsc의 설정 내용을 tsconfig.json에 기록하기 (강사님 따라함)

## tsc로 transpile 하기

> npx tsc
