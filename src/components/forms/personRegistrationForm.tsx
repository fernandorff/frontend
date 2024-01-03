import { Button, Col, DatePicker, Flex, Form, Input, Row } from 'antd';
import { BR_CELLPHONE_MASK, CPF_MASK } from '@/constants/forms/INPUT_MASKS';
import { AddressFieldsSection } from '@/components/forms/sections/addressFieldsSection';
import { useBreakpoint } from '@ant-design/pro-utils';
import { isBreakpointUp } from '@/utils/breakpointUtils';

const InputMask = require('react-input-mask');

export function PersonRegistrationForm() {
  const [form] = Form.useForm();
  const breakpoint = useBreakpoint();

  const spanSize = isBreakpointUp('sm', breakpoint) ? 8 : 24;

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
              name={'fullName'}
              label={'Nome Completo'}
              rules={[
                {
                  required: true,
                  message: 'Nome é obrigatório!',
                  whitespace: true,
                },
              ]}
            >
              <Input
                size={'large'}
                placeholder={'José Ricardo Almeida Santos'}
              />
            </Form.Item>
          </Col>

          <Col span={spanSize}>
            <Form.Item
              name={'birthDate'}
              label={'Data de Nascimento'}
              rules={[
                {
                  type: 'object' as const,
                  required: true,
                  message: 'Data de nascimento é obrigatória!',
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
