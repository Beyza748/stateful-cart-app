const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// SESSION (STATEFUL)
app.use(
  session({
    secret: "stateful-secret",
    resave: false,
    saveUninitialized: true
  })
);

// Static dosyalar
app.use(express.static("public"));

// Ürün ekle
app.post("/add", (req, res) => {
  const { product } = req.body;

  if (!req.session.cart) {
    req.session.cart = [];
  }

  req.session.cart.push(product);
  res.json(req.session.cart);
});

// Sepeti getir
app.get("/cart", (req, res) => {
  res.json(req.session.cart || []);
});

// Sepeti temizle
app.post("/clear", (req, res) => {
  req.session.cart = [];
  res.json({ message: "Sepet temizlendi" });
});

app.listen(3000, () => {
  console.log("Server 3000 portunda çalışıyor");
});

