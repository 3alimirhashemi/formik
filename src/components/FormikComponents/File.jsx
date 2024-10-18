import React from "react"
import {FastField} from 'formik';

const File = ({formik , name ,icon, label})=>{
    return(
        <div className={`wrap-input100 validate-input ${formik.errors[name] && formik.touched[name] ?'alert-validate': null}`} 
        data-validate={formik.errors[name]}>

        <span className="focus-input100" data-placeholder={icon}></span>

        <div class="Neon Neon-theme-dragdropbox">
           
            <input type="file" name={name} className="input-imgs" id="filer_input2" multiple="multiple" 
            value={formik.values[name] ? formik.values[name].name : ""} placeholder={label}
                onChange={ 
                    e=>{formik.setFieldValue(name , e.target.value[0])

                }} />
            <div class="Neon-input-dragDrop">
                <div class="Neon-input-inner">
                    <div class="Neon-input-icon">
                        <i class="fa fa-file-image-o"></i>
                    </div>
                    <div class="Neon-input-text">
                        <h2 className="mb-3">تصویر پروفایل</h2>
                        <h3>تصویر را رها کنید</h3> 
                        <span className="">یا</span>
                    </div>
                        <button className="Neon-input-choose-btn blue">انتخاب تصویر</button>
                </div>
            </div>
        </div>
        </div>
    )
}
export default File