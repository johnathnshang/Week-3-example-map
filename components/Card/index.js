import { withRouter } from "next/router";

export default function Card({
    degree = "none",
    colour = "purple",
    font = "0",
    fontColour = "white",
    image = "icon/personTwo.png"
}) {
    return(
        <div style={{
            backgroundColor: colour, 
            fontSize: font,
            border: "2px solid",
            display: "flex",
            alignItems: "center",
            borderRadius: "30px",
            width: "600px",
            padding: "20px",
            margin: "20px",
            fontWeight: "800"
        }}>

            <div style={{
                marginRight: "50px",
                marginLeft: "10px"
            }}>
                {
                colour == "red" ? <img src = {'icon/person.png'} width = '50' /> :
                colour == "blue" ? <img src = {'icon/personThree.png'} width = '50' /> :
                                            <img src = {image} width = '50' />    
                }
            </div>
            <div style={{
                backgroundColor: "darkBlue",
                borderRadius: "20px",
                padding: "20px",
                display: 'flex',
                flexDirection: "column",
                justifyContent: "center",
                width: "500px"
            }}>
                {degree}
            </div>
        </div>
    )
}