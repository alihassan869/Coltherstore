const Intial_state={
  CARTS:[],
  Search:''
}
export const cartreducer=(state=Intial_state,action)=>{
  switch (action.type) {
    case 'ADD_CART':

      const indexitem=state.CARTS.findIndex((item)=>{
        return item.id===action.payload.id && item.size===action.payload.size
      })
      if(indexitem >= 0 ){
        // console.log('new is:',indexitem)
        state.CARTS[indexitem].qnty +=1
        return {
          ...state,
          CARTS:[...state.CARTS]
        }
      }else{
        const temp={...action.payload,qnty:1}
        return {
          ...state,
          CARTS:[...state.CARTS,temp]
        }
      }
      return {
        ...state,
        CARTS:[...state.CARTS,action.payload]
      }
  case 'DLT_CART':
    console.log(action.payload)
    const Items=state.CARTS.filter((item)=>item.id !== action.payload.id || item.size !==action.payload.size)
    return {
      ...state,
      CARTS:Items
    }
    case 'DLTONE_CART':
      const find_index=state.CARTS.findIndex((item)=>{
        return item.id === action.payload.id && item.size ===action.payload.size
      })
      if(state.CARTS[find_index].qnty > 1 ){
        state.CARTS[find_index].qnty -= 1
        return {
          ...state,
          CARTS: [...state.CARTS],
        }
      }else if (state.CARTS[find_index].qnty === 1) {
        const data = state.CARTS.filter((el) =>el.id !== action.payload.id || el.size !==action.payload.size );
        return {
          ...state,
          CARTS: data,
        }
      }
      case 'Search_item':
        return {
          ...state,
          Search: action.payload,
        };
    default:
      return state
  }


}