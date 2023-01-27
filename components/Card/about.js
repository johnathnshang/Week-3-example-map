import { withRouter } from "next/router";
export default function Card ({
    firstName="none",
    gpa="none",
    graduated="none",
    studentNumber="none",
    font="0",
    image="icon/personTwo.png"
}) {
    return(
        <div style={{
            backgroundColor: "darkblue", 
            fontSize: font,
            border: "2px solid",
            display: "flex",
            alignItems: "center",
            borderRadius: "30px",
            width: "800px",
            padding: "20px",
            margin: "20px",
            fontWeight: "800"
        }}>
            <div style={{
                marginRight: "20px",
                marginLeft: "20px"
            }}>
                {<img src={image}/>}
            </div>
            <div style={{
                padding: "10px",
                width: "10px",
                color: "white",
                textAlign: "justify",
            }}>Student Number:{studentNumber}</div>
            <div style={{
                padding: "10px",
                textAlign: "right",
                width: "100%"
            }}>Graduated:{graduated}</div>
        </div>
    )
}
