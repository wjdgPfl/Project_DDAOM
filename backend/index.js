const express = require("express");
const app = express();
const port = 3000;

const backdata = {
  isnone: false,
  username: "채원",
  Projects: [
    { name: "qwe", color: "#FF99D4", checked: false },
    { name: "project_1", color: "#82D3D9", checked: false },
    { name: "chae", color: "#AB8EC7", checked: false },
    { name: "project_3", color: "#7B9BE5", checked: false },
  ],
};

app.get("/api/frame", (req, res) => {
  res.send(backdata);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
