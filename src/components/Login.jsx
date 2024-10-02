import { Formik , Form } from "formik";
import React from "react";
import * as Yup from "yup";
import Formikcontrol from "./FormikComponents/FormikControl";



const Login = () => {
    const initialValues = {
        email:'',
        password:''
    }
    const onSubmit = (values)=>{
        console.log(values);
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('ایمیل را وارد نمایید.').email('فرمت مناسب نیست'),
        password: Yup.string().required('رمز عبور را وارد نمایید.')
        .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,'رمز عبور مناسب وارد نمایید')
    })
    
    return(

        <div className="limiter">
            <div className="container-login100" style={{backgroundImage: 'url("../auth/images/bg-01.jpg")'}} >
                <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                >
                    {formik =>{
                        console.log(formik);
                        return(
                            <div className="wrap-login100 p-t-30 p-b-50" >
                                <span className="login100-form-title p-b-41">
                                    فرم ورود
                                </span>
                                <Form className="login100-form validate-form p-b-33 p-t-5">

                                    <Formikcontrol
                                    formik={formik}
                                    control='input'
                                    type='email'
                                    name='email'
                                    icon='&#xe82a;'
                                    label='ایمیل'
                                    />

                                    <Formikcontrol
                                    formik={formik}
                                    control='input'
                                    type='password'
                                    name='password'
                                    icon="&#xe80f;"
                                    label='رمز عبور'
                                    />
            
                                    <div className="container-login100-form-btn m-t-32">
                                        <button className="login100-form-btn">
                                            ورود
                                        </button>
                                    </div>
            
                                </Form>
                            </div>
                        )
                     }
                        
                    }
                </Formik>
            </div>
	    </div>

    )
}
export default Login