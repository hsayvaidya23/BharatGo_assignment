export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price * product.count, 0);
};