const initialState = {
    registeredUsers : [
        {id : null ,name : '' , email : '' , password : '' , number : null }
    ]
}

const rootReducer = (state=initialState , action) =>{
    if(action.type === 'ADD_USER'){
        action.user.id = state.registeredUsers.length;
        let newArr = [...state.registeredUsers];
        newArr.push(action.user);
        

        return{
            ...state,
            registeredUsers : newArr
        }
        
    }
    
    return state;
}

export default rootReducer;