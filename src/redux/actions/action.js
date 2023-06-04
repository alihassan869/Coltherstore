export const  ADD=(item)=>{
return{
  type:'ADD_CART',
  payload:item,
}
}
// Delete items
export const  DLT=(item)=>{
  // console.log("id is",id)
  return{
    type:'DLT_CART',
    payload:item,
  }
  }
  // Deleteone items
export const  DLTONE=(item)=>{
  // console.log("item is",id)
  return{
    type:'DLTONE_CART',
    payload:item,
  }
  }
    // Search 
export const  Search=(item)=>{
  // console.log(item);
  return {
    type: 'Search_item',
    payload: item,
  };
  }