const eventLimiter = require('events')
const stokList = require('./stok-list.json')

class orderProcessor extends eventLimiter {
    constructor() {
        super()
        this.stok = stokList
    }
    
    placeOrder(payload) {
        this.emit('PROCESSING_STARTED', payload.orderNumber)
        const items = payload.lineItems
        if (items && items.length > 0) {
            let pass = true
            let failedData = {}
            let i = 0

            while (pass && i < items.length) {
                const {itemId, quantity} = items[i]
                const stok = this.stok.filter(i => i.id == itemId && i.stock >= quantity)
                if (stok.length == 0) {
                    pass = false
                    failedData = {
                        orderNumber: payload.orderNumber,
                        reason: 'INSUFFIENT_STOCK',
                        itemId: itemId
                    }
                    break;
                }
                i++
            }

            if (pass) {
                this.emit('PROCESSING_SUCCESS', payload.orderNumber)   
            }
            else {
                this.emit('PROCESSING_FAILED', failedData)
            }
        } else {
            this.emit('PROCESSING_FAILED', {
                orderNumber: payload.orderNumber,
                reason: 'LINEITEMS_EMPTY'
            })
        }
    }
}

module.exports = orderProcessor