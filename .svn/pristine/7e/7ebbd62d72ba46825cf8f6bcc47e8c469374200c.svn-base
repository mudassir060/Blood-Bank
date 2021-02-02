const INITIAL_STATE = {
    counter : 0,
    users: [],
    create_user: {"id": "",
     "name": "سلطنت عثمانی",
       "type": "SETUSER"},
       BR_Data:"",
       DR_Data:"",

}
export const reducer = (state = INITIAL_STATE, action)=>{
    console.log("action===>",action)
    switch(action.type){
        case"SETUSER":
        return ({
            ...state,
            user:action.payload
        })  
        case"SETFIERBASEUASERS":
        return ({
            ...state,
            users:action.payload
        })  
        case"BR_SET_DATA":
        return ({
            ...state,
            BR_Data:action.payload
        }) 
        case"DR_SET_DATA":
        return ({
            ...state,
            DR_Data:action.payload
        }) 
        case"INCREMENT":
        return ({
           counter:state.counter+1
        }) 
        default:
            return state;      
    }
   
}
// export default reducer;
// // export default (State = 0, action) => {
//     //     switch (action.type) {
//     //         case 'INCREMENT':
//     //             return State + 1;
//     //         case 'INCREMENT':
//     //             return State - 1;
//     //         default:
//     //             return State
//     //     }
//     // }