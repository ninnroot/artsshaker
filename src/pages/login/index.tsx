import CustomInput from '@/components/form/CustomInput';
import FormContainer from '@/components/form/FormContainer';
import { Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import * as yup from 'yup';
const Register: React.FunctionComponent = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: yup.object({
      email: yup.string().required('This field is required'),
      password: yup.string().required('This field is required.'),
    }),
    onSubmit(values) {
      console.log(values);
    },
  });
  return (
    <>
      <div className="flex w-[100vw] justify-center">
        <FormContainer title="Login" formik={formik}>
          <CustomInput label="Email" name="email" formik={formik}></CustomInput>
          <CustomInput
            label="Password"
            name="password"
            formik={formik}
          ></CustomInput>
          <div className="mt-2 flex flex-row items-center justify-between">
            <Button variant="contained" type="submit">
              Submit
            </Button>
            <Typography>
              Don't have an account?{' '}
              <Link href="/register" className="link-simple">
                Sign up
              </Link>
            </Typography>
          </div>
        </FormContainer>
      </div>
    </>
  );
};

export default Register;
