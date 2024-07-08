"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { ApexOptions } from "apexcharts";
import { Skeleton } from "@nextui-org/react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ApexChart: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [series, setSeries] = useState<{ name: string; data: number[] }[]>([]);
  const [options, setOptions] = useState<ApexOptions>({});

  useEffect(() => {
    setMounted(true);

    const seriesData = {
      monthDataSeries1: {
        prices: [31, 40, 28, 51, 42, 109, 100],
        dates: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      }
    };

    setSeries([
      {
        name: "STOCK ABC",
        data: seriesData.monthDataSeries1.prices
      }
    ]);

    setOptions({
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      labels: seriesData.monthDataSeries1.dates,
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    });
  }, []);

  return (
    <div>
      {mounted ? (
        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
            width={"100%"}
          />
        </div>
      ) : (
        <div className="mt-32 flex flex-col items-center gap-5">
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
          </Skeleton>
        </div>
      )}
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
