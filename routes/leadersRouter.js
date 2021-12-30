const express = require("express");
const bodyParser = require("body-parser");
const Mongoose = require("mongoose");
const leader = require("../Models/leaders");
var leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")

  .get((req, res, next) => {
    leader
      .find({})
      .then(
        (leader) => {
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 200;
          res.json(leader);
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
    leader
      .create(req.body)
      .then(
        (leader) => {
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 200;
          res.json(leader);
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
    leader
      .remove({})
      .then(
        (leader) => {
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 200;
          res.json(leader);
        },
        (err) => {
          next(err);
        }
      )
      .catch((err) => next(err));
  });

leaderRouter
  .route("/:ID")
  .get((req, res, next) => {
    leader
      .findById(req.params.ID)
      .then(
        (leader) => {
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 200;
          res.json(leader);
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
    leader
      .findByIdAndUpdate(req.params.ID, { $set: req.body }, { new: true })
      .then(
        (leader) => {
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 200;
          res.json(leader);
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
    leader
      .findByIdAndRemove(req.params.ID)
      .then(
        (leader) => {
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 200;
          res.json(leader);
        },
        (err) => {
          next(err);
        }
      )
      .catch((err) => next(err));
  });

module.exports = leaderRouter;
