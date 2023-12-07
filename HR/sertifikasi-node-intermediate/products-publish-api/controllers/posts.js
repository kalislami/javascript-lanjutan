const PostsModel = require('../models/posts');

class PostsController {
  async create(req, res) {
    try {
        const {body} = req
        const data = await PostsModel.findAll({
          attributes: ['id']
        })
        body.id = data.length + 1

        if (body.isPublished === true) {
          body.publishedDate = Date.now()
        }

        const response = await ProductModel.create(body)
        res.status(201).json(response)

    } catch (error) {
        throw new Error(error.message)
    }
  }

  async getAll(req, res) {
    try {
      const {author, isPublished} = req.query
      // console.log('author: ' + author);
      // console.log('isPublished: ' + isPublished);
      // console.log(typeof isPublished);
      let data

      if (author && !isPublished) {
        data = await PostsModel.findAll({where: {author}})
      }

      if (!author && isPublished) {
        data = await PostsModel.findAll({where: {isPublished: (isPublished.toLowerCase() === 'true')}})
      }

      if (author && isPublished) {
        data = await PostsModel.findAll({
          where: {isPublished: (isPublished.toLowerCase() === 'true'), author: author}
        })
      }

      if (!author && !isPublished) {
        data = await PostsModel.findAll({})
      }
        res.status(200).json(data)

    } catch (error) {
        throw new Error(error.message)
    }
  }

  async getById(req, res) {
    try {
        const {id} = req.params
        const data = await PostsModel.findOne({where: {id}})

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.status(404).send("ID not found")
        }

    } catch (error) {
        throw new Error(error.message)
    }
  }

  async update(req, res) {
    res.status(405).send()
  }
}

module.exports = new PostsController()