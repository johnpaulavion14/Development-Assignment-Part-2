//import connection
import db from "../config/database.js";

//get last value in the row
export const getLast = (result) => {
  db.query("SELECT q_a FROM question_answer ORDER BY id DESC LIMIT 1", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//insert q_a to databased
export const insertQandA = (data, result) => {
  db.query("INSERT INTO question_answer SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

