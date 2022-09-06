import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <div className='footer'>
        
    <div className="copy">                                                                                                                                                                                                                                                                                                                                                                   
        <p>22 DivHire</p>
    </div>

    <div className="lang">
        <form >
            
                <select id="Currency" name="currency">
                    <option value="volvo">Naira</option>
                    <option value="saab">pounds</option>
                    <option value="fiat">yen</option>
                    <option value="audi">Audi</option>
                </select>
            
        </form>
    </div>

    </div>
  )
}
