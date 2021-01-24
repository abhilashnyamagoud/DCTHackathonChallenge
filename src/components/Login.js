import React, { useState } from 'react';
import {Row, Col, Card, Form} from 'react-bootstrap';
import { useFormik } from 'formik';
import {Redirect} from 'react-router-dom'
import Upload from './Upload';
import swal from 'sweetalert'

const Login=(props)=>{
const [toggle,setToggle]=useState(false)
const[errorToggle,setErrorToggle]=useState(false)
const users=[{email:'anirudda@gmail.com',password:'hello@123'},{
    email:'harish@gmail.com',password:'hello@121'
}]

    const validate=values=>{
        const errors={};
        if(!values.email){
            errors.email='Required';
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email='Invalid Email Address'
        }
        if(!values.password){
           errors.password='Required'
        }else if(values.password.length>10 || values.password.length<4 ){
            errors.password='Must Be 4 to 10 Characters'
        }
        return errors;
    }

const formik=useFormik({
    initialValues:{
        email:'',
        password:''
    },
    validate,
    onSubmit:values=>{
        console.log(values)
        users.map((ele)=>{
            if(ele.email==values.email&&ele.password==values.password){
                swal({
                    title: "Good job!",
                    text: "You Logged-In!",
                    icon: "success",
                  });
                setToggle(!toggle)
            }else{
                setErrorToggle(true)
            }
        })
        
    },
});
    return(
        
          <Row>
              <Col>
              <Card>
                  <Card.Header>
                <Card.Title>Login</Card.Title>
                  </Card.Header>
                  <Card.Body>
                      <Card.Title>Please Enter Your Valid Datails</Card.Title>
                      <hr/>
                      <Form onSubmit={formik.handleSubmit}>
                          <Row>
                              <Col md={6}>
                                  <Form.Group>
                                      <Form.Label>Email</Form.Label>
                                      <Form.Control type='email' id='email' placeholder='Enter Your Email' name='email' value={formik.values.email} onChange={formik.handleChange} />
                                      {formik.errors.email && <Form.Text className='text-danger' >{formik.errors.email}</Form.Text> }
                                  </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' id='password' placeholder='Enter Your Password' name='password' value={formik.values.password} onChange={formik.handleChange} />
                                    {formik.errors.password && <Form.Text className='text-danger' >{formik.errors.password}</Form.Text> }
                                </Form.Group>
                              </Col>
                              <Col>
                              {
                                  errorToggle&&<div className='mt-5'>
                                      <h2 className='text-danger'>You do Not Have Access  </h2>
                                      <p className='text-success'>Please Use Valid Credentials</p>
                                  </div> 
                              }
                              </Col>
                              </Row>
                              <Row>
                              <Col md={3}>
                                  <Form.Group>
                                      <Form.Control className='btn btn-success' type='submit' value='submit' />
                                  </Form.Group>
                              </Col>
                              </Row>
                      </Form>
                  </Card.Body>
              </Card>
              </Col>
              {
                  toggle && <Redirect to='/upload' />
              }
              </Row>  
        
    )
}


export default Login