import { useState } from 'react';
import './style.scss'
import { API } from '../../../Api'
function Import({status,close}) {
    const [valueInput,setValueInput] = useState({
        name:String,
        link:String,
    })
    const ImportSong = () => {
        API.post('/song',{
            id:Math.random(0,9999999999),
            ...valueInput
        })
        setValueInput({
            name:String,
            link:String
        })
    }
    return ( 
        <div className = {`wrapper-import  ${status === true && 'show-import'}`}>
        <div className={`box-gray`}></div>
            <div className={`Form-Import`}>
                <div className = "Form-Import-Title">
                    <p>Import Music</p>
                    <button onClick={close}>Close</button>
                </div>
                <div className="Form-Import-Content">
                    <input type="text" value={valueInput["name"]} placeholder='Please insert your song...' onInput={(e)=>{
                           setValueInput({
                            ...valueInput,
                            name:e.target.value
                        })
                    }}/>
                    <input type="text" value={valueInput["link"]} placeholder='Please insert your link...' onInput={(e)=>{
                        setValueInput({
                            ...valueInput,
                            link:e.target.value
                        })
                    }}/>
                </div>
                <div className="Form-Import-Button">
                    <button onClick={ImportSong}>Import</button>
                </div>
            </div>
            </div>
     );
}

export default Import;