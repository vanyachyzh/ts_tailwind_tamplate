/* eslint-disable @typescript-eslint/no-explicit-any */
// npm install react-hook-form @hookform/resolvers yup
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import Checkbox from '../Checkbox';
import Input from '../Input';
import { validationSchema } from './schema';

const Form = () => {
  const { register } = useForm<any>({
    resolver: yupResolver<any>(validationSchema),
  });

  return (
    <form>
      <Input />
      <Checkbox {...{ register, name: 'checkbox' }} />
    </form>
  );
};

export default Form;
