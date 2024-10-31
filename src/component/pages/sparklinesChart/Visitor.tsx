import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import hotelBooking from '../../../data/hotelBooking.json';

const Visitor: React.FC = () => {

    let totalAdultVisitor = 0;
    let totalChildrenVisitor = 0;

    const getVisitorsData = (type: 'adults' | 'children') => {
        const visitors: { [key: string]: number } = {};

        hotelBooking.forEach(entry => {
            const dateKey = `${entry.arrival_date_year}-${entry.arrival_date_month}-${entry.arrival_date_day_of_month}`;
            const totalVisitors = entry[type];

            if (!visitors[dateKey]) {
                visitors[dateKey] = 0;
            }

            visitors[dateKey] += totalVisitors;
            if (type === 'adults') totalAdultVisitor += totalVisitors;
            if (type === 'children') totalChildrenVisitor += totalVisitors;
        });

        return Object.entries(visitors).map(([date, count]) => ({
            date,
            count
        }));
    };

    const adultVisitorData = getVisitorsData('adults');
    const childrenVisitorData = getVisitorsData('children');

    const adultSeries = [
        {
            name: "Adult Visitors",
            data: adultVisitorData.map(dataPoint => dataPoint.count)
        }
    ];

    const childrenSeries = [
        {
            name: "Children Visitors",
            data: childrenVisitorData.map(dataPoint => dataPoint.count)
        }
    ];

    const sparklineOptions: ApexOptions = {
        chart: {
            type: 'area',  // Use 'area' to enable gradient under the line
            width: 100,
            height: 35,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            width: 2,
        },
        colors: ['#008FFB'],
        tooltip: {
            enabled: true,
            x: {
                show: false
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.8,
                gradientToColors: ['#60a5fa'],  // Bottom color for gradient
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 100],
            },
        },
    };

    return (
        <div className='font-inter grid grid-cols-2 gap-28 p-5 shadow-lg bg-white'>
            <div>
                <div>
                    <h4 className='text-4xl font-bold font-poppins'>{totalAdultVisitor}</h4>
                    <h4>Total Adult Visitors</h4>
                </div>
                <Chart series={adultSeries} type="area" height={100} options={sparklineOptions} />
            </div>
            <div>
                <div>
                    <h4 className='text-4xl font-bold font-poppins'>{totalChildrenVisitor}</h4>
                    <h4>Total Children Visitors</h4>
                </div>
                <Chart series={childrenSeries} type="area" height={100} options={sparklineOptions} />
            </div>
        </div>
    );
};

export default Visitor;
