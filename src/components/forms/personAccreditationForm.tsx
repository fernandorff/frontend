import { Button, Col, DatePicker, Flex, Form, Input, Row, Select } from 'antd';
import { CNPJ_MASK, CPF_MASK } from '@/constants/forms/INPUT_MASKS';
import { useScreenSize } from '@/hooks/layout/useScreenSize';
import React from 'react';
import { PROFESSIONS } from '@/constants/_domain/PROFESSIONS';
import { ACCREDITATION_SITUATIONS } from '@/constants/_domain/ACCREDITATION_SITUATIONS';
import AddressFieldsSection from '@/components/forms/sections/addressFieldsSection';

const InputMask = require('react-input-mask');

export default function PersonAccreditationForm() {
  const [form] = Form.useForm();
  const screenSize = useScreenSize();
  const spanSize = screenSize === 'small' ? 24 : 8;

  return (
    <Form
      layout={'vertical'}
      form={form}
      name={'register'}
      scrollToFirstError
      onFinish={(values) => console.log(values)}
      onKeyDown={(e) => {
        e.key === 'Enter' && e.preventDefault();
      }}
    >
      <Row gutter={[24, 0]}>
        <Col span={spanSize}>
          <Form.Item
            name={'cpf'}
            label={'CPF'}
            extra={
              'Preencha com o CPF para buscar os dados pessoais do cadastrante'
            }
          >
            <InputMask
              mask={CPF_MASK}
              maskChar={null}
              value={form.getFieldValue('cpf')}
              onChange={(e: any) =>
                form.setFieldsValue({ cpf: e.target.value })
              }
            >
              {() => (
                <Input
                  size={'large'}
                  placeholder={CPF_MASK}
                  maxLength={CPF_MASK.length}
                />
              )}
            </InputMask>
          </Form.Item>
        </Col>

        <Col span={spanSize}>
          <Form.Item
            name={'accreditationPeriod'}
            label={'Período de credenciamento'}
            rules={[
              {
                required: true,
                message: 'Data de nascimento é obrigatória!',
              },
            ]}
          >
            <DatePicker.RangePicker
              size={'large'}
              style={{ width: '100%' }}
              format={['DD/MM/YYYY']}
            />
          </Form.Item>
        </Col>

        <Col span={spanSize}>
          <Form.Item
            name={'name'}
            label={'Nome'}
            rules={[
              {
                required: true,
                message: 'Nome é obrigatório!',
                whitespace: true,
              },
            ]}
          >
            <Input size={'large'} placeholder={'José Ricardo Almeida Santos'} />
          </Form.Item>
        </Col>

        <Col span={spanSize}>
          <Form.Item
            name={'profession'}
            label={'Profissão'}
            rules={[
              {
                required: true,
                message: 'Profissão é obrigatória!',
              },
            ]}
          >
            <Select size="large" placeholder="Selecione a profissão">
              {PROFESSIONS.map((profession) => (
                <Select.Option value={profession.name} key={profession.name}>
                  {`${profession.name}`}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col span={spanSize}>
          <Form.Item
            name={'accreditationSituation'}
            label={'Situação'}
            rules={[
              {
                required: true,
                message: 'Situação é obrigatória!',
              },
            ]}
          >
            <Select size="large" placeholder="Selecione a situação">
              {ACCREDITATION_SITUATIONS.map((situation) => (
                <Select.Option value={situation.name} key={situation.name}>
                  {`${situation.name}`}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col span={spanSize}>
          <Form.Item
            name={'cnpj'}
            label={'CNPJ'}
            extra={'Preencha com o CNPJ da entidade'}
            rules={[
              {
                required: true,
                message: 'CNPJ é obrigatório!',
              },
            ]}
          >
            <InputMask
              mask={CNPJ_MASK}
              maskChar={null}
              value={form.getFieldValue('cnpj')}
              onChange={(e: any) =>
                form.setFieldsValue({ cnpj: e.target.value })
              }
            >
              {() => (
                <Input
                  size={'large'}
                  placeholder={CNPJ_MASK}
                  maxLength={CNPJ_MASK.length}
                />
              )}
            </InputMask>
          </Form.Item>
        </Col>

        <Col span={spanSize}>
          <Form.Item
            name={'corporateReason'}
            label={'Razão Social'}
            rules={[
              {
                required: true,
                message: 'Razão Social é obrigatório!',
                whitespace: true,
              },
            ]}
          >
            <Input placeholder={'Razão Social'} size={'large'} />
          </Form.Item>
        </Col>

        <AddressFieldsSection form={form} spanSize={spanSize} />

        <Col span={24}>
          <Form.Item name={'observation'} label={'Observação'}>
            <Input.TextArea size={'large'} />
          </Form.Item>
        </Col>
      </Row>

      <Flex className={'justify-between'}>
        <Form.Item>
          <Button
            size={'large'}
            type={'default'}
            onClick={() => form.resetFields()}
          >
            Cancelar
          </Button>
        </Form.Item>

        <Form.Item>
          <Button size={'large'} type={'primary'} htmlType={'submit'}>
            Enviar
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
}
