const express = require("express");
const { Router, response } = require("express");
const Product = require("../db/models/product");
const Category = require("../db/models/category");
const Promotion = require("../db/models/promotion");

const router = Router();

router.use(express.json());

router.get("/products", async (req, res) => {
  res.send(await Product.find({}));
});

router.get("/get-category", (req, res) => {
  const data = {
    id: req.query.id,
  };

  console.log(data.id);

  Category.findById(data.id, (error, category) => {
    if (error) {
      //        console.log(error);
    }
    res.send(category);
  });
});

router.post("/add-category", (req, res) => {
  const data = {
    name: req.body.name,
    subcategories: [],
    products: [],
  };

  const category = new Category(data);
  console.log("sending category");

  category
    .save()
    .then(() => {
      res.send(category);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/add-promotion", (req, res) => {
  const data = {
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    avaible: req.body.avaible,
    productId: req.body.productId,
  };

  const promotion = new Promotion(data);

  console.log("Sending Promotion");

  promotion
    .save()
    .then(() => {
      res.send(promotion);
    })
    .catch((error) => {
      console.log(error);

      res.status(400).send(status);
    });
});

router.post("/upload-product", (req, res) => {
  const data = {
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    author: req.body.author,
    type: req.body.type,
    mimeType: req.file.mimetype,
    fileName: req.file.filename,
    price: req.body.price,
    qualification: [],
  };

  const product = new Product(data);

  product
    .save()
    .then(() => {
      res.send(product);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

module.exports = router;
