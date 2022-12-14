//import connection
import db from "../config/database.js";

//get last value in the row
export const getLast = (result) => {
  db.query("SELECT json_extract(q_a,'$.Q1') AS Q1,json_extract(q_a,'$.Q2') AS Q2,json_extract(q_a,'$.Q3') AS Q3 FROM question_answer ORDER BY id DESC LIMIT 1", (err, results) => {
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

