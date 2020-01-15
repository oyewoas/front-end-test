import Axios from 'axios'

export const userLogin = async (actionFunction) => {
    try {
        const response = await Axios.post(`https://2086c28b-a507-42a2-a4fc-e0b3551acb24.mock.pstmn.io/api/v1/login`)
        actionFunction(response)
    } catch (error) {
        console.error(error)
    }
}

export const userLogOut = async (actionFunction, history) => {
    try {
        const response = await Axios.post(`https://2086c28b-a507-42a2-a4fc-e0b3551acb24.mock.pstmn.io/api/v1/logout`)
        actionFunction()
        if(response.status){
            history.push('/')
        }
    } catch (error) {
        console.error(error)
    }
}