// 🔴 KANIT LOG (BU DOSYANIN ÇALIŞTIĞINI GÖSTERİR)
console.log("🚨 BU SERVER BENİM GÜNCELLEDİĞİM server.js 🚨");

const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session (STATEFUL)
app.use(
  session({
    secret: "super-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// 🔴 SADECE public KLASÖRÜ SERVİS EDİLECEK
app.use(express.static(path.join(__dirname, "public")));

// ---------------- API ----------------

// ürünü sepete ekle
app.post("/add", (req, res) => {
  const { product } = req.body;

  if (!req.session.cart) {
    req.session.cart = [];
  }

  if (product && product.trim() !== "") {
    req.session.cart.push(product);
  }

  res.json(req.session.cart);
});

// sepeti getir
app.get("/cart", (req, res) => {
  res.json(req.session.cart || []);
});

// sepeti temizle
app.post("/clear", (req, res) => {
  req.session.cart = [];
  res.json([]);
});

// ---------------- SERVER ----------------

app.listen(3000, () => {
  console.log("🚨 SERVER 3000 PORTUNDA ÇALIŞIYOR 🚨");
});
