import React, { useState } from 'react'

const FileExplorer = ({ data }) => {
    // data containes one root which has property as - 
    // name, type ,children
    // the child component again has these 3 above property
    
    const [open,setopen] = useState(false) //State for detecting the folder is open ot close
    return (
        <div className='container'>
            <h3><span onClick={()=>setopen(!open)}>
                    {/* condtional rendering for folder or file */}
                    {data.type==='folder'?(open?"📂":"📁"):"📄"}
                </span>
                {data.name}
            </h3>
            {
                // did something like recursion same thing is repeated
                open&&data?.children?.map((child, index) => {
                    return <FileExplorer key={index} data={child} />
                })
            }
        </div>
    )
}

export default FileExplorer