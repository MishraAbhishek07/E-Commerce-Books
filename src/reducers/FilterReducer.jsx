

export const FilterReducer = (state,action) => {
    const{type,payload}=action;
    switch(type){
        case "PRODUCT_LIST":
            return {productList:payload.products}
        case "SORT_BY":
            return {...state,sortBy:payload.sortBy}
        case "RATINGS":
            return {...state,rating:payload.rating}
        case "BEST_SELLER_ONLY":
            return {...state,bestSellerOnly:payload.bestSellerOnly}
        case "ONLY_IN_STOCK":
            return {...state,inStockOnly:payload.inStockOnly}
        case "CLEAR_FILTER":
            return {...state,  bestSellerOnly:false,
                inStockOnly:false,
                sortBy:null,
                rating:null}
       default: return state;
    }
 
}
