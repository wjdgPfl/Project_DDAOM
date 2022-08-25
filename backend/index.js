const express = require("express");
const app = express();
const port = 3000;
const database = require("./database");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
global.a = "";
app.use(bodyParser.json());
app.use(cookieParser());

// 프레임 시작

app.post("/api/frame/color", async (req, res) => {

  const Project_User = await database.run(
    `SELECT * FROM Project_User WHERE user_id = "${a}" ORDER BY project_id`
  )
  res.send(Project_User);

});

app.post("/api/frame/project_name", async (req, res) => {

  const Project = await database.run(
    `SELECT * FROM Project WHERE id IN
    (SELECT project_id FROM Project_User WHERE user_id ='${a}');`
  );
  res.send(Project);

});

app.post("/api/frame/update/checked", async (req, res) => {
  // content : [0] = 프로젝트 id, [1] = 체크 value
  const checkValue = req.body.content
  if (checkValue[1] === 0) {
    // false인 경우
    checkValue[1] = 1
  } else if (checkValue[1] === 1) {
    // true인 경우
    checkValue[1] = 0
  }
  await database.run(
    `UPDATE Project_User SET checked = ${checkValue[1]} WHERE id = ${checkValue[0]}`
  );
  console.log(req.body.content[1])
});

app.post("/api/frame/update/color", async (req, res) => {
  // content : [0] = 프로젝트 id, [1] = 색상 value
  const colorValue = req.body.content

  await database.run(
    `UPDATE Project_User SET color = '${colorValue[1]}' WHERE id = ${colorValue[0]}`
  );
  console.log(req.body.content[1])
});

// 프레임 끝

// 회원가입 시작

app.post("/api/signup", async (req, res) => {
  await database.run(
    `INSERT INTO User (id,name,password,hint) VALUES ('${req.body.content.id}','${req.body.content.name}','${req.body.content.password}','${req.body.content.pwhint}')`
  );
  await database.run(
    `INSERT INTO Project_User (user_id,user_name,color, checked) VALUES ('${req.body.content.id}','${req.body.content.name}','#000000', FALSE)`
  );
});

// 회원가입 끝

// 로그인 시작

app.get("/api/login", async (req, res) => {
  if (req.cookies && req.cookies.token) {
    // 새로고침해도 로그인 되어있도록
    // 쿠키에 정보가 있으면
    jwt.verify(req.cookies.token, "46081382", (err, decoded) => {
      // 쿠키 토큰과 암호가 타당할때
      if (err) {
        // 쿠키 토큰과 암호가 타당하지 않으면 401
        return res.send(401);
      }

      res.send(decoded); //쿠키의 정보가 맞으면 쿠키토큰 안에있는걸 프론트로 보냄
    });
  } else {
    res.sendStatus(401); // 쿠키가 없으면
  }
});

app.post("/api/login", async (req, res) => {
  const members = await database.run("SELECT * FROM User");

  const loginId = req.body.loginId; // 프론트앤드에서 입력받은 아이디
  const loginpw = req.body.loginPw; //  비밀번호
  global.a = req.body.loginId;
  const member = members.find(
    (m) => m.id === loginId && m.password === loginpw // 백앤드에 있는 아디비번과 프론트앤드에서 입력한 아디비번이 일치하면 멤버변수에 넣음
  );

  if (member) {
    const option = {
      domain: "localhost",
      path: "/",
      httpOnly: true,
    };

    const token = jwt.sign(
      {
        id: member.id,
        name: member.name,
      },
      "46081382",
      {
        // 쿠키 암호
        expiresIn: "15m", // 어느정도 쿠키 유지
        issuer: "ddaom",
      }
    );
    res.cookie("token", token, option); // 새로고침해도 로그인 안풀리도록 쿠키에 정보 저장
    // 일치하면 멤버정보를 프론트앤드로 넘겨줌
    res.send(member);
  } else {
    //일치안하면 404에러
    res.send(404);
  }
});

app.delete("/api/login", (req, res) => {
  if (req.cookies && req.cookies.token) {
    res.clearCookie("token");
  }

  res.sendStatus(200);
});

// 로그인 끝

// 프로젝트 리스트

// app.get("/api/list", async (req, res) => {
//   const id = req.body.content;
//   console.log(id);
// });

app.get("/api/list", async (req, res) => {
  const result = await database.run(
    `SELECT * FROM Project WHERE id IN (SELECT project_id FROM Project_User WHERE user_id ='${a}')`
  );
  console.log(a);

  res.send(result);
});

app.get("/api/link", async (req, res) => {
  const result = await database.run(
    `SELECT * FROM Link WHERE project_id IN (SELECT project_id FROM Project_User WHERE user_id = '${a}')`
  );

  res.send(result);
});

app.get("/api/peer", async (req, res) => {
  const result = await database.run("SELECT * FROM Project_User");

  res.send(result);
});

// 프로젝트 리스트

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
