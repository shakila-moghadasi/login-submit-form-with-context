import { Form , Row , Col , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { useFormik } from "formik";

function TabContent2() {

    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        education: "",
        educationcity:"",
        statecity:"",
        city:"",
        borncity:"",
        acceptTerms: false,
      },

      handleInputChange: (e) => {
        console.log(e.target.value);
      },

    handleSubmit: (data) => {
      console.log(firstName,lastName,email,password,education,educationcity,statecity,city,borncity);
      console.log(JSON.stringify(data, null, 2));
    }
    });

    return (
      <div>
        <h3 className='h2-content1'>رایگان ثبت نام کنید</h3>
        <Form className='form' onSubmit={formik.handleSubmit}>
            <Row>
              <Col>
                <Form.Control 
                    onChange={formik.handleInputChange}
                    value={formik.values.firstName}
                    style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight"}} 
                    placeholder="نام" 
                />
              </Col>
              <Col>
                <Form.Control 
                  onChange={formik.handleInputChange}
                  value={formik.values.lastName} 
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight"}} 
                  placeholder="نام خانوادگی"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control 
                  onChange={formik.handleInputChange}
                  value={formik.values.education}
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight" , marginTop : "12%"}} 
                  placeholder="تحصیلات"
                  // onChange={(e) => (e.target.value)?this.visablecitystudy:""}
                />
              </Col>
              <Col>
                <Form.Control 
                  onChange={formik.handleInputChange}
                  value={formik.values.educationcity}
                  style={{
                    backgroundColor : "rgb(32, 49, 59" ,
                    color : "wight" , 
                    marginTop : "12%" , 
                    // visibility : this.state.visibility
                  }} 
                  placeholder="شهر محل تحصیل"  
                />
              </Col>
            </Row>
            <Row>
              <Col>
              <Form.Select aria-label="Default select example" 
                onChange={formik.handleInputChange}
                value={formik.values.statecity}
                style={{backgroundColor : "rgb(32, 49, 59" , color : "wight" , marginTop : "12%"}} 
                // onChange={(e) => (e.target.value)?this.visablecity:""}
              >
                <option style={{color : "wight"}}>استان</option>
                <option value="1">آذربایجان شرقی</option>
                <option value="2">آذربایجان غربی</option>
                <option value="3">اردبیل</option>
                <option value="4">اصفهان</option>
                <option value="5">البرز</option>
                <option value="6">ایلام</option>
                <option value="7">بوشهر</option>
                <option value="8">تهران</option>
                <option value="9">چهارمحال و بختیاری</option>
                <option value="10">خراسان جنوبی</option>
                <option value="11">خراسان رضوی</option>
                <option value="12">خراسان شمالی</option>
                <option value="13">خوزستان</option>
                <option value="14">زنجان</option>
                <option value="15">سمنان</option>
                <option value="16">سیستان و بلوچستان</option>
                <option value="17">فارس</option>
                <option value="18">قزوین</option>
                <option value="19">قم</option>
                <option value="20">کردستان</option>
                <option value="21">کرمان</option>
                <option value="22">کرمانشاه</option>
                <option value="23">کهکیلویه و بویراحمد</option>
                <option value="24">گلستان</option>
                <option value="25">گیلان</option>
                <option value="26">لرستان</option>
                <option value="27">مازندران</option>
                <option value="28">مرکزی</option>
                <option value="29">هرمزگان</option>
                <option value="30">همدان</option>
                <option value="31">یزد</option>
              </Form.Select>
              </Col>
              <Col>
              <Form.Select aria-label="Default select example" 
                  onChange={formik.handleInputChange}
                  value={formik.values.city}
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight" , marginTop : "12%"}} 
                  // disabled={this.state.disable}
                  >
                <option>شهر</option>
                <option value="1">
                </option>
              </Form.Select>
              </Col>
              <Col>
                <Form.Control 
                  onChange={formik.handleInputChange}
                  value={formik.values.borncity}
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight" , marginTop : "12%"}} 
                  placeholder="شهر محل تولد"  type=''
                />
              </Col>
            </Row>
            <Form.Group controlId="formGroupEmail">
                <Form.Control 
                  onChange={formik.handleInputChange}
                  value={formik.values.email}
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight" , marginTop : "4%"}} 
                  type="email" 
                  placeholder="پست الکترونیک" 
                />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Control 
                  onChange={formik.handleInputChange}
                  value={formik.values.password}
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight" , marginTop : "4%"}} 
                  type="password" 
                  placeholder="کلمه عبور" 
                />
            </Form.Group>
            <Button 
              type='submit'
              style={{backgroundColor : "rgb(0, 209, 146)" ,
                color : "wight" , 
                border: "1px solid rgb(0, 209, 146)" ,
                borderRadius: "0",
                width: "100%",
                height: "4vw",
                marginLeft: "1px",
                marginTop: "4%" ,
              }}>
              ثبت نام   
            </Button>
        </Form>
      </div>
    )
  }

export default TabContent2
