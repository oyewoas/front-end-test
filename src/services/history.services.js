import Axios from 'axios'

export const getHistory = async (actionFunction) => {
    try {
        const response = await Axios.get(`https://2086c28b-a507-42a2-a4fc-e0b3551acb24.mock.pstmn.io/api/v1/history`)
        actionFunction(response)
    } catch (error) {
        console.error(error)
    }
}


