import React from "react";
import "../Card/Card.css";
import "./Chart.css";
import BarGraph from "./BarGraph.js"



const Chart = ({ monthsFrequencies }) => {
    const heghest = 10;
    let height = ((monthsFrequencies[2] / heghest) * 100).toString() + "%";
    console.log(monthsFrequencies[0]);
    return (
        <div className="chart-body">
            <div className="chart">
                <BarGraph monthFre={monthsFrequencies[0]} level={"Jan"} />
                <BarGraph monthFre={monthsFrequencies[1]} level={"Feb"} />
                <BarGraph monthFre={monthsFrequencies[2]} level={"Mar"} />
                <BarGraph monthFre={monthsFrequencies[3]} level={"Apr"} />
                <BarGraph monthFre={monthsFrequencies[4]} level={"May"} />
                <BarGraph monthFre={monthsFrequencies[5]} level={"Jun"} />
                <BarGraph monthFre={monthsFrequencies[6]} level={"Jul"} />
                <BarGraph monthFre={monthsFrequencies[7]} level={"Aug"} />

                <BarGraph monthFre={monthsFrequencies[8]} level={"Sep"} />
                <BarGraph monthFre={monthsFrequencies[9]} level={"Oct"} />
                <BarGraph monthFre={monthsFrequencies[10]} level={"Nov"} />
                <BarGraph monthFre={monthsFrequencies[11]} level={"Dec"} />
            </div>
        </div>
    );

}

export default Chart;