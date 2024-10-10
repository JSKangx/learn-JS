// >npm install multer
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      // 유저가 업로드한 파일을 upload 폴더에 업로드한다.
      done(null, "upload/");
    },
    filename(req, file, done) {
      const filename = Buffer.from(file.originalname, "latin1").toString("utf8");
      const ext = path.extname(filename);
      // 파일명 중복시 에러 안 나게 하기 위해 날짜데이터 합쳐서 저장
      done(null, path.basename(filename, ext) + Date.now() + ext);
    },
  }),
  // 최대 사이즈. 이 사이즈가 넘은 파일이 들어오면 거부한다.
  limits: { fileSize: 5 * 1024 * 1024 },
});

// post 방식으로 요청이 들어올 때 실행될 코드
router.post("/", (req, res, next) => {
  const a1 = upload.array("file");

  a1(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err);
      res.json({ status: 500, message: "error" });
    } else if (err) {
      console.log(err);
      res.json({ status: 500, message: "error" });
    } else {
      console.log("upload router....");
      const data = req.body;
      console.log("title", data.title);
      for (const file of req.files) {
        console.log("file upload", file.filename);
      }
      // 성공한 경우 유저에게 넘기는 데이터
      res.json({ status: 200, message: "upload OK" });
    }
  });
});

module.exports = router;
