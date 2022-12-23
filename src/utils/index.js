export  const getAfterDiscountPrice = (price, discount) => {
    const newPrice1 = price / 100;
    const newPrice2 = newPrice1 * discount;
    const newPrice3 = price - newPrice2;
    return newPrice3.toFixed(2)
    // (price - ((price / 100) * discount)).toFixed(2)
  }

  export const getAvailability = (availability) => {
    if(availability){
      if(availability > 10 ) return 'available'
      else return `only ${availability} remained in stock`
    }else return 'out of stock'
  }