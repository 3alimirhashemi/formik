import { FastField } from 'formik';
import React, { Fragment } from 'react';

const Radio = (props) => {
    const {name,label,options} = props;
    return (
        <>
        <div className="radio-input mt-5 mr-5">
        <label htmlFor={name} className="">{label}</label>
            <FastField className="form-control" id={name} name={name}>
                {({field})=>{
                    console.log(field);
                    return options.map(o=>(
                        <Fragment key={o.id}>
                            <input 
                            className='form-check-input me-4'
                            type="radio" 
                            id={`${o.id}`}
                            {...field}
                            value={o.id}
                            checked={field.value === o.id}
                            />
                            <label htmlFor={o.id} className="mx-1 ms-4">{o.value}</label>
                        </Fragment>
                    ))
                }}
            </FastField>
        </div>
        </>
    );
}

export default Radio;