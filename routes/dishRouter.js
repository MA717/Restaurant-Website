const express = require("express");
const bodyParser = require("body-parser");
const dishRouter = express.Router();
const Mongoose = require("mongoose");
const Dishes = require("../Models/dishes");

dishRouter.use(bodyParser.json());

dishRouter
  .route("/")

  .get((req, res, next) => {
    Dishes.find({})
      .then(
        (dishes) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(dishes);
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
    Dishes.create(req.body)
      .then(
        (dish) => {
          console.log("Dish created Successfully !", dish);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(dishes);
        },
        (err) => {
          next(err);
        }
      )
      .catch((err) => {
        next(err);
      });
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(`Not supported `);
  })
  .delete((req, res, next) => {
    Dishes.remove({})
      .then(
        (resp) => {
          console.log("Dishes deleted Successfully !");
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(resp);
        },
        (err) => {
          next(err);
        }
      )
      .catch((err) => {
        next(err);
      });
  });

dishRouter
  .route("/:ID")

  .get((req, res, next) => {
    Dishes.findById(req.params.ID)
      .then(
        (dish) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(dish);
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
    Dishes.findByIdAndUpdate(req.params.ID, { $set: req.body }, { new: true })
      .then(
        (dish) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(dish);
        },
        (err) => {
          next(err);
        }
      )
      .catch((err) => next(err));
  })
  .delete((req, res) => {
    Dishes.findByIdAndRemove(req.params.ID)
      .then(
        (resp) => {
          console.log("Dishes deleted Successfully !");
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(resp);
        },
        (err) => {
          next(err);
        }
      )
      .catch((err) => {
        next(err);
      });
  });

module.exports = dishRouter;
