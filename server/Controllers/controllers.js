
const Order = require('../Model/Order');
// const UserModelProduct = require('../Model/Products');
exports.Order = async (req, res) => {
  // const data=await req.body;
  // console.log(data);
  let product = new Order(req.body);
  await product.save((err) => {
    if (!err) {
      res.send({ message: 'Order successfuly submitted' });
    } else {
      console.log(err);
    }
  });
};

