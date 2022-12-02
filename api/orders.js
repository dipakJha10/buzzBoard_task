const router = require("express").Router();
const models = require("../models/models");
const httpStatus = require("http-status");
const constants = require("../utilities/constants");
const orderModel = models.orders;

// create order

router.post("/orders/create", async (req, res) => {
  try {
    let newOrder = new orderModel(req.body);
    const order = await newOrder.save();
    res.status(200).json({
      status: httpStatus.OK,
      message: constants.constants.SUCCCESS_MSG,
      data: order,
    });
  } catch (exception) {
    console.log(exception);
    res.status(500).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: constants.constants.FAILURE_MSG,
      data: "order can't be posted",
      exception: exception,
    });
  }
});

// update order

router.get("/orders/update", async (req, res) => {
  try {
    const order = await orderModel.findOneAndUpdate(
      {
        order_Id: req.body.order_Id,
      },
      req.body,
      {
        new: true,
        upsert: true,
        rawResult: true,
      }
    );
    res.status(200).json({
      status: httpStatus.OK,
      message: constants.constants.SUCCCESS_MSG,
      data: order.value,
    });
  } catch (exception) {
    console.log(exception);
    res.status(500).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: constants.constants.FAILURE_MSG,
    });
  }
});

// view specific order

router.get("/orders/search", async (req, res) => {
  try {
    let orders;
    if (req.query.order_Id) {
      orders = await orderModel.find({
        order_Id: req.query.order_Id,
      });
    } else {
      let offset;
      let limit;
      if (req.query.pageNo && req.query.perPage) {
        req.query.perPage = parseInt(req.query.perPage);
        req.query.pageNo = parseInt(req.query.pageNo);
        offset = req.query.perPage * (req.query.pageNo - 1);
        limit = req.query.perPage;
      } else {
        offset = 0;
        limit = 20;
      }
      orders = await orderModel.find({}).skip(offset).limit(limit);
    }
    res.status(200).json({
      status: httpStatus.OK,
      message: constants.constants.SUCCCESS_MSG,
      data: orders,
      count: orders.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: constants.constants.FAILURE_MSG,
      data: null,
    });
  }
});

// list all orders in given
router.get("/orders/list", async (req, res) => {
  try {
    let orders;
    if (req.query.order_date) {
      orders = await orderModel.find({
        order_date: req.query.order_date,
      });
    } else {
      let offset;
      let limit;
      if (req.query.pageNo && req.query.perPage) {
        req.query.perPage = parseInt(req.query.perPage);
        req.query.pageNo = parseInt(req.query.pageNo);
        offset = req.query.perPage * (req.query.pageNo - 1);
        limit = req.query.perPage;
      } else {
        offset = 0;
        limit = 20;
      }
      orders = await orderModel.find({}).skip(offset).limit(limit);
    }
    res.status(200).json({
      status: httpStatus.OK,
      message: constants.constants.SUCCCESS_MSG,
      data: orders,
      count: orders.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: constants.constants.FAILURE_MSG,
      data: null,
    });
  }
});
// delete orders
router.delete("/orders/delete", async (req, res) => {
  try {
    const delOrders = await orderModel.findOneAndDelete({
      order_Id: req.body.order_Id,
    });
    res.status(200).json({
      status: httpStatus.OK,
      message: constants.constants.SUCCCESS_MSG,
      msg: "order has been deleted",
    });
  } catch (exception) {
    res.status(500).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: constants.constants.FAILURE_MSG,
      data: null,
    });
  }
});

module.exports = router;
