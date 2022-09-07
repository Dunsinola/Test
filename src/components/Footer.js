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
        <label for="currency">Coming soon...</label>
                <select id="currency" name="currency">
                    <option value="Naira">Naira</option>
                    <option value="Pound">Pound</option>
                    <option value="Euro">Euro</option>
                    <option value="Dollar">Dollar</option>
                </select>
            
        </form>
    </div>

    </div>
  )
}
