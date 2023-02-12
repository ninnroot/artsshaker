import { Button, Input, Link, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import CustomInput from './CustomInput';

interface IProps {
  formik: any;
  title: string;
  children: React.ReactNode;
}

const FormContainer: React.FunctionComponent<IProps> = ({
  formik,
  title,
  children,
}) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="m-5 flex w-[400px]  flex-col gap-2 rounded-xl border-2 border-solid border-black bg-white p-3 py-4">
          <Typography variant="h5">{title}</Typography>
          {children}
        </div>
      </form>
    </>
  );
};

export default FormContainer;
