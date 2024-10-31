import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import hotelBooking from '../../../data/hotelBooking.json';

let TotalVisitors = 0;

const getVisitorsData = () => {

    const visitors: { [key: string]: number } = {};
    hotelBooking.forEach(entry => {
        const countryKey = entry.country;
        const totalVisitors = entry.adults + entry.children + entry.babies;
        // if (entry.arrival_date_year == 2015 && entry.arrival_date_month == 'July' && entry.arrival_date_day_of_month == 18) {
        if (!visitors[countryKey]) {
            visitors[countryKey] = 0;
        }
        visitors[countryKey] += totalVisitors;
        TotalVisitors += totalVisitors;
        // }
    });
    return Object.entries(visitors).map(([country, count]) => ({
        country,
        count,
    }));

};

const VisitorPerCountry: React.FC = () => {
    const visitorsData = getVisitorsData();
    const series = [
        {
            name: 'Total Visitors',
            data: visitorsData.map(dataPoint => dataPoint.count),
        },
    ];
    const options: ApexOptions = {
        series: [{
            name: 'Inflation',
            data: visitorsData.map(dataPoint => dataPoint.count),
        }],
        chart: {
            id: 'visitors-chart',
            zoom: { enabled: true },
            toolbar: { show: false },
            type: 'bar',
            fontFamily: 'Inter, sans-serif',
            animations: { enabled: true, easing: 'easeinout', speed: 800 },
            height: 350,
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                horizontal: false,
                columnWidth: '60%',
                dataLabels: {
                    position: 'top',
                    total: {
                        style: {
                            fontSize: '1rem'
                        }
                    }
                },
            },
        },
        xaxis: {
            categories: visitorsData.map(dataPoint => dataPoint.country),
            title: {
                text: '',
                style: {
                    color: '#343634',
                    fontSize: '1rem',
                    fontWeight: '500',
                    fontFamily: 'Inter, sans-serif',
                },
            },
            labels: { style: { colors: '#666', fontSize: '0.8rem' } },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            title: {
                text: 'Number of Visitors',
                style: { color: '#343634', fontSize: '1rem', fontWeight: '500', fontFamily: 'Poppins, sans-serif' },
            },
            labels: { style: { colors: '#666', fontSize: '0.8rem' } },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        title: {
            text: 'Total Number of Visitors per Country',
            align: 'center',
            offsetY: 20,
            style: {
                color: '#1f2937',
                fontSize: '1.2rem',
                fontWeight: '600',
                fontFamily: 'Poppins, sans-serif',
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.5,
                gradientToColors: ['#60a5fa'],
                inverseColors: true,
                opacityFrom: 0.9,
                opacityTo: 0.7,
                stops: [0, 100],
            },
        },
        grid: {
            borderColor: '#e5e7eb',
            strokeDashArray: 4,
            yaxis: { lines: { show: true } },
            xaxis: { lines: { show: false } },
        },
        colors: ['#3b82f6'],
        tooltip: {
            theme: 'light',
            marker: { show: true },
            y: { title: { formatter: () => 'Visitors' } },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                if (typeof val === 'number') {
                    // let value = (val / TotalVisitors) * 100;
                    // return value.toFixed(2) + "%";
                    return val;
                }
                return '';
            },
            offsetY: -20,
            style: {
                fontSize: '0.8rem',
                colors: ["#304758"]
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -10,
            offsetX: -5,
        },
    };
    return (
        <div className=' shadow-lg p-3 rounded-md bg-white'>
            <Chart series={series} type="bar" height={450} options={options} />
        </div>
    );
};

export default VisitorPerCountry;
