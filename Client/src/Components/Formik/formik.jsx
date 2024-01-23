import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

const Formikk = () => {
    async function addMenu(value) {
        const res=await axios.post("http://localhost:5000", value)
        getDeta()
    }
  return (
    <Formik
      initialValues={{ image: '', title: '', price: '' }}
      validationSchema={Yup.object({
        image: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        title: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        price: Yup.number()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit={(value, { resetForm }) => { 
         addMenu(value)
         resetForm()       
      }}
    >
      <Form>
        <label htmlFor="image">Image</label>
        <Field name="image" type="text" />
        <ErrorMessage name="image" />

        <label htmlFor="title">Title</label>
        <Field name="title" type="text" />
        <ErrorMessage name="title" />

        <label htmlFor="price">Price </label>
        <Field name="price" type="text" />
        <ErrorMessage name="price" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Formikk