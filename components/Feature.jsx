import {BsFillChatLeftTextFill} from "react-icons/bs";
import {FaChartBar} from "react-icons/fa";
import {HiLightBulb} from "react-icons/hi";
import data from "../data/data";
import parse from 'html-react-parser';

const Feature = () => {
    let cardData = data.feature.card
    let cards = cardData.map((card)=>(
        <div className="flex flex-col mr-10 border-2 text-blue border-blue w-84 min-h-96 p-10 border-dashed justify-start items-start">
            {card.image}
            <h1 className="text-3xl font-bold my-5">{card.title}</h1>
            <p>{card.desc}</p>
        </div>
    ))
    return ( 
    <div id="service" className="min-h-screen h-screen w-full snap-center flex flex-col justify-center items-start text-blue">
        <h1 className="ml-24 mb-5 font-bold text-2xl">Services</h1>
        <h1 className="ml-24 mb-10 text-5xl font-bold">{data.feature.title}</h1>
        <div className="text-blue bg-black flex flex-row justify-center items-baseline ml-24">
        {cards}
        </div>
    </div>
    );
}
 
export default Feature;