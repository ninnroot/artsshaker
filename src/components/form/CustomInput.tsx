import { StandardTextFieldProps, TextField } from '@mui/material';
import { FormikProps, useFormikContext } from 'formik';
import React from 'react';
interface CustomInputProps extends StandardTextFieldProps {
  name: string;
  formik: any;
}

const CustomInput: React.FunctionComponent<CustomInputProps> = (props) => {
  return (
    <>
      <TextField
      variant='standard'
        {...props.formik.getFieldProps(props.name)}
        error={props.formik.touched[props.name] && Boolean(props.formik.errors[props.name])}
        helperText={props.formik.touched[props.name] && props.formik.errors[props.name]}
        {...props}
      ></TextField>
    </>
  );
};

export default CustomInput;
