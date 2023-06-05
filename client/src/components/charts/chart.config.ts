import { ApexOptions } from 'apexcharts';

export const TotalRevenueSeries = [
  {
    name: 'Last Month',
    data: [95, 84, 72, 44, 108, 108, 47],
  },
  {
    name: 'Running Month',
    data: [183, 124, 115, 85, 143, 143, 96],
  },
];

export const TotalRevenueOptions: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: ['#F45252', '#6dcd00'],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ['transparent'],
    width: 4,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  yaxis: {
    title: {
      text: '₦ (Millions)',
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `₦ ${val} Millions`;
      },
    },
  },
};