

export const CartReducer = (state,action) => {
    const{type,payload}=action;
    switch(type){
        case "ADD":
            return {...state,cartList:payload.product,total:payload.total}
        case "REMOVE":
            return {...state,cartList:payload.product,total:payload.total}
        case "CLEAR":
            return {...state,cartList:payload.products,total:payload.total}
      
       default: return state;
    }
 
}
