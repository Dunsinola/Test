import React from 'react'
import "./Footer.css"
import {useState} from 'react';
import { convertCurrency } from '../redux/actions/currencyActions';
import {  useDispatch } from "react-redux";

export default function Footer()


{
  const dispatch = useDispatch();

const [value,setValue]=useState();
const handleSelect=(e)=>{

  setValue(e.target.value)
  console.log(value);
  dispatch(
convertCurrency(value)
  )
}


  return (

    <div className='footer'>
        
    <div className="copy">                                                                                                                                                                                                                                                                                                                                                                   
        <p>22 DivHire</p>
    </div>

    <div className="lang">
        <form >
       
                <select onChange={handleSelect} id="currency" name="cur">
                    <option value="55686486">Naira</option>
                    <option value="5686487">USD</option>
                    <option value="5686488">EUR</option>
                    <option value="5686489">GBP</option>
                    <option value="5686490">CAD</option>
                    <option value="5686491">AED</option>
                    <option value="5686492">AUD</option>
                    <option value="5686493">INR</option> 
                    <option value="5686494">ZAR</option>
                    <option value="5686495">NZD</option>
                    <option value="5686496">BRL</option>
                    <option value="5686497">GHS</option>
                    <option value="5686498">KES</option>
                    <option value="5686499">RWF</option>

   
                </select>
            
        </form>
    </div>

    </div>
  )
}
