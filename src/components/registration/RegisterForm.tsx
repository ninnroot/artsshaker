import { Button, Input, Link, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from "yup"
import CustomInput from '../form/CustomInput';

interface IProps {
  foo?: string;
}

const RegisterForm: React.FunctionComponent<IProps> = (props) => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password:"",
            confirmPassword: ""
        },
        validationSchema: yup.object({
            email: yup.string().required("This field is required"),
            password: yup.string(),
            confirmPassword: yup.string().required("This field is required.").oneOf([yup.ref("password"), ""], "Passwords don't match")
        }),
        onSubmit(values) {
            console.log(values)
        },
    })
  return (
    <>
      <div className="flex justify-center w-[100vw]">
            <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col w-[400px]  border-solid border-2 bg-white border-black m-5 p-3 py-4 rounded-xl gap-2">

          <Typography variant="h5">Register</Typography>
          <CustomInput  label="Email" name='email' formik={formik}></CustomInput>
          <CustomInput  label="Password" name='password' formik={formik}></CustomInput>
          <CustomInput  label="Confirm password" name='confirmPassword' formik={formik}></CustomInput>

          <div className='mt-2 flex flex-row justify-between items-center'>
            <Button variant='contained' type='submit'>Submit</Button>
            <Typography>Already has an account? <Link href="/login">Log in</Link></Typography>

          </div>
        </div>
            </form>
      </div>
    </>
  );
};

export default RegisterForm;
