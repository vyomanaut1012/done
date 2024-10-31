import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import hotelBooking from '../../../data/hotelBooking.json';

const getVisitorsData = () => {
    const visitors: { [key: string]: number } = {};
    hotelBooking.forEach(entry => {
        const dateKey = `${entry.arrival_date_year}-${entry.arrival_date_month}-${entry.arrival_date_day_of_month}`;
        const totalVisitors = entry.adults + entry.children + entry.babies;

        if (!visitors[dateKey]) {
            visitors[dateKey] = 0;
        }

        visitors[dateKey] += totalVisitors;
    });

    return Object.entries(visitors).map(([date, count]) => ({
        date,
        count
    }));
};

const VisitorPerDay: React.FC = () => {
    const visitorsData = getVisitorsData();

    const series = [
        {
            name: "Total Visitors",
            data: visitorsData.map(dataPoint => dataPoint.count)
        }
    ];

    const options: ApexOptions = {
        chart: {
            id: 'visitors-chart',
            zoom: { enabled: true },
            toolbar: { show: false },
            type: 'area', 
            fontFamily: 'Inter, sans-serif',
            animations: { enabled: true, easing: 'easeinout', speed: 800 },
        },
        xaxis: {
            categories: visitorsData.map(dataPoint => dataPoint.date),
            title: {
                text: '',
                style: {
                    color: '#343634',
                    fontSize: '1rem',
                    fontWeight: '',
                    fontFamily: 'Inter, sans-serif'
                }
            },
            labels: { style: { colors: '#666', fontSize: '0.8rem' } },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
            colors: ['#1E90FF']
        },
        markers: {
            size: 4,
            colors: ['#fff'],
            strokeColors: '#3b82f6',
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        yaxis: {
            title: {
                text: 'Number of Visitors',
                style: { color: '#343634', fontSize: '1rem', fontWeight: '', fontFamily: 'Inter, sans-serif' }
            },
            labels: { style: { colors: '#666', fontSize: '0.8rem' } },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        title: {
            text: 'Total Number of Visitors per Day',
            align: 'center',
            offsetY: 20,
            style: {
                color: '#343634',
                fontSize: '1.2rem',
                fontWeight: '600',
                fontFamily: 'Poppins, sans-serif',
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.8,
                gradientToColors: ['#60a5fa'],
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 100],
            },
        },
        grid: {
            borderColor: '#e7e7e7',
            strokeDashArray: 4,
            yaxis: { lines: { show: true } },
            xaxis: { lines: { show: false } }
        },
        tooltip: {
            enabled: true,
            theme: 'light',
            x: { show: true },
            marker: { show: true },
            y: { title: { formatter: () => 'Visitors:' } }
        },
        dataLabels: {
            enabled: false,
            style: {
                colors: ['#343634'],
                fontSize: '1rem',
                fontWeight: '',
                fontFamily: 'Inter, sans-serif'
            }
        }
    };

    return (
        <div className='font-inter shadow-lg p-3 rounded-md bg-white'>
            <Chart series={series} type="area" height={450} options={options} />
        </div>
    );
};

export default VisitorPerDay;
