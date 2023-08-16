import React from 'react'

function Gamecard_item(props) {
  const {...style_for_placement} = props.style_for_placement;
  
  return (
    <div className={`flex border border-black w-full h-full ${props.font ?? ""}`} style={style_for_placement}>
        {
          props.property_details["f_Card_Color"] && 
          <div className='flex-[1]' style={{backgroundColor: props.property_details["f_Card_Color"]}}></div>
        }
        <div className="flex flex-[2] flex-col justify-evenly">
          <div>{props.property_details["City"]}</div>
          {
            props.property_details["Purchase_Price"] &&
            <div>{props.property_details["Purchase_Price"]}</div>
          }
        </div>
    </div>
  )
}
export default Gamecard_item