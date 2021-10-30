//src폴더 안의 app.ts에서 변화가 감지되면 저장하자마자 tsc watch가 감지해서 다시 컴파일해서 node로 실행시켜준다.
import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express(); // app = express의 인스턴스
const port: number = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
