import * as React from 'react';
import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from '@chakra-ui/react';
import { useField } from 'formik';

export type FormikFieldProps = InputProps & {
  name: string;
  label?: string;
  type?: string;
};

const FormikField: React.FC<FormikFieldProps> = ({ name, label, type = 'text', ...props }) => {
  const [field, meta] = useField(name || '');

  return (
    <FormControl isInvalid={meta.touched && !!meta.error}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Input id={name} type={type} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormikField;
