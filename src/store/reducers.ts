import { GET_CASE_STATUS } from './actions';
import { CaseStatusState, CaseStatusAction } from "./types";

const initialState: CaseStatusState = {
    caseStatus: []
};

export const caseStatusReducer = (
    state: CaseStatusState = initialState,
    action: CaseStatusAction
): CaseStatusState => {
    switch (action.type) {
        case GET_CASE_STATUS:
            let newState = {
                caseStatus: [
                    // TODO - map by receipt number
                    ...state.caseStatus.filter(value => value.receiptNumber !== action.caseStatus.receiptNumber),
                    { ...action.caseStatus }
                ]
            };
            return newState;
        default:
            return state;
    }
};
