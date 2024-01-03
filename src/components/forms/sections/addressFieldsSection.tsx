import { Button, Col, Form, FormInstance, Input, Select } from 'antd';
import { useLazyGetAddressByCepQuery } from '@/services/api/viaCepApi';
import Icon from '@ant-design/icons';
import { BiSearch } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { FEDERAL_UNITS } from '@/constants/_domain/FEDERAL_UNITS';
import { CEP_MASK } from '@/constants/forms/INPUT_MASKS';

const InputMask = require('react-input-mask');

type AddressFieldsSectionProps = {
  form: FormInstance;
  spanSize?: number;
};

export function AddressFieldsSection({
  form,
  spanSize = 8,
}: AddressFieldsSectionProps) {
  const [getAddressTrigger, setgetAddressTrigger] = useState<boolean>(false);

  const [
    getAddressByCep,
    {
      data: getAddressData,
      error: getAddressError,
      isFetching: getAddressIsFetching,
    },
  ] = useLazyGetAddressByCepQuery();

  async function handleSearch() {
    await getAddressByCep(form.getFieldValue('cep'));
    setgetAddressTrigger(!getAddressTrigger);
  }

  useEffect(() => {
    if (getAddressData) {
      form.setFieldsValue({
        streetName: getAddressData.logradouro,
        neighborhood: getAddressData.bairro,
        city: getAddressData.localidade,
        federalUnit: getAddressData.uf,
      });
    }
  }, [getAddressTrigger]);

  return (
    <>
      <Col span={spanSize}>
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
            onChange={(e: any) => form.setFieldsValue({ cep: e.target.value })}
          >
            {() => (
              <Input.Search
                size={'large'}
                placeholder={CEP_MASK}
                onSearch={handleSearch}
                maxLength={CEP_MASK.length}
                enterButton={
                  <Button
                    disabled={
                      form.getFieldValue('cep')?.length != CEP_MASK.length ||
                      getAddressIsFetching
                    }
                  >
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

      <Col span={spanSize}>
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
          <Input disabled={true} size={'large'} placeholder={'Rua ABC'} />
        </Form.Item>
      </Col>

      <Col span={spanSize}>
        <Form.Item name={'streetNumber'} label={'Número'}>
          <Input size={'large'} placeholder={'123'} />
        </Form.Item>
      </Col>

      <Col span={spanSize}>
        <Form.Item name={'streetComplement'} label={'Complemento'}>
          <Input size={'large'} placeholder={'Bloco A Apto 01'} />
        </Form.Item>
      </Col>

      <Col span={spanSize}>
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
          <Input disabled={true} size={'large'} placeholder={'Vila D'} />
        </Form.Item>
      </Col>

      <Col span={spanSize}>
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
          <Input disabled={true} size={'large'} placeholder={'Vitória'} />
        </Form.Item>
      </Col>

      <Col span={spanSize}>
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
          <Select disabled={true} size="large" placeholder="Selecione UF">
            {FEDERAL_UNITS.map((state) => (
              <Select.Option value={state.UF} key={state.UF}>
                {`${state.name} - ${state.UF}`}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
    </>
  );
}
