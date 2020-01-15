import { comparisonActionTypes } from "./compare.types"



export const compareSubmissions = data => ({
    type: comparisonActionTypes.COMPARE_SUBMISSIONS,
    payload: data

})

