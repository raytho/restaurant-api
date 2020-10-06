const express = require("express");
const passport = require("passport");
const MenuItemsService = require("../services/menu-items");

const validationHandler = require("../utils/middleware/validationHandler");
const scopesValidationHandler = require("../utils/middleware/scopesValidationHandler");

const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS,
} = require("../utils/time");

function menuApi(app) {
  const router = express.Router();
  app.use("/api/menu", router);

  const menuItemService = new MenuItemsService();

  router.get("/", async function(req, res, next) {
    const { tags } = req.query;

    try {
      const menuItems = await menuItemService.getOptions({ tags });

      res.status(200).json({
        data: menuItems,
        message: "menu listed",
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:itemId", async function(req, res, next) {
    const { itemId } = req.params;

    try {
      const menuOptions = await menuItemService.getOption({ itemId });

      res.status(200).json({
        data: menuOptions,
        message: "option retrieved",
      });
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async function(req, res, next) {
    const { body: option } = req;
    try {
      const createdOptionId = await menuItemService.createOption({ option });

      res.status(201).json({
        data: createdOptionId,
        message: "option created",
      });
    } catch (err) {
      next(err);
    }
  });

  router.put("/:itemId", async function(req, res, next) {
    const { itemId } = req.params;
    const { body: option } = req;

    try {
      const updatedOptionId = await menuItemService.updateOption({
        itemId,
        option,
      });

      res.status(200).json({
        data: updatedOptionId,
        message: "option updated",
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:itemId", async function(req, res, next) {
    const { itemId } = req.params;

    try {
      const deletedOptionId = await menuItemService.deleteOption({ itemId });

      res.status(200).json({
        data: deletedOptionId,
        message: "option deleted",
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = menuApi;
