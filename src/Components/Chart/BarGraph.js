import React from "react";
import "./BarGraph.css";


const Graph = ({ monthFre, monthFre1, level }) => {
    let he = monthFre;
    const heghest = 10;
    let height = (((he / heghest) * 100) + "%").toString();
    let neh = height;
    console.log(typeof (neh) + neh);
    // console.log(neh);
    // console.log(monthFre);
    let ho = 40 + "%";
    console.log(typeof (ho));
    // console.log(ho);
    return (
        <div className="bar-graph-body">
            <div className="bar-style">
                <div className="bar-fill" style={{ height: neh }}></div>
            </div>
            <level className = "bar-graph-level">
                {level}
            </level>
        </div>
    );

}

export default Graph;