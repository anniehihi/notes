const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");
const { isLoggedIn } = require("../middlewares/authMiddleware");

router.route("/dashboard").get(isLoggedIn, dashboardController.dashboard);
router
  .route("/dashboard/add")
  .get(isLoggedIn, dashboardController.dashboardAddNote)
  .post(isLoggedIn, dashboardController.dashboardAddNoteSubmit);

router
  .route("/dashboard/item/:id")
  .get(isLoggedIn, dashboardController.dashboardViewNote)
  .put(isLoggedIn, dashboardController.dashboardUpdateNote);

router.post(
  "/dashboard/search",
  isLoggedIn,
  dashboardController.dashboardSearchSubmit
);

router.delete(
  "/dashboard/item-delete/:id",
  isLoggedIn,
  dashboardController.dashboardDeleteNote
);
module.exports = router;
