import { Card, Title, BarChart, DonutChart } from '@tremor/react';

function Reports() {
  const bookingData = [
    { month: 'Jan', bookings: 45 },
    { month: 'Feb', bookings: 52 },
    { month: 'Mar', bookings: 48 },
  ];

  const carTypeData = [
    { name: 'Sedan', value: 40 },
    { name: 'SUV', value: 30 },
    { name: 'Van', value: 15 },
    { name: 'Luxury', value: 15 },
  ];

  return (
    <div className="p-6">
      <Title>Reports & Analytics</Title>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card>
          <Title>Monthly Bookings</Title>
          <BarChart
            data={bookingData}
            index="month"
            categories={['bookings']}
            colors={["indigo", "cyan", "amber", "emerald"]}
            className="mt-6"
          />
        </Card>

        <Card>
          <Title>Car Type Distribution</Title>
          <DonutChart
            data={carTypeData}
            category="value"
            index="name"
            className="mt-6"
          />
        </Card>
      </div>
    </div>
  );
}

export default Reports;