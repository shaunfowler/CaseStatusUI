import React, { useState } from 'react';
import { Space, Form, Input } from 'antd';
import { ICaseStatus } from '../../api/types';
import { Dispatch } from '@reduxjs/toolkit';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { CaseStatusState } from '../../store/types';
import { getCaseStatus } from '../../store/actions';
import CaseList from './CaseList';

function MyCases() {

    const dispatch: Dispatch<any> = useDispatch()

    const caseStatus: ICaseStatus[] = useSelector(
        (state: CaseStatusState) => state.caseStatus,
        shallowEqual
    )

    const [receiptNumber, setReceiptNumber] = useState('')

    return (
        <>
            <div style={{paddingBottom: 24}}>
                <Form onSubmitCapture={() => {
                    dispatch(getCaseStatus(receiptNumber))
                    
                }}>
                    <Input
                        value={receiptNumber}
                        onChange={(e) => { setReceiptNumber(e.target.value) }}
                        placeholder={'Receipt Number'}
                        autoCapitalize={'on'}
                    />
                </Form>
            </div>
            <CaseList caseStatus={caseStatus} />
        </>
    )
}

export default MyCases