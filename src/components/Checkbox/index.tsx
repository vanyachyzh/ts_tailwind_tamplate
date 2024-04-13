import { ComponentPropsWithoutRef } from 'react';

import { DoneIcon } from '../icons';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  register: any;
}

const Checkbox = ({ register, checked, ...props }: InputProps) => {
  const { name } = props;
  console.log(checked)

  return (
    <label>
      <input
        {...register(name)}
        type="checkbox"
        style={{ marginRight: '5px' }}
      />

      <div className="h-5 w-5 bg-red-500">{checked && <DoneIcon />}</div>
    </label>
  );
};

export default Checkbox;
