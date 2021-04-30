const router = require("express").Router();
const rentalSchema = require("../models/rental");

router.route("/rental-data").get((req, res) => {
  const pageOptions = {
    page: parseInt(req.query.page, 10) || 0,
    limit: parseInt(req.query.limit, 10) || 15,
  };

  rentalSchema
    .find()
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .exec(function (err, doc) {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.status(200).json(doc);
    });
});

router.route("/rental-data/:id").get((req, res) => {
  rentalSchema
    .findById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
});

router.route("/rental-data/create").post((req, res) => {
  const newProduct = new rentalSchema({
    Product: req.body["Product"],
    "ME#": req.body["ME#"],
    Model: req.body["Model"],
    "Serial Number": req.body["Serial Number"],
    "Last Service": Number(req.body["Last Service"]),
    SMU: Number(req.body["SMU"]),
    "Next Service": Number(req.body["Next Service"]),
    MIS: req.body["MIS"],
    Location: req.body["Location"],
    Conectivity: req.body["Conectivity"],
    Status: req.body.Status,
    COMMENTS: req.body["COMMENTS"],
  });

  newProduct
    .save()
    .then(() => res.json("Product Created Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/rental-data/update/:id").post((req, res) => {
  rentalSchema
    .findById(req.params.id)
    .then((product) => {
      product["Product"] = req.body["Product"];
      product["ME#"] = req.body["ME#"];
      product["Model"] = req.body["Model"];
      product["Serial Number"] = req.body["Serial Number"];
      product["Last Service"] = Number(req.body["Last Service"]);
      product["SMU"] = Number(req.body["SMU"]);
      product["Next Service"] = Number(req.body["Next Service"]);
      product["MIS"] = req.body["MIS"];
      product["Location"] = req.body["Location"];
      product["Conectivity"] = req.body["Conectivity"];
      product["Status"] = req.body.Status;
      product["COMMENTS"] = req.body["COMMENTS"];

      product
        .save()
        .then(() => res.json("Product Updated Successfully"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/rental-data/delete/:id").delete((req, res) => {
  rentalSchema
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("Product deleted Successfully!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
