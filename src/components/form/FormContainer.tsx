import { Button, Input, Link, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import CustomInput from './CustomInput';

interface IProps {
  formik: any;
  title: string;
  children: React.ReactNode
}

const FormContainer: React.FunctionComponent<IProps> = ({formik, title, children}) => {

  return (
    <>
      
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col w-[400px]  border-solid border-2 bg-white border-black m-5 p-3 py-4 rounded-xl gap-2">
            <Typography variant="h5">{title}</Typography>
            {children}
          </div>
        </form>

    </>
  );
};

export default FormContainer;
