import React from 'react';
import { useEffect } from 'react';
import { Table } from 'antd';
import { ICaseStatus } from '../../api/types';
import { columns } from './case-status-schema';
import { Key } from 'antd/es/table/interface';
import { Dispatch } from '@reduxjs/toolkit';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { CaseStatusState } from '../../store/types';
import { getCaseStatus } from '../../store/actions';

function MyCases() {

    const dispatch: Dispatch<any> = useDispatch()

    const caseStatus: readonly ICaseStatus[] = useSelector(
        (state: CaseStatusState) => state.caseStatus,
        shallowEqual
    )

    useEffect(() => {
        dispatch(getCaseStatus('LIN2119051062'))
    }, [])

    return (
        <Table
            dataSource={caseStatus}
            columns={columns}
            rowKey={'receiptNumber'}
            rowSelection={{
                type: 'checkbox',
                onChange: (selectedRowKeys: Key[], selectedRows: ICaseStatus[]) => {
                    console.log(selectedRowKeys, selectedRows)
                }
            }}
        />
    )
}

export default MyCases