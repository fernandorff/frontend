import {
  Button,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  Row,
  Typography,
} from 'antd';

export function PersonRegistrationForm() {
  const [form] = Form.useForm();

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
              rules={[
                {
                  required: true,
                  message: 'CPF é obrigatório!',
                },
              ]}
            >
              <Input size={'large'} placeholder={'CPF'} />
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
                // defaultValue={dayjs('01/01/2015')}
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
              <Input size={'large'} placeholder={'12345-678'} />
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
              <Input size={'large'} placeholder={'44'} />
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
              <Input size={'large'} placeholder={'ES'} />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name={'phone1'}
              label={'Telefone 1'}
              rules={[{ required: true, message: 'Telefone 1 é obrigatório!' }]}
            >
              <Input size={'large'} placeholder={'(12)1234-1234'} />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name={'phone2'}
              label={'Telefone 2'}
              rules={[{ required: true, message: 'Telefone 2 é obrigatório!' }]}
            >
              <Input size={'large'} placeholder={'(12)1234-1234'} />
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
            <Button size={'large'} type={'default'}>
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
