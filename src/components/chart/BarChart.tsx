import styled from "styled-components";
import { Flex } from "../GlobalStyle";
import { ChartElement } from "./types";

interface BarChartProps {
  info: ChartElement;
}

const BarChart: React.FC<BarChartProps> = ({ info }) => {
  return (
    <>
      <ChartWrapper>
        <ProgressBox>
          <Progress $progress={info.progress} />
        </ProgressBox>
        <ChartInfoWrapper>
          <ChartNameText>{info.name}</ChartNameText>
          <ProgressText>{`${info.progress}%`}</ProgressText>
        </ChartInfoWrapper>
      </ChartWrapper>
    </>
  );
};

const ChartWrapper = styled(Flex)`
  width: 380px;
  height: 130px;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
`;
const ProgressBox = styled.div`
  width: 85%;
  background-color: white;
  border-radius: inherit;
  overflow: hidden;
  transition: width 2s;
  box-shadow: inset 0px 12px 25px 5px rgba(0, 0, 0, 0.4);
`;
const Progress = styled.div<{ $progress: number }>`
  height: 50px;
  background-color: skyblue;

  transform: translateX(
    ${(props) => `${-100 + props.$progress <= 0 ? -100 + props.$progress : 0}%`}
  );
  transition: transform 1s;
`;

const ChartInfoWrapper = styled(Flex)`
  justify-content: space-between;
  height: 30px;
  width: 300px;
  color: black;
`;

const ChartNameText = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
const ProgressText = styled.div`
  font-size: 20px;
`;

export default BarChart;
