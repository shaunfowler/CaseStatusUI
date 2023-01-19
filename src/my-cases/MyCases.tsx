import React from 'react';
import { Table } from 'antd';
import { CaseStatus } from '../data/case-status';
import { columns } from './case-status-schema';

const dataSource: [CaseStatus] = [
    {
        receiptNumber: "LIN2119051062",
        status: "Case Was Approved",
        description: "On September 29, 2021, we approved your Form I-539, Application To Extend/Change Nonimmigrant Status, Receipt Number LIN2119051062.  We sent you an approval notice.  Please follow the instructions in the notice. If you do not receive your approval notice by October 14, 2021, please go to www.uscis.gov/e-request.  If you move, go to www.uscis.gov/addresschange  to give us your new mailing address.  ",
        date: "September 29, 2021",
        formType: "I-539"
    }
]

function MyCases() {
    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            rowKey={'receiptNumber'}
            rowSelection={{
                type: 'checkbox',
                onChange: (selectedRowKeys, selectedRows) => {
                    console.log(selectedRowKeys, selectedRows)
                }
            }}
        />
    );
}

export default MyCases;
