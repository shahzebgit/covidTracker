import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../api";
import cx from 'classnames';
import styles from "./charts.module.css";

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
  // useState return an array, not an object
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <Line 
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;



  const barChart = 
  (confirmed
   ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255, 0.5)",
              "rgba(2, 70, 2, 0.5)",
              "rgba(255,0,0,0.5)",
            ],
            data:[confirmed.value, recovered.value,deaths.value,],
          }]     
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country} ` },
      }}
    />
  ) : null);

  return (
    <div className={cx(styles.container)}>{country ? barChart : lineChart}</div>
  );
};

export default Charts;
