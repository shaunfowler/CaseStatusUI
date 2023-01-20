import { ICaseStatus } from "./types";

export function getCaseStatus(receiptNumber: string): Promise<ICaseStatus> {
    return fetch(`http://localhost:4000/case/${receiptNumber}`)
        .then((response) => {
            return response.json()
        })
}