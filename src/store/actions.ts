import * as api from '../api/case-status-api';
import { DispatchType } from "./types";

export const GET_CASE_STATUS = "GET_CASE_STATUS";

export function getCaseStatus(receiptNumber: string) {
    return (dispatch: DispatchType) => {
        api.getCaseStatus(receiptNumber)
            .then(response => {
                dispatch({
                    type: GET_CASE_STATUS,
                    caseStatus: response
                });
            });
    };
}
