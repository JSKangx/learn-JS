### front web app 과 연동하기 위한 서버 app

- 네트워크로 연결되는 다른 컴퓨터에서 실행되어도 상관없지만, 이 컴퓨터가 서버역할도 한다고 가정한다.
- 폴더 위치는 상관없다. 그런데, ajax 배우면서 계속해서 사용할 것이기 때문에 ajax/server 폴더를 만들었다.
- front web과 연동하기 위한 back end web app은 다양한 언어로 개발이 가능하나, 우리가 js를 배우고 있기 때문에 node.js에서 동작하는 서버로 테스트를 한다.
  - backend web을 node.js에서 실행하려면 node.js가 설치되어 있어야 한다.

#### node.js

##### (1) node : js 파일 실행

- `node a.js`

##### (2) npm : node package manager

- 다양한 라이브러리 다운로드 및 관리 툴

### back-end 상황 구축하기

#### (1) 강사가 공유한 back-end 코드 다운로드 및 server 폴더에 넣기

#### (2) back-end에서 필요한 package(라이브러리) 다운로드

- `npm install` : package json에 써 있는 라이브러리가 자동으로 다운로드 된다.

#### (3) back-end(서버) 실행

- `node main.js` 를 입력하면 서버 구동상태가 된다.

#### (4) front 브라우저로 테스트해보자.
