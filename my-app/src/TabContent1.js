import React, { Component } from 'react';
import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Field, Form } from "formik";
import {Logincontext} from  "./Logincontext";
import axios from 'axios';

function TabContent1() {
    const {loggedInUser ,setLoggedInUser} = useContext(Logincontext);

    return (
      <div>
        <h2 className='h2-content1'>خوش آمدید</h2>
        <Formik
          initialValues={{ email: "", password: "" }}

          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'این فیلد ضروری است';
            }
            if(!values.password){
             errors.password = 'این فیلد ضروری است'
           }else if(values.password.length < 6){
             errors.password = "رمز عبور وارد شده خیلی کوتاه هست"
           }
            return errors;
          }}

          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            resetForm()
          const newLoggedIn = await axios.get('http://localhost:3001/users')
            .then(res => res.data)
            .then(users => users.find(user => {
              return user.email === values.email && user.password === values.password}))
          if (newLoggedIn) {
            alert(`${newLoggedIn.firstname} خوش آمدید`)
            setLoggedInUser(newLoggedIn)
          }else {
            alert('اطلاعات وارد شده نادرست است!')
          }
        }}
        >
        {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
        <Form className='form' onSubmit={handleSubmit}>
          <div className='field'>
            <Field 
              type="email" 
              name="پست الکترونیک" 
              placeholder="پست الکترونیک" 
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              style={{backgroundColor : "rgb(32, 49, 59)" ,  
              color : "wight" , width: "100%"}}
            />
          </div>
          <p className='error'>
                {errors.email && touched.email && errors.email}
          </p>
          <div className='feild'>
            <Field 
              type="password" 
              name="کلمه عبور" 
              placeholder="کلمه عبور" 
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              style={{backgroundColor : "rgb(32, 49, 59)" ,  
              color : "wight" , width: "100%"}}
            />
          </div>
          <p className='error'>
              {errors.password && touched.password && errors.password}
          </p>
          <p className='remember'>فراموش کردید؟</p>
          <div>
            <button
              type="submit" 
              className='button' 
              disabled={isSubmitting}
              style={{backgroundColor : "rgb(0, 209, 146)" ,
                color : "wight" , 
                border: "1px solid rgb(0, 209, 146)" ,
                borderRadius: "0",
                width: "100%",
                height: "4vw",
                marginLeft: "1px",
              }}>ورود</button>
          </div>
        </Form>
      )}
    </Formik>
      </div>
    )
}

export default TabContent1;