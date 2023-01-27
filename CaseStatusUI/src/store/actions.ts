import * as api from '../api/case-status-api';
import { DispatchType } from "./types";

export const GET_CASE_STATUS = "GET_CASE_STATUS";

export function getCaseStatus(receiptNumber: string) {
    console.log("getCaseStatus")
    return (dispatch: DispatchType) => {
        console.log("getCaseStatus dispatch")
        api.getCaseStatus(receiptNumber)
            .then(response => {
                console.log("getCaseStatus dispatch", response)
                dispatch({
                    type: GET_CASE_STATUS,
                    caseStatus: response
                });
            });
    };
}
