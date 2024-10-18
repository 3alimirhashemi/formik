import React, { useEffect, useState } from "react"
import {FastField} from 'formik';
import jMoment from "moment-jalaali";

const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
const months = [
    {id: 1 , value: "فروردین"},
    {id: 2 , value: "اردیبهشت"},
    {id: 3 , value: "خرداد"},
    {id: 4 , value: "تیر"},
    {id: 5 , value: "مرداد"},
    {id: 6 , value: "شهریور"},
    {id: 7 , value: "مهر"},
    {id: 8 , value: "آبان"},
    {id: 9 , value: "آذر"},
    {id: 10 , value: "دی"},
    {id: 11 , value: "بهمن"},
    {id: 12 , value: "اسفند"},
]

const Date = ({formik , name ,icon, label})=>{
    const [day , setDay] = useState()
    const [month , setMonth] = useState()
    const [year , setYear] = useState()
    const [years , setYears] = useState([])
    const [showConfig , setShowConfig] = useState(false)
    useEffect(()=>{
        let now = jMoment();
        setDay(now.jDate());
        setMonth(now.jMonth());
        setYear(now.jYear());
    },[])

    const handelShowConfigDate = ()=>{
        for (let index = parseInt(year)-30 ; index <= parseInt(year); index++){
            setYears((oldYears)=>{
                return[...oldYears , index]

            })
        }

        setShowConfig(true);
    }
    const handelSelectInputData = (e)=>{
        e.stopPropagation()
        formik.setValues({
            ...formik.values,
            [name]:`${day} / ${month} / ${year}`
        })
        setShowConfig(false)
    }
    return(
        <div className={`wrap-input100 validate-input pointer ${formik.errors[name] && formik.touched[name] ?'alert-validate': null}`} 
        data-validate={formik.errors[name]} onClick={handelShowConfigDate}>

                <FastField className="input100" type="text" name={name} placeholder={label} disabled />
                <span className="focus-input100" data-placeholder={icon}></span>

                {showConfig ? (
                                    <div className="row w-100 m-0 p-0">
                                    <div className="col-3 d-flex justify-content-center align-items-center p-0">
                                        <select value={month} onChange={(e)=>setDay(e.target.value)}>
                                            {days.map(d=>(
                                                <option id={d} value={d}>{d}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-3 d-flex justify-content-center align-items-center p-0">
                                        <select value={month} onChange={(e)=>setMonth(e.target.value)}>
                                            {months.map(m=>(
                                                <option id={m.id} value={m.value}>{m.value}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-3 d-flex justify-content-center align-items-center p-0">
                                        <select value={year} onChange={(e)=>setYear(e.target.value)}>
                                            {years.map((y , i)=>(
                                                <option id={i} value={y}>{y}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-3 d-flex justify-content-center align-items-center p-0 pointer" >
                                        <i className="fa fa-check text-success pointer" onClick={handelSelectInputData}></i>
                                    </div>
                                </div>
                ) : null}


        </div>
    )
}
export default Date