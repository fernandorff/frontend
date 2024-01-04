import { Badge, Button, Space, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import Icon from '@ant-design/icons';
import { BiEdit, BiPrinter, BiShow } from 'react-icons/bi';

const ViewButton = () => (
  <Button icon={<Icon component={BiShow} />}>{Actions.View}</Button>
);

const PrintInvoiceButton = () => (
  <Button icon={<Icon component={BiPrinter} />} type="dashed">
    {Actions.IssueInvoice}
  </Button>
);

const EditButton = () => (
  <Button icon={<Icon component={BiEdit} />} type="primary">
    {Actions.Edit}
  </Button>
);

const LegalDecisionTag = () => (
  <Tag color="volcano" bordered>
    {Actions.JudicialDecision}
  </Tag>
);

enum Status {
  Approved = 1,
  InAnalysis,
  Blocked,
}

const StatusData = {
  [Status.Approved]: { color: 'green', text: 'Aprovado' },
  [Status.InAnalysis]: { color: 'orange', text: 'Em Análise' },
  [Status.Blocked]: { color: 'red', text: 'Bloqueado' },
};

enum Actions {
  View = 'View',
  IssueInvoice = 'Emitir Boleto',
  Edit = 'Edit',
  JudicialDecision = 'Decisão Jurídica',
}

interface DataType {
  key: React.Key;
  requestId: string;
  status: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Solicitação',
    dataIndex: 'requestId',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status: Status) => (
      <Badge
        color={StatusData[status].color}
        text={StatusData[status].text}
        style={{ whiteSpace: 'nowrap' }}
      />
    ),
  },
  {
    title: 'Ações',
    key: 'actions',
    render: (_, record: DataType) => {
      switch (record.status) {
        case Status.Approved:
          return (
            <Space size="middle">
              <ViewButton />
              <PrintInvoiceButton />
            </Space>
          );
        case Status.InAnalysis:
          return (
            <Space size="middle">
              <ViewButton />
            </Space>
          );
        case Status.Blocked:
          return (
            <Space size="middle">
              <EditButton />
              <LegalDecisionTag />
            </Space>
          );
        default:
          return null;
      }
    },
  },
];

const data: DataType[] = [
  {
    key: '1',
    requestId: '#555411000',
    status: 1,
  },
  {
    key: '2',
    requestId: '#878787899',
    status: 1,
  },
  {
    key: '3',
    requestId: '#989898989222',
    status: 2,
  },
  {
    key: '4',
    requestId: '#21121212',
    status: 3,
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows,
    );
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.requestId === 'Disabled User',
    name: record.requestId,
  }),
};

export default function AccreditationRequestInDocumentAnalysisTable() {
  return (
    <Table
      rowSelection={{
        ...rowSelection,
      }}
      columns={columns}
      dataSource={data}
    />
  );
}
