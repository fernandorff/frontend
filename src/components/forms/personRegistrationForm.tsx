import {
  Button,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  notification,
  Row,
  Select,
  Typography,
} from 'antd';
import { BR_CELLPHONE_MASK, CEP_MASK, CPF_MASK } from '@/constants/forms/masks';
import { federalUnits } from '@/constants/_domain/federal-units';
import { useLazyGetAddressByCepQuery } from '@/services/api/viaCepApi';
import Icon from '@ant-design/icons';
import { BiSearch } from 'react-icons/bi';

const InputMask = require('react-input-mask');

export function PersonRegistrationForm() {
  const [form] = Form.useForm();

  const [getAddressByCep, { data: addressData, error }] =
    useLazyGetAddressByCepQuery();

  async function handleSearch() {
    await getAddressByCep(form.getFieldValue('cep'));
    if (addressData) {
      if (addressData.erro) {
        notification.error({
          message: 'Endereço não encontrado',
          description: null,
        });
      } else {
        notification.success({
          message: 'Endereço encontrado.',
        });
        form.setFieldsValue({
          streetName: addressData.logradouro,
          neighborhood: addressData.bairro,
          city: addressData.localidade,
          federalUnit: addressData.uf,
        });
      }
    }
  }

  return (
    <>
      <Form
        layout={'vertical'}
        form={form}
        name={'register'}
        initialValues={{
          prefix: '0',
        }}
        scrollToFirstError
        onFinish={(values) => console.log(values)}
        onKeyPress={(e) => {
          e.key === 'Enter' && e.preventDefault();
        }}
      >
        <Typography.Title level={4}>Cadastro de Pessoa</Typography.Title>

        <Row gutter={[24, 0]}>
          <Col span={8}>
            <Form.Item
              name={'cpf'}
              label={'CPF'}
              extra={
                1 + 1 == 2
                  ? 'Preencha com o CPF para buscar os dados pessoais do cadastrante'
                  : null
              }
              rules={[{ required: true, message: 'CPF é obrigatório!' }]}
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
                  <Input size={'large'} placeholder={CPF_MASK} maxLength={14} />
                )}
              </InputMask>
            </Form.Item>
          </Col>

          <Col span={8}>
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

          <Col span={8}>
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

          <Col span={8}>
            <Form.Item
              name={'cep'}
              label={'CEP'}
              extra={'Preencha com o CEP para a busca do endereço'}
              rules={[
                {
                  required: true,
                  message: 'CEP é obrigatório!',
                  whitespace: true,
                },
              ]}
            >
              <InputMask
                mask={CEP_MASK}
                maskChar={null}
                value={form.getFieldValue('cep')}
                onChange={(e: any) =>
                  form.setFieldsValue({ cep: e.target.value })
                }
              >
                {() => (
                  <Input.Search
                    size={'large'}
                    placeholder={CEP_MASK}
                    onSearch={handleSearch}
                    maxLength={9}
                    enterButton={
                      <Button disabled={form.getFieldValue('cep')?.length != 9}>
                        <Icon>
                          <BiSearch />
                        </Icon>
                      </Button>
                    }
                  />
                )}
              </InputMask>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name={'streetName'}
              label={'Logradouro'}
              rules={[
                {
                  required: true,
                  message: 'Logradouro é obrigatório!',
                  whitespace: true,
                },
              ]}
            >
              <Input size={'large'} placeholder={'Rua ABC'} />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name={'streetNumber'}
              label={'Número'}
              rules={[
                {
                  required: true,
                  message: 'Número é obrigatório!',
                  whitespace: true,
                },
              ]}
            >
              <Input size={'large'} placeholder={'123'} />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name={'streetComplement'}
              label={'Complemento'}
              rules={[
                {
                  required: true,
                  message: 'Complemento é obrigatório!',
                  whitespace: true,
                },
              ]}
            >
              <Input size={'large'} placeholder={'Bloco A Apto 01'} />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name={'neighborhood'}
              label={'Bairro'}
              rules={[
                {
                  required: true,
                  message: 'Bairro é obrigatório!',
                  whitespace: true,
                },
              ]}
            >
              <Input size={'large'} placeholder={'Vila D'} />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name={'city'}
              label={'Município'}
              rules={[
                {
                  required: true,
                  message: 'Município é obrigatório!',
                  whitespace: true,
                },
              ]}
            >
              <Input size={'large'} placeholder={'Vitória'} />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name={'federalUnit'}
              label={'UF'}
              rules={[
                {
                  required: true,
                  message: 'UF é obrigatório!',
                  whitespace: true,
                },
              ]}
            >
              <Select size="large" placeholder="Selecione UF">
                {federalUnits.map((state) => (
                  <Select.Option value={state.UF} key={state.UF}>
                    {`${state.name} - ${state.UF}`}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={8}>
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

          <Col span={8}>
            <Form.Item
              name={'phone2'}
              label={'Telefone 2'}
              rules={[{ required: true, message: 'Telefone 2 é obrigatório!' }]}
            >
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

          <Col span={8}>
            <Form.Item
              name={'email'}
              label={'Email'}
              rules={[
                {
                  type: 'email',
                  message: 'Insira um Email válido!',
                },
                {
                  required: true,
                  message: 'Email é obrigatório!',
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
