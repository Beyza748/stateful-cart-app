const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// 🔴 SADECE public KLASÖRÜ SERVİS EDİLECEK
app.use(express.static(path.join(__dirname, "public")));

app.post("/add", (req, res) => {
  const { product } = req.body;
  if (!req.session.cart) req.session.cart = [];
  req.session.cart.push(product);
  res.json(req.session.cart);
});

app.get("/cart", (req, res) => {
  res.json(req.session.cart || []);
});

app.post("/clear", (req, res) => {
  req.session.cart = [];
  res.json([]);
});

app.listen(3000, () => {
  console.log("Server 3000 portunda çalışıyor");
});

