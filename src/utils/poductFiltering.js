
export function filteringByCateogory(products,
   categoryId) {
   return products.filter(
      product => product.categoryId === categoryId
   );
}

export function filtersearch(products, search) {
   if(!search) return products;
      return products.filter(product =>
      product.name.toLowerCase()
         .includes(search.toLowerCase())
   );


}


export function removeDelete( array,id){
   return array.filter(x => x.id !== id);
}