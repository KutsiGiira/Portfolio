import { Card, Title, Text, Grid, Metric } from '@tremor/react';

function Dashboard() {
  return (
    <div className="p-6 bg-blue-50">
      <Title className="text-blue-900">Dashboard Overview</Title>
      <Text className="text-blue-700">Welcome to your car rental management system</Text>
      
      <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="gap-6 mt-6">
        <Card decoration="top" decorationColor="blue">
          <Text className="text-blue-700">Total Cars</Text>
          <Metric className="text-blue-900">24</Metric>
        </Card>
        <Card decoration="top" decorationColor="blue">
          <Text className="text-blue-700">Active Bookings</Text>
          <Metric className="text-blue-900">8</Metric>
        </Card>
        <Card decoration="top" decorationColor="blue">
          <Text className="text-blue-700">Total Customers</Text>
          <Metric className="text-blue-900">156</Metric>
        </Card>
        <Card decoration="top" decorationColor="blue">
          <Text className="text-blue-700">Monthly Revenue</Text>
          <Metric className="text-blue-900">$12,450</Metric>
        </Card>
      </Grid>
    </div>
  );
}

export default Dashboard;