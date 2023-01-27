import React from 'react';
import { List } from 'antd';
import { ICaseStatus } from '../../api/types';

interface ICaseListProps {
    caseStatus: ICaseStatus[]
}

function getTitle(caseStatus: ICaseStatus): string {
    if (!caseStatus.formType) {
        return caseStatus.receiptNumber
    }
    return `${caseStatus.receiptNumber}: ${caseStatus.formType}`
}

function CaseList(props: ICaseListProps) {
    return (
        <List
            loading={false}
            dataSource={props.caseStatus}
            renderItem={(item) => (
                <List.Item actions={[]}>
                    <List.Item.Meta
                        title={getTitle(item)}
                        description={item.status}
                    />
                    <div>{item.date}</div>
                </List.Item>
            )}
        />
    );
}

export default CaseList