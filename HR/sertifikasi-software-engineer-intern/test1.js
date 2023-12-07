/*
 * Complete the 'priceCheck' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY products
 *  2. FLOAT_ARRAY productPrices
 *  3. STRING_ARRAY productSold
 *  4. FLOAT_ARRAY soldPrice
 */

function priceCheck(products, productPrices, productSold, soldPrice) {
    let err = 0

    for (let i = 0; i < products.length; i++) {
        
        for (let iSold = 0; iSold < productSold.length; iSold++) {
            if (products[i] === productSold[iSold] && productPrices[i] !== soldPrice[iSold]) {
                err += 1
            }
        }
    }

    console.log(err);
}

const products = ['eggs', 'milk', 'cheese']
const productPrice = [2.89, 3.29, 5.79]
const productSold = ['eggs', 'eggs', 'cheese', 'milk']
const soldPrice = [2.89, 2.99, 5.97, 3.29]

priceCheck(products, productPrice, productSold, soldPrice)