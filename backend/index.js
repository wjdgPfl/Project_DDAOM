const express = require("express");
const app = express();
const port = 3000;
const database = require("./database");
const bodyParser = require("body-parser");

// const backdata = {
//   isnone: false,
//   username: "채원",
//   Projects: [
//     { name: "qwe", color: "#FF99D4", checked: false },
//     { name: "project_1", color: "#82D3D9", checked: false },
//     { name: "chae", color: "#AB8EC7", checked: false },
//     { name: "project_3", color: "#7B9BE5", checked: false },
//   ],
// };

app.use(bodyParser.json());

app.get("/api/frame", (req, res) => {
  res.send(backdata);
});

app.post("/api/signup", async (req, res) => {
  console.log(req.body.content.pwhint);
  await database.run(
    `INSERT INTO User (id,name,password,hint) VALUES ('${req.body.content.id}','${req.body.content.name}','${req.body.content.password}','${req.body.content.pwhint}')`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
