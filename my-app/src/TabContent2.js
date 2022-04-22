import { Form , Row , Col , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useCallback , useState ,useEffect } from 'react';
import { useFormik } from "formik";
import axios from 'axios';

function TabContent2() {
  const [iranstates, setIranStates] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [eduPlaceShow, setEduPlaceShow] = useState(false)
  const [activeCities, setActiveCities] = useState([])

    const handlePassword = useCallback(() => setShowPassword(!showPassword))
    const handleCities = useCallback(province => setActiveCities(iranstates[province]))
    const handleEduPlace = useCallback(e => {
        setEduPlaceShow(e.target.value.length === 0 ? false : true)}
    )

  function validate(values) {
    const errors = {};
    if (!values.firstName) errors.firstName = 'این فیلد ضروری است'
    if (!values.lastName) errors.lastName = 'این فیلد ضروری است'
    if (!values.city) errors.city = 'این فیلد ضروری است'
    if (!values.province) errors.province = 'این فیلد ضروری است'
    if (values.education) {
        if (!values.educationcity) errors.educationcity = 'این فیلد ضروری است'
    }
    if (!values.email) {
        errors.email = 'این فیلد ضروری است';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'آدرس ایمیل نامعتبر است';
    }
    if(!values.password){
        errors.password = 'این فیلد ضروری است'
    }else if(values.password.length < 6){
        errors.password = "رمز عبور وارد شده خیلی کوتاه هست"
    }else if(values.password.length > 50) {
        errors.password = "رمز عبور وارد شده خیلی بلند هست"
    }
    return errors;
  }

  useEffect(() => {
    axios.get("https://github.com/pesarkhobeee/iran-states-and-cities-json-and-sql-including-area-coordinations/blob/master/iran_cities_with_coordinates.hjson")
        .then((res) => setIranStates(res.data))
        .catch((err) => console.log(err));
    return () => setIranStates([])
}, [])

    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        education: "",
        educationcity:"",
        province:"",
        city:"",
        borncity:"",
        acceptTerms: false,
      },
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            await axios.post('http://localhost:3001/users', values)
                .catch(err => console.log(err))
                .then(alert('ثبت نام شما با موفقیت انجام شد!'))
            resetForm()
        }
    });

    return (
      <div>
        <h3 className='h2-content1'>رایگان ثبت نام کنید</h3>
        <Form className='form' onSubmit={formik.handleSubmit}>
            <Row>
              <Col>
                <Form.Control 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight"}} 
                    placeholder="نام" 
                />
              </Col>
              <Col>
                <Form.Control 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName} 
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight"}} 
                  placeholder="نام خانوادگی"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.education}
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight" , marginTop : "12%"}} 
                  placeholder="تحصیلات"
                />
              </Col>
              <Col>
                <Form.Control 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.educationcity}
                  style={{
                    backgroundColor : "rgb(32, 49, 59" ,
                    color : "wight" , 
                    marginTop : "12%" , 
                  }} 
                  placeholder="شهر محل تحصیل"  
                />
              </Col>
            </Row>
            <Row>
              <Col>
              <Form.Select aria-label="Default select example" 
                value={formik.values.province}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{backgroundColor : "rgb(32, 49, 59" , color : "wight" , marginTop : "12%"}} 
              >
                {Object.keys(iranstates).map((item, index) => {
                  <option 
                    value={item.name}  
                    key={index}
                  >
                      {item.name}
                  </option>
                })}
              </Form.Select>
              <p>
                {formik.errors.province && formik.touched.province && formik.errors.province}
              </p>
              </Col>
              <Col>
              <Form.Select aria-label="Default select example" 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.borncity}
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight" , marginTop : "12%"}} 
                  placeholder="شهر محل تولد"  type=''
                />
              </Col>
            </Row>
            <Form.Group controlId="formGroupEmail">
                <Form.Control 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight" , marginTop : "4%"}} 
                  type="email" 
                  placeholder="پست الکترونیک" 
                />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Control 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight" , marginTop : "4%"}} 
                  type="password" 
                  placeholder="کلمه عبور" 
                />
            </Form.Group>
            <Button 
              disabled={formik.isSubmitting}
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
