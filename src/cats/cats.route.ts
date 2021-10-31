import { Router } from "express";
import { Cat, CatType } from "./cats.model";

const router = Router();

router.get("/cats", (req, res) => {
  const cats = Cat;
  try {
    res.status(200).send({
      success: true,
      data: { cats },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

/**
 * 특정 고양이 조회
 */
router.get("/cats/:id", (req, res) => {
  try {
    const param = req.params;
    const cat = Cat.find((cat) => {
      return cat.id == param.id;
    });

    res.status(200).send({
      success: true,
      data: { cat },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
});

router.post("/cats/create", (req, res) => {
  try {
    const data = req.body;
    Cat.push(data);
    console.log(data);
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
});

export default router;
