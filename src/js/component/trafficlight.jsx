import React, {useState} from "react";

const TrafficLight = ()=> {

    const [color_red, setColor_red] = useState("bg-danger opacity-75")
    const [color_yellow, setColor_yellow] = useState("bg-warning opacity-75")
    const [color_green, setColor_green] = useState("bg-success opacity-75")

    let colors_main = [color_red, color_yellow, color_green]

    const colors_screen = colors_main.map((item)=>
    <div className="p-1" style={{borderRadius:"50%"}}>
        <div onClick={button_color} className={"my-2 "+item} style={{width: "70px", height:"70px", borderRadius:"50%"}}></div>
    </div>)

    function button_color (){
        let [item_aux_red, item_aux_yellow, item_aux_green] = document.getElementsByClassName("my-2")
        
        // let item_aux_blue = document.getElementsByClassName("my-2 bg-primary")[0]
        
        let [aux_light_red, aux_light_yellow, aux_light_green] = document.getElementsByClassName("p-1")

        item_aux_red.addEventListener("click", ()=>{
            
            aux_light_red.classList.add("bg-white")

            aux_light_yellow.classList.remove("bg-white")
            aux_light_green.classList.remove("bg-white")
            //
            if(color_red === "bg-danger opacity-75"){
                setColor_red("bg-danger")

                setColor_green("bg-success opacity-75")
                setColor_yellow("bg-warning opacity-75")
            } 
        })

        item_aux_yellow.addEventListener("click", ()=>{

            aux_light_yellow.classList.add("bg-white")

            aux_light_red.classList.remove("bg-white")
            aux_light_green.classList.remove("bg-white")
            //
            if(color_yellow === "bg-warning opacity-75"){
                setColor_yellow("bg-warning")

                setColor_green("bg-success opacity-75")
                setColor_red("bg-danger opacity-75")
            } 
        })

        item_aux_green.addEventListener("click", ()=>{

            aux_light_green.classList.add("bg-white")

            aux_light_red.classList.remove("bg-white")
            aux_light_yellow.classList.remove("bg-white")
            //
            if(color_green === "bg-success opacity-75"){
                setColor_green("bg-success")

                setColor_red("bg-danger opacity-75")
                setColor_yellow("bg-warning opacity-75")
            } 
        })

       
    }

    return (
        <div className="d-flex flex-column">
            <div className="m-auto">
                <div className="m-auto bg-dark" style={{width: "20px", height:"50px"}}>
                </div>
                <div className="bg-dark" style={{padding: "10px"}}>
                    {colors_screen}
                </div>
            </div>
        </div>
    );
}

export default TrafficLight;