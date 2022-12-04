import React from "react";
import { useFormik } from "formik";
import "./styles.css";

export const Form = () => {
  const formik = useFormik({
    initialValues: { name: "", phone: "", email: "" },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="Name"
        name="Name"
        type="Email"
        onChange={formik.handleChange}
        value={formik.values.name}
        
      />
      <label htmlFor="phone">Phone</label>
      <input
        id="Phone"
        name="Phone"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.phone}
        
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        
      />
      
      <button type="submit">Submit</button>
    </form>
  );
};





