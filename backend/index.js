const express = require("express");
const app = express();
const port = 3000;
const database = require("./database");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

app.use(bodyParser.json());
app.use(cookieParser());

app.get("/api/frame", (req, res) => {
  // res.send(backdata);
});

app.post("/api/signup", async (req, res) => {
  await database.run(
    `INSERT INTO User (id,name,password,hint) VALUES ('${req.body.content.id}','${req.body.content.name}','${req.body.content.password}','${req.body.content.pwhint}')`
  );
});

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

// 로그인 끝

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
