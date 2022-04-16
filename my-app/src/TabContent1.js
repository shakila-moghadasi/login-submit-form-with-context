import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Field, Form } from "formik";

export default class TabContent1 extends Component {
  constructor(){
    super();
    this.state={
      value : "" ,
      List : [] 
    }
    this.submit = this.submit.bind(this)
  }
  submit(e){
    this.setState({ List: [...this.state.List , e.target.value] , value: "" })
  }
  render() {
    return (
      <div>
        <h2 className='h2-content1'>خوش آمدید</h2>
        <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={this.submit}
    >
      {() => (
        <Form className='form'>
          <div className='field'>
            <Field type="email" name="پست الکترونیک" placeholder="پست الکترونیک" style={{backgroundColor : "rgb(32, 49, 59)" ,  color : "wight" , width: "100%"}}/>
          </div>
          <div className='feild'>
            <Field type="password" name="کلمه عبور" placeholder="کلمه عبور" style={{backgroundColor : "rgb(32, 49, 59)" ,  color : "wight" , width: "100%"}}/>
          </div>
          <p className='remember'>فراموش کردید؟</p>
          <div>
            <button type="submit" className='button' 
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
}