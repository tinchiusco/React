import React, { useContext } from "react";
import CartItem from "../../components/CartItem";
import { Shop } from "../../contexts/Shop";
import { saveOrder } from "../../services/saveOrder";
import { useFormik } from "formik";
import * as Yup from "yup";
import './styles.scss';

const CartContainer = () => {
  const { products, calculateTotal } = useContext(Shop);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const confirmPurchase = () => {
   

    (async () => {
      await saveOrder(
        formik.values.firstName,
        formik.values.lastName,
        formik.values.email,
        products,
        calculateTotal()
      );
    })();
  };
  
  return (
    <div>
      {products.map((product) => {
        return <CartItem key={product.id} item={product} />;
      })}
      <h2>Total: ARS ${calculateTotal()}</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <button
          type="submit"
          className="btn btn-success mt-5 p-3"
          onClick={confirmPurchase}>
          Buy
        </button>
      </form>
    </div>
  );
};

export default CartContainer;
