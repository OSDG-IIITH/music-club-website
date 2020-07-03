export  const addToken = (token) =>{
    return{
        type:'ADD_TOKEN',
        access_token : token
    }
}