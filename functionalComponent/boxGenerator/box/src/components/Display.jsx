import React from 'react'

const Display = (props) => {
  return (
    <div>
        {
                props.boxes.map((box,id)=>{
                    return(
                        <div key={id} style={{height:'200px',
                              width:'200px',
                            background:box,
                            margin:'10px',
                            display:'inLine-Block'
                            }}>
                               
                                </div>
                    )
                })
        }
    </div>
  )
}

export default Display