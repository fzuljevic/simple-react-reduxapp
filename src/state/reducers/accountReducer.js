const reducer = (state = 0, action) =>{
    switch(action.type){
        case 'increase':
            return state + action.payload;
        case 'decrease':
            return state - action.payload
        default:
            return state;
    }
}

export default reducer;