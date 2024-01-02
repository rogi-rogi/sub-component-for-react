import BarChart from "./BarChart";
import { Chart } from "./ChartStyle";
import { ChartElement } from "./types";

const ChartPage: React.FC = () => {
  const info: ChartElement = { name: "name", progress: 65 };
  return (
    <Chart>
      <BarChart info={info} />
    </Chart>
  );
};

export default ChartPage;
