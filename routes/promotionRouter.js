const express = require("express");
const bodyParser = require("body-parser");
const Mongoose = require("mongoose");
const Promo = require("../Models/promotion");
var promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter
  .route("/")

  .get((req, res, next) => {
    Promo.find({})
      .then(
        (Promos) => {
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 200;
          res.json(Promos);
        },
        (err) => {
          next(err);
        }
      )
      .catch((err) => {
        next(err);
      });
  })
  .post((req, res, next) => {
    Promo.create(req.body)
      .then(
        (Promo) => {
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 200;
          res.json(Promo);
        },
        (err) => {
          next(err);
        }
      )
      .catch((err) => next(err));
  })
  .put((req, res, next) => {
    res.end(`Not supoorted `);
  })
  .delete((req, res, next) => {
    Promo.remove({})
      .then(
        (Promo) => {
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 200;
          res.json(Promo);
        },
        (err) => {
          next(err);
        }
      )
      .catch((err) => next(err));
  });

promoRouter
  .route("/:ID")

  .get((req, res, next) => {
    Promo.findById(req.params.ID)
      .then(
        (Promos) => {
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 200;
          res.json(Promos);
        },
        (err) => {
          next(err);
        }
      )
      .catch((err) => {
        next(err);
      });
  })
  .post((req, res, next) => {
    res.end("post request is not Supported yet , Sorry ! ");
  })
  .put((req, res, next) => {
    Promo.findByIdAndUpdate(req.params.ID, { $set: req.body }, { new: true })
      .then(
        (Promo) => {
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 200;
          res.json(Promo);
        },
        (err) => {
          next(err);
        }
      )
      .catch((err) => {
        next(err);
      });
  })
  .delete((req, res) => {
    Promo.findByIdAndRemove(req.params.ID)
      .then(
        (Promo) => {
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 200;
          res.json(Promo);
        },
        (err) => {
          next(err);
        }
      )
      .catch((err) => next(err));
  });

module.exports = promoRouter;
