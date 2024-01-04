import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the Bar Chart
const BarChartContainer = styled.div`
  text-align: center;
  margin: 20px;
  font-family: 'Roboto', sans-serif;
`;

const ChartTitle = styled.h2`
  font-size: 2rem;
  color: #4a4a4a;
  margin-bottom: 20px;
`;

const BarsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 300px;
`;

const Bar = styled.div`
  height: ${(props) => props.height}px;
  width: 300px;
  background-color: #3498db;
  margin: 0 5px;
  border-radius: 5px;
  transition: height 0.5s, background-color 0.3s;
`;

const IncreaseButton = styled.button`
  background-color: #2ecc71;
  color: #fff;
  padding: 12px 20px;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 10px;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #27ae60;
    transform: scale(1.05);
  }
`;

const DecreaseButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  padding: 12px 20px;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #c0392b;
    transform: scale(1.05);
  }
`;

// Functional component for the Bar Chart
const BarChart = () => {
    // Sample data for bar heights
    const initialData = [
        10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300
    ];

    // Minimum height for the bars
    const minHeight = 10;

    // Using useState with a more concise arrow function
    const [bars, setBars] = useState(() => initialData);

    // Using a more modern arrow function with implicit return
    const increaseHeights = () => setBars((prevBars) => prevBars.map((barHeight) => barHeight + 10));

    // Decrease heights, but ensure they don't go below the minimum height
    const decreaseHeights = () =>
        setBars((prevBars) => prevBars.map((barHeight) => Math.max(barHeight - 10, minHeight)));

    return (
        <BarChartContainer>
            <ChartTitle>BarChart</ChartTitle>
            <BarsContainer>
                {bars.map((barHeight, index) => (
                    <Bar key={index} height={barHeight}></Bar>
                ))}
            </BarsContainer>
            <div>
                <IncreaseButton onClick={increaseHeights}>Increase Heights</IncreaseButton>
                <DecreaseButton onClick={decreaseHeights}>Decrease Heights</DecreaseButton>
            </div>
        </BarChartContainer>
    );
};

export default BarChart;
