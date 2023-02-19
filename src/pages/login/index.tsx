import CustomInput from '@/components/form/CustomInput';
import FormContainer from '@/components/form/FormContainer';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import * as yup from 'yup';

const Register: React.FunctionComponent = () => {
  const router = useRouter();
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
    async onSubmit(values) {
      router.push(
        'https://discord.com/api/oauth2/authorize?client_id=1075686808815407175&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fcallback&response_type=code&scope=identify',
      );
    },
  });
  return (
    <>
      <div className="flex w-[100vw] h-[100vh] justify-center">
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
