import React from 'react'
import { card_details, colors_of_properties } from '../data/cards_details';
import Gamecard_item from './Gamecard_item';

function Gamecard() {
  const make_style_for_placement = (eleNo) => {
    let resulting_style = {};
    if (eleNo <= 9)
      resulting_style = {
        gridRow: `1 / span 2`, gridColumn: `${eleNo + 2} / span 1`, rotate: "180deg", flexDirection:"column",
      };
    else if (eleNo <= 18)
      resulting_style = {
        gridRow: `${(eleNo - 9) + 2} / span 1`, gridColumn: `12 / span 2`, rotate: "180deg", flexDirection:"row-reverse",
      };
    else if (eleNo <= 27)
      resulting_style = {
        gridRow: `12 / span 2`, gridColumn: `${28 - eleNo + 2} / span 1`, rotate: "180deg", flexDirection:"column",
      };
    else if (eleNo <= 36)
      resulting_style = {
        gridRow: `${(37 - eleNo) + 2} / span 1`, gridColumn: `1 / span 2`,rotate: "180deg",flexDirection:"row",
      };

    return resulting_style;
  }
  const addFourCorners = ()=> {
    let entriess = [
      <Gamecard_item key={"Go"} property_details={{City:"Go"}} style_for_placement={{gridRow:`1 / span 2` , gridColumn:`1 / span 2`, rotate:"180deg", fontSize:"medium"}}/>,
      <Gamecard_item key={"Jail"} property_details={{City:"Jail"}} style_for_placement={{gridRow:`1 / span 2` , gridColumn:`12 / span 2`, rotate:"180deg", fontSize:"medium"}}/>,
      <Gamecard_item key={"Free Parking"} property_details={{City:"Free Parking"}} style_for_placement={{gridRow:`12 / span 2` , gridColumn:`12 / span 2`, rotate:"180deg", fontSize:"medium"}}/>,
      <Gamecard_item key={"Go To Jail"} property_details={{City:"Go To Jail"}} style_for_placement={{gridRow:`12 / span 2` , gridColumn:`1 / span 2`, rotate:"180deg", fontSize:"medium"}}/>,
    ];
    return entriess;
  }
  const function_call = () => {
    let entriess = [];
    const dd = Object.entries(card_details["cities"]);
    console.log(dd.length);
    for (let i = 0; i < dd.length; i++) {
      const eleNo = i+1;
      const [key, { City, Card_Color, Purchase_Price }] = dd[i];
      const style = make_style_for_placement(eleNo);
      let f_Card_Color = colors_of_properties[Card_Color];
      
      entriess.push(<Gamecard_item key={key} property_details={{ City, f_Card_Color, Purchase_Price, eleNo }} style_for_placement={style} />);
    }

    
    return [...entriess, addFourCorners()];
  }
  return (
    <div className='grid h-auto text-center' style={{ fontSize: "0.6rem", gridTemplateColumns: "repeat(13, 1fr)", gridTemplateRows: "repeat(13, 1fr)", gridAutoRows: "calc(100%/13)", gridAutoColumns: "calc(100%/13)", aspectRatio: "1", rotate:"180deg"}}>
      {
        function_call()
      }
      {/* <p style = {{gridColumn: "1 / span 2", gridRow: "1 / span 1",flexDirection:"row-reverse" , fontSize:""}} ></p> */}
    </div>
  )
}
// const citiesList = [
//   "Rasayani", "Karjat","Turbhe", "Kopar Kairane", "Ghansoli", "Airoli", 
//   "Uran", "Ulwe", "Pushpak Nagar","Dronagiri", "Taloja", "Taloja-MIDC", "Kalamboli", 
//   "New Panvel", 
//   "Mansarovar","Juinagar", "Seawoods", "Sanpada", "CBD Belapur", "Nerul","Vashi","Kharghar"
// ];
export default Gamecard