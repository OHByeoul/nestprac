//src폴더 안의 app.ts에서 변화가 감지되면 저장하자마자 tsc watch가 감지해서 다시 컴파일해서 node로 실행시켜준다.
import * as express from "express";
import catRouter from "./cats/cats.route";

const app: express.Express = express(); // app = express의 인스턴스
const port: number = 8000;

app.use((req, res, next) => {
  //use 메소드를 사용해서 미들웨어를 작성함. 해당 미들웨어 위치에 따라 요청이 미들웨어를 통과할수도 있고, 적용이 안 될 수도 있다.
  console.log(req.rawHeaders[3]);
  next(); // 이게 없으면 미들웨어에서 라우터로 요청이 이동되지 않는다.
});

app.use(express.json()); //req 바디에 있는 데이터를 받아오기 위해서 익스프레스에서 제공하는 json 미들웨어를 만든다.

app.use(catRouter);

app.use((req, res, next) => {
  res.send({
    error: "404 not found",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
