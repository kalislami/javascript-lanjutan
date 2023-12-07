function processOrderList(orderList, orderId, state) {
    console.log(orderList);
}

processOrderList([
    { id:1, state: 'processing'},
    { id:2, state: 'delivered'},
    { id:3, state: 'processing'},
], 1, 'processing')