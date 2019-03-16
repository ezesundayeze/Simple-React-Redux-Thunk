const getSoupDataFromAPIAsync=(products)=>{

   return {type:"get_products", payload:products}

}

export const loading = ()=>{
    return {type:"isLoading", payload:true}
}


export const getSoupDataFromAPI=()=>{
    return (dispatch)=>{
        dispatch(loading())
        fetch("http://shopsoup.herokuapp.com/api/v1/product")
        .then((data)=>{
            return data.json()
        }).then((products)=>{
            dispatch(getSoupDataFromAPIAsync(products))
        })

     
    }
  
}