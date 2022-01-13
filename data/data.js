import {BsFillChatLeftTextFill} from "react-icons/bs";
import {FaChartBar} from "react-icons/fa";
import {HiLightBulb} from "react-icons/hi";

const data = {
    name:'Company Name',
    tag:'Company Tagline',
    hero:{
        titleArray:['Advisory', 'DApp', 'Education', 'Consulting'],
        titleArrayHTML: ['<span style="color: #dbb381; margin:0">Word 1</span>', '<span style="color: #b9e1ec; margin:0">Word 2</span>', '<span style="color: #d6db81; margin:0">Word 3</span>', '<span style="color: #dbb381; margin:0">Word 4</span>'],
    },
    feature:{
        title:'We are best at these:',
        card: [
            {
                image: <BsFillChatLeftTextFill className="text-6xl bg-blue my-3" />,
                title: 'Feature 1',
                desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam explicabo quisquam quia necessitatibus facere eveniet iusto, esse omnis dignissimos odio tenetur sit modi nemo? Doloremque reprehenderit itaque maxime veniam delectus!",
            },
            {
                image: <FaChartBar className="text-6xl bg-blue my-3"/>,
                title: 'Feature 2',
                desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam explicabo quisquam quia necessitatibus facere eveniet iusto, esse omnis dignissimos odio tenetur sit modi nemo? Doloremque reprehenderit itaque maxime veniam delectus!",
            },
            {
                image: <HiLightBulb className="text-6xl bg-blue my-3"/>,
                title: 'Feature 3',
                desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam explicabo quisquam quia necessitatibus facere eveniet iusto, esse omnis dignissimos odio tenetur sit modi nemo? Doloremque reprehenderit itaque maxime veniam delectus!",
            },
        ],
    },
}

export default data;
