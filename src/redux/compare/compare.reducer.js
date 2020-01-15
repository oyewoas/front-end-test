import { comparisonActionTypes } from "./compare.types"


const INITIAL_STATE = {
    currentComparison: null
}

const comparisonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case comparisonActionTypes.COMPARE_SUBMISSIONS:
            return {
                ...state,
                currentComparison: action.payload
            }
        default:
            return state
    }
}

export default comparisonReducer