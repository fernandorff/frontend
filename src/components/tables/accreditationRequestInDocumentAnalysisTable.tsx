import { Badge, Button, Space, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import Icon from '@ant-design/icons';
import { BiEdit, BiPrinter, BiShow } from 'react-icons/bi';

const ViewButton = () => (
  <Button icon={<Icon component={BiShow} />}>{Actions.Visualizar}</Button>
);

const PrintInvoiceButton = () => (
  <Button icon={<Icon component={BiPrinter} />} type="dashed">
    {Actions.EmitirBoleto}
  </Button>
);

const EditButton = () => (
  <Button icon={<Icon component={BiEdit} />} type="primary">
    {Actions.Editar}
  </Button>
);

const LegalDecisionTag = () => (
  <Tag color="volcano" bordered>
    {Actions.DecisaoJuridica}
  </Tag>
);

enum Status {
  Aprovado = 1,
  EmAnalise,
  Bloqueado,
}

enum Actions {
  Visualizar = 'Visualizar',
  EmitirBoleto = 'Emitir Boleto',
  Editar = 'Editar',
  DecisaoJuridica = 'Decisão Jurídica',
}

const StatusColor = {
  [Status.Aprovado]: 'green',
  [Status.EmAnalise]: 'orange',
  [Status.Bloqueado]: 'red',
};

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
      <Badge color={StatusColor[status]} text={Status[status]} />
    ),
  },
  {
    title: 'Ações',
    key: 'actions',
    render: (_, record: DataType) => {
      switch (record.status) {
        case Status.Aprovado:
          return (
            <Space size="middle">
              <ViewButton />
              <PrintInvoiceButton />
            </Space>
          );
        case Status.EmAnalise:
          return (
            <Space size="middle">
              <ViewButton />
            </Space>
          );
        case Status.Bloqueado:
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
