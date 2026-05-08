const express = require("express");
const app = express();
const1 PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Running entirely inside Docker!",
    environment: process.env.NODE_ENV || "development",
  });
});

// 新增的路由
app.get("/info", (req, res) => {
  res.json({
    version: "1.1.0",
    description: "This is a feature branch test.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
