import { Button, Col, DatePicker, Flex, Form, Input, Row, Select } from 'antd';
import {
  BR_CELLPHONE_MASK,
  CNPJ_MASK,
  CPF_MASK,
} from '@/constants/forms/INPUT_MASKS';
import { ENTITIES } from '@/constants/_domain/ENTITIES';
import { AddressFieldsSection } from '@/components/forms/sections/addressFieldsSection';
import { useScreenSize } from '@/hooks/layout/useScreenSize';

const InputMask = require('react-input-mask');

export function EntityRegistrationForm() {
  const [form] = Form.useForm();
  const screenSize = useScreenSize();
  const spanSize = screenSize === 'small' ? 24 : 8;

  return (
    <>
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
              name={'entity'}
              label={'Entidade'}
              rules={[
                {
                  required: true,
                  message: 'Entidade é obrigatória!',
                },
              ]}
            >
              <Select size="large" placeholder="Selecione a entidade">
                {ENTITIES.map((entity) => (
                  <Select.Option value={entity.name} key={entity.name}>
                    {`${entity.name}`}
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
              <Input placeholder={'Razao Social'} size={'large'} />
            </Form.Item>
          </Col>

          <Col span={spanSize}>
            <Form.Item
              name={'fantasyName'}
              label={'Nome Fantasia'}
              rules={[
                {
                  required: true,
                  message: 'Nome Fantasia é obrigatório!',
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder={'Nome Fantasia'} size={'large'} />
            </Form.Item>
          </Col>

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
              name={'requestDate'}
              label={'Data de Solicitação'}
              rules={[
                {
                  type: 'object' as const,
                  required: true,
                  message: 'Data de Solicitação é obrigatória!',
                },
              ]}
            >
              <DatePicker
                size={'large'}
                style={{ width: '100%' }}
                format={['DD/MM/YYYY']}
              />
            </Form.Item>
          </Col>

          <AddressFieldsSection form={form} spanSize={spanSize} />

          <Col span={spanSize}>
            <Form.Item
              name={'phone1'}
              label={'Telefone 1'}
              rules={[{ required: true, message: 'Telefone 1 é obrigatório!' }]}
            >
              <InputMask
                mask={BR_CELLPHONE_MASK}
                maskChar={null}
                value={form.getFieldValue('phone1')}
                onChange={(e: any) =>
                  form.setFieldsValue({ phone1: e.target.value })
                }
              >
                {() => <Input size={'large'} placeholder={BR_CELLPHONE_MASK} />}
              </InputMask>
            </Form.Item>
          </Col>

          <Col span={spanSize}>
            <Form.Item name={'phone2'} label={'Telefone 2'}>
              <InputMask
                mask={BR_CELLPHONE_MASK}
                maskChar={null}
                value={form.getFieldValue('phone2')}
                onChange={(e: any) =>
                  form.setFieldsValue({ phone2: e.target.value })
                }
              >
                {() => <Input size={'large'} placeholder={BR_CELLPHONE_MASK} />}
              </InputMask>
            </Form.Item>
          </Col>

          <Col span={spanSize}>
            <Form.Item
              name={'email'}
              label={'Email'}
              rules={[
                {
                  type: 'email',
                  message: 'Insira um Email válido!',
                },
              ]}
            >
              <Input size={'large'} placeholder={'Email'} />
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
    </>
  );
}
