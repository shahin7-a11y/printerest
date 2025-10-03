import { useState } from "react"
import "./Inputbox.css"

function Inputbox({ placeholder, type, setform ,width,height}) {

    function handlechainge(event) {
        setform(event.target.value)

    }

    return (
        <input style={{ borderRadius: "7px", padding: "8px", border: "1px solid grey",width:width,height:height }} type={type}
            placeholder={placeholder} onChange={handlechainge}></input>
    )
}
export { Inputbox }