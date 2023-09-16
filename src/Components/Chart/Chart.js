import React from "react";
import Card from "../Card/Card";
import "../Card/Card.css";
import "./Chart.css";
import BarGraph from "./BarGraph.js"

const Chart = ({ monthsFrequencies }) => {
    const heghest = 10;
    let height = ((monthsFrequencies[2]/heghest)*100).toString() +"%";
    return (
        <div className="chart">
            <BarGraph monthFre={monthsFrequencies[0]}/>
            <BarGraph monthFre={monthsFrequencies[2]} />
            {/* <BarGraph monthFre={monthsFrequencies[2]} />
            <BarGraph monthFre={monthsFrequencies[3]} />
            <BarGraph monthFre={monthsFrequencies[4]} />
            <BarGraph monthFre={monthsFrequencies[5]} />
            <BarGraph monthFre={monthsFrequencies[6]} />
            <BarGraph monthFre={monthsFrequencies[7]} />
            <BarGraph monthFre={monthsFrequencies[8]} />
            <BarGraph monthFre={monthsFrequencies[9]} />
            <BarGraph monthFre={monthsFrequencies[10]} />
            <BarGraph monthFre={monthsFrequencies[11]} /> */}
        </div>
    );

}

export default Chart;