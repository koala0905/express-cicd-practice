import express from "express";
const app = express();

//測試錯誤, 把const故意寫成const1
const PORT = 3000;

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
    version: "1.2.0",
    description: "This is a feature branch test. (updated)",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
