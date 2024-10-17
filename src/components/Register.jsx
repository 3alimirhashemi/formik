import { Formik , Form } from "formik";
import React from "react";
import * as Yup from "yup";
import Formikcontrol from "./FormikComponents/FormikControl";

const initialValues = {
    username:'',
    firstname:'',
    lastname:'',
    email:'',
    mobile:'',
    password:'',
    confirm_pass:'',
    auth_mode:'mobile'
}
const onSubmit = (values)=>{
    console.log(values);
    alert('ثبت نام با موفقیت انجام شد.')
}
const validationSchema = Yup.object({

    email: Yup.string().when('auth_mode',{
        is:(value) => value === "email",
        then:(schema) => schema.required("ایمیل را وارد نمایید.").email("فرمت مناسب نیست"),
    }),

    mobile: Yup.number().when('auth_mode' , {
        is:(value) => value === "mobile",
        then:(schema) => schema.required("تلفن خود را وارد نمایید"),
    }),
    username: Yup.string().required('نام کاربری خود را وارد نمایید')
    .min(8,'بالای ۸ کاراکتر وارد کنید')
    .max(15,'تعداد حروف کمتر از ۴۵ کاراکتر'),

    firstname:Yup.string().matches(/^[ابپتثجچهخدذرزسشصظطضعغفقک@-_.:گلمنوهیژئي\s0-9a-zA-Z]+$/, 'فقط از حروف فارسی و لاتین و اعداد و @ : - _ . استفاده کنید'),
    lastname: Yup.string().matches(/^[ابپتثجچهخدذرزسشصظطضعغفقک@-_.:گلمنوهیژئي\s0-9a-zA-Z]+$/, 'فقط از حروف فارسی و لاتین و اعداد و @ : - _ . استفاده کنید'),

    
    password: Yup.string().required('رمز عبور را وارد نمایید.')
    .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,'رمز عبور مناسب وارد نمایید'),
    confirm_pass: Yup.string().required('رمز عبور را مجددا وارد نمایید.')
    .oneOf([Yup.ref('password')],'فیلد رمز عبور باهم برابر نیست.')
})
const authMode = [
    {id: 'mobile' , value: 'موبایل'},
    {id: 'email' , value: 'ایمیل'}
]

const Register = () => {
    
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
                                   فرم ثبت نام
                                </span>
                                <Form className="login100-form validate-form p-b-33 p-t-5">

                                    <Formikcontrol
                                    formik={formik}
                                    control='input'
                                    type='text'
                                    name='username'
                                    icon='&#xe890;'
                                    label='نام کاربری'
                                    />

                                    <Formikcontrol
                                    formik={formik}
                                    control='input'
                                    type='text'
                                    name='firstname'
                                    icon='&#xe82a;'
                                    label='نام'
                                    />

                                    <Formikcontrol
                                    formik={formik}
                                    control='input'
                                    type='text'
                                    name='lastname'
                                    icon='&#xe82b;'
                                    label='نام خانوادگی'
                                    />


                                    <Formikcontrol
                                    formik={formik}
                                    control='radio'
                                    label='نحوه ثبت نام:'
                                    name='auth_mode'
                                    options={authMode}
                                    icon="&#xe83b;"
                                    />

                                    {
                                        formik.values.auth_mode === 'mobile' ?
                                        (

                                            <Formikcontrol
                                            formik={formik}
                                            control='input'
                                            type='number'
                                            name='mobile'
                                            icon="&#xe83b;"
                                            label='موبایل'
                                            />
                                            

                                        ):(
                                            <Formikcontrol
                                            formik={formik}
                                            control='input'
                                            type='email'
                                            name='email'
                                            icon='&#xe818;'
                                            label='ایمیل'
                                            />
                                        )
                                    }


                                    <Formikcontrol
                                    formik={formik}
                                    control='input'
                                    type='password'
                                    name='password'
                                    icon="&#xe80f;"
                                    label='رمز عبور'
                                    />

                                    <Formikcontrol
                                    formik={formik}
                                    control='input'
                                    type='password'
                                    name='confirm_pass'
                                    icon="&#xe838;"
                                    label='تایید رمز عبور'
                                    />
            
                                    <div className="container-login100-form-btn m-t-32">
                                        <button type="submit" className="login100-form-btn">
                                           ثبت نام
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
export default Register