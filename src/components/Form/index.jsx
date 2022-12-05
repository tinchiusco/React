import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";


 const SignupForm = () => {
  return (
    <>
      <h1>Tus datos de compra</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          
           
            
           
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form>
          <input
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <input
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <input
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm
