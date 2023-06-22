import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // console.log(props.dataPoints);
  console.log("My New Log to test git commit");
  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />;
      })}
    </div>
  );
};

export default Chart;
