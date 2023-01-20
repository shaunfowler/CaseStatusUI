import { ICaseStatus } from "../api/types";

export type CaseStatusState = {
    caseStatus: ICaseStatus[];
};

export type CaseStatusAction = {
    type: string;
    caseStatus: ICaseStatus;
};

export type DispatchType = (args: CaseStatusAction) => CaseStatusAction;
