# Stateful Cart Application (Docker)

Bu proje, **stateful API** kavramını göstermek amacıyla geliştirilmiştir.
Kullanıcıya ait sepet bilgisi sunucu tarafında **session** ile tutulmaktadır.

## 🚀 Özellikler
- Stateful API (express-session)
- API key gerektirmez
- Docker ile çalışır
- Kullanıcıdan ürün adı alır
- Sayfa yenilense bile sepet korunur

## 🧠 Stateful Nedir?
Bu uygulama **stateful**’dır çünkü:
- Kullanıcıya ait sepet bilgisi server-side session’da tutulur
- Her istek önceki durumdan bağımsız değildir

## 🛠️ Kullanılan Teknolojiler
- Node.js
- Express
- express-session
- HTML / CSS
- Docker

## ▶️ Çalıştırma (Docker)
```bash
docker build -t stateful-cart-app .
docker run -d -p 5000:3000 stateful-cart-app
