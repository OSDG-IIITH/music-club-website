const initialState = {
    access_token : null
}

const rootReducer = (state=initialState , action) =>{
    if(action.type === 'ADD_TOKEN'){
        console.log('yes will add token now')        
        return{
            ...state,
            access_token : action.access_token
        }
        
    }
    
    return state;
}

export default rootReducer;