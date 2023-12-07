const ProductModel = require('../models/products');

class ProductController {
  async createProduct(req, res) {
      try {
          const {body} = req
          const data = await ProductModel.findAll()
          body.id = data.length + 1
          body.isPublished = false

          const response = await ProductModel.create(body)
          res.status(201).json(response)
          resolves()

      } catch (error) {
          throw new Error(error.message)
      }
  }
  
  async getAllProducts(_, res) {
      try {
          const data = await ProductModel.findAll({
            order: [['id', 'ASC']]
          })
          res.status(200).json(data)
          resolves()

      } catch (error) {
          throw new Error(error.message)
      }
  }

  async patchProductById(req, res) {
      try {
          const {id} = req.params
          const data = await ProductModel.findOne({where: {id}})
          
          if (!data) {
            res.status(404).send("ID Not Found")
          }
          const {price, mrp, stock} = data
          
          if (mrp > price && stock === 0) {
              res.status(422).send([
                "MRP should be less than equal to the Price",
                "Stock count is 0"
              ])
            } else if (mrp > price) {
              res.status(422).send(["MRP should be less than equal to the Price"])
            } else if (stock === 0) {
              res.status(422).send(["Stock count is 0"])
          } else {
              await ProductModel.update({isPublished: true}, {where: {id}})
              res.status(204).send()
          }

      } catch (error) {
          throw new Error(error.message)
      }
  }

  async blockAccess(_, res) {
    res.status(405).send()
  }
}

module.exports = new ProductController()

// async function createProduct (req, res) {
//     try {
//         const {body} = req
//         const data = await ProductModel.findAll()
//         body.id = data.length + 1
//         body.isPublished = false

//         const response = await ProductModel.create(body)
//         res.status(201).json(response)
//         resolves()

//     } catch (error) {
//         throw new Error(error.message)
//     }
// }

// async function getAllProducts(_, res) {
//     try {
//         const data = await ProductModel.findAll({
//           order: [['id', 'ASC']]
//         })
//         res.status(200).json(data)
//         resolves()

//     } catch (error) {
//         throw new Error(error.message)
//     }
// }

// async function patchProductById(req, res) {
//     try {
//         const {id} = req.params
//         const data = await ProductModel.findOne({where: {id}})
        
//         if (!data) {
//           res.status(404).send("ID Not Found")
//         }
//         const {price, mrp, stock} = data
        
//         if (mrp > price && stock === 0) {
//             res.status(422).send([
//               "MRP should be less than equal to the Price",
//               "Stock count is 0"
//             ])
//           } else if (mrp > price) {
//             res.status(422).send(["MRP should be less than equal to the Price"])
//           } else if (stock === 0) {
//             res.status(422).send(["Stock count is 0"])
//         } else {
//             await ProductModel.update({isPublished: true}, {where: {id}})
//             res.status(204).send
//             resolves()
//         }

//     } catch (error) {
//         throw new Error(error.message)
//     }
// }

// async function blockAccess(_, res) {
//   res.status(405).send()
// }


// export default {
//     createProduct,
//     getAllProducts,
//     patchProductById,
//     blockAccess
// }

exports.createProduct
exports.getAllProducts
exports.patchProductById
exports.blockAccess