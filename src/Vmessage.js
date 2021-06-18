import React from 'react'
import Chat from './Chat'
import Sidebar from './Sidebar'
import "./Vmessage.css"

function Vmessage() {
    return (
        <div className="vmessage">

         {/*sidebar*/}  
         <Sidebar></Sidebar>
         {/*chat */}
         <Chat></Chat>
        </div>
    )
}

export default Vmessage
