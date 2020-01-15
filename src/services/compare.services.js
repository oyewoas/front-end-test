import Axios from 'axios'

export const compareSubmissionsResult = async (actionFunction, history) => {
    try {
        const response = await Axios.post(`https://2086c28b-a507-42a2-a4fc-e0b3551acb24.mock.pstmn.io/api/v1/compare`)
        actionFunction(response)
        if (response) {
            history.push('/submissions-result')
        }
    } catch (error) {
        console.error(error)
    }
}
