let express = require('express');

let app = express();        

app.get("/sample/user/:uname/pwd/:upwd", (req, res) => {
  const { uname, upwd } = req.params;

  if (uname === "admin" && upwd === "12345") {
    res.json({ login: "successful" });
  } else {
    res.json({ login: "failed" });
  }
});


app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});