
const initialValues=[]

const studentsReducers=(state=initialValues,action)=>{
    switch(action.type){
        case 'SET_STUDENTS':{
            return {...action.payload}
        }
        default:{
            return[...state]
        }
    }
}

export default studentsReducers