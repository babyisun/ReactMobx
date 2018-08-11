/**
 * 格式化价格
 * @param {number} price 以分为单位的价格
 * @param {string|boolean} unit 是否带单位 例子：formatPrice(1002,true) 返回 ¥10.02
 * @return {string} 以元为单位的价格
 */
const formatPrice = (price, unit) => {
  if (typeof unit === 'string') { return (price / 100).toFixed(2) + unit; }
  if (typeof unit === 'boolean' && unit) {
    return `¥${(price / 100).toFixed(2)}`;
  }
  return (price / 100).toFixed(2);
};

export default formatPrice;
