import React from "react";
import "./BarGraph.css";


const Graph = ({ monthFre,monthFre1 }) => {
    let he = monthFre;
    const heghest = 10;
    let height = (((he/ heghest) * 100) + "%").toString();
    let neh = height;
    // console.log(neh);
    // console.log(monthFre);
    let ho = 10. +"";
    // console.log(ho);
    return (
        <div>
            <div className="bar-graph_body">
                <div className="bar-graph_inner" style={{ height: {ho} }}>
                </div>
            </div>


        </div>
    );

}

export default Graph;