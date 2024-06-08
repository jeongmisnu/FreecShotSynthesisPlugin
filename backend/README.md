## About

아프리카 티비 플러그인을 만드는 프로젝트입니다.

주요기능

1. 채널포인트\*
2. 업보확인
3. 채팅봇

\* : 무조건 구현해야 할 기능

## Stack

Common

- Typescript

Font End

- React.js
- 필요 기능 추가

Back End

- NestJS
- TypeORM
- postgreSQL (Database는 SQL, NoSQL 무엇으로 할지 미확정)

## Setting

### 일반 실행

```shell
npm i
npm run start:dev
npm run start:prod
```

### 도커로 실행

```shell
# 빌드 및 실행
npm run docker:build

# 수정 후 빌드 및 실행
npm run docker:rebuild
```

## Tip

### Node.js Manager Install fnm or n

[n 설치 & 사용법](https://www.npmjs.com/package/n/v/5.0.1) <br/>
[fnm 설치 & 사용법](https://github.com/Schniz/fnm)

```shell
# macOS/linux
npm i -g n

# windows 택1
winget install Schniz.fnm
scoop install fnm
choco install fnm
cargo install fnm

# fnm env --use-on-cd | Out-String | Invoke-Expression '#' 빼고 복붙
notepad $profile
```

### env 설정

```txt
DB_HOST=pgdb
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=postgres
```

DB_HOST를 위와 같이 한 이유는 docker network를 이용해 컨테이너 통신을 하기 위함입니다.
접속할 컨테이너의 이름을 host에 적으면 해당 이름을 가진 컨테이너의 아이피로 접속이 됩니다.

프로젝트의 진행에 필요한 변수들을 추가 하셔도 됩니다.
