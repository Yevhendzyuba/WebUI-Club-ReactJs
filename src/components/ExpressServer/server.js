const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.json([
        {
            "id": 1,
            "img": "https://www.goalinn.com/f/13735/137352574_2/adidas-uniforia-competition-uefa-euro-2020-%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB.jpg",
            "title": "Football Ball",
            "price": "80$",
            "country": "USA"
        },
        {
            "id": 2,
            "img": "https://www.barbariansfightwear.com/2692-large_default/leone-1947-boxing-gloves-blue-edition.jpg",
            "title": "Boxing Gloves",
            "price": "110$",
            "country": "Ukraine"
        },
        {
            "id": 3,
            "img": "https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvMGUxM2VjYWMtNTZiOC00ZDFhLWFjMDYtZDY4OGIxYjI4OWQwXzEuNmQ3OGNhMWIzMWJmNzJkYjRkYmUzMzg2Y2E4MzBjOWEuanBlZw.jpg",
            "title": "Tennis Rocket",
            "price": "200$",
            "country": "France"
        },
        {
            "id": 4,
            "img": "https://content2.rozetka.com.ua/goods/images/big/126871197.jpg",
            "title": "Basket Hoop",
            "price": "1200$",
            "country": "United Kingdom"
        }
    ]);
});

app.listen(8080, function (req, res) {
    console.log("Server is running at port 8080");
});
