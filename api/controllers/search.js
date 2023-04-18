import { connection } from "../connect.js";


export const getSearch = (req, res) =>{
        try {
          const query  = req.query.q;
          const sql = `SELECT * FROM users WHERE username LIKE '%${query}%' OR email LIKE '%${query}%'`;
          connection.query(sql, (err, results) => {
            if (err) throw err;
            res.status(200).json({ success: true, data: results });
          });
        } catch (error) {
          console.log(error);
          res.status(500).json({ success: false, message: "Server Error" });
        }
      ;
}