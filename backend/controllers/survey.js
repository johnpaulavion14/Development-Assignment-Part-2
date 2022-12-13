//import functions from Product model
import {
  getLast,
  insertQandA
} from "../models/surveyModel.js";

//get last question and answer
export const showQandA = (req, res) => {
  getLast((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//create new question and answer
export const createQandA = (req, res) => {
  const data = req.body;
  insertQandA(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

