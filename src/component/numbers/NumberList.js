import React, {Component} from "react";

import NumberItem from "./NumberItem";
import Image from '../../static/groupe.jpg'

const Numbers=[
    {
        number:"+20,000",
        numberInfos:"PASSIONNÉS DU DIGITAL"
    },
    {
        number:"+500",
        numberInfos:"ÉTUDIANTS DEPUIS LE DÉMARRAGE EN AOÛT 2016"
    },
    {
        number:"+300",
        numberInfos:"PRODUITS DÉVELOPPÉS"
    },
    {
        number:"+30",
        numberInfos:"INSTRUCTEURS GAME, WEB ET MOBILE"
    },
    {
        number:"+50",
        numberInfos:"SPEAKERS"
    },
    {
        number:"400m²",
        numberInfos:"DE HACKERSPACE AU COEUR DU LAC 1"
    }
]


const style = {
	backgroundImage : `url(${Image})` ,
	minHeight : "550px" ,
	backgroundSize : "cover" ,
	backgroundRepeat : "no-repeat"
}
class NumberList extends Component{
	render(){
		return(
			
				<div  className="bg" style={style}	alt="group">
                   
					<span className="programme" style={{color:"white"}}>QUELQUES CHIFFRES<br/></span>
						<div className="rowNumber"  >
							{Numbers.map(item=>
								<NumberItem
									number={item.number}
									infoNumber={item.numberInfos}
								/>
							)}
						</div>
                        
				</div>
			
			)
	}
}
export default NumberList