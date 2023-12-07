var recipes = require('./recipes.json');

const getRecipe = async (req, res, next) => {
    try {
        const id = req.params.id
        const elapsedTime = req.query.elapsedTime || 0;

        if (isNaN(id)) {
            res.status(400).send('NOT_FOUND')
        }
    
        const filterRecipes = recipes.filter(recipe => recipe.id == id)[0]

        if (filterRecipes) {
            const {timers} = filterRecipes
            const index = timers.indexOf(parseInt(elapsedTime))

            if (index < 0) {
              res.status(400).send('NOT_FOUND')    
            }

            res.status(200).json({index})
        }
        else {
          res.status(400).send('NOT_FOUND')
        }

        // res.status(200).json({
        //   elapsedTime: elapsedTime,
        //   id: id
        // })
    
      } catch (error) {
        next(error)
      }
}

module.exports = getRecipe

