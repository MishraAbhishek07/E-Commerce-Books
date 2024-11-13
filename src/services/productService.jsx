export async function getProductList(searchTerm) {
    const response = await fetch(`${import.meta.env.VITE_REACT_HOST}/444/products?name_like=${searchTerm ? searchTerm : ""}`);
    if(!response.ok){
        throw {message:response.statusText,status:response.status};//eslint-disable-Line
    }
    const data = await response.json();
    // setProducts(data);
    return data
    
}
export async function getProductDetail(id) {
    const response=await fetch(`${import.meta.env.VITE_REACT_HOST}/444/products/${id}`)
    if(!response.ok){
        throw {message:response.statusText,status:response.status};//eslint-disable-Line
    }
    const data = await response.json();
    // setProducts(data);
    return data
    
    
}
export async function getFeaturedProduct() {
    const response=await fetch(`${import.meta.env.VITE_REACT_HOST}/444/featured_products`)
    if(!response.ok){
        throw {message:response.statusText,status:response.status};//eslint-disable-Line
    }
    const data = await response.json();
    // setProducts(data);
    return data
    
    
}