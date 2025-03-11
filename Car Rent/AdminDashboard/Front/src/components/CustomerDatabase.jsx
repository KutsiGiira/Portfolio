import { Card, Title, Text, TextInput } from '@tremor/react';

function CustomerDatabase() {
  const customers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '(555) 123-4567',
      rentals: 3,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '(555) 987-6543',
      rentals: 1,
    },
  ];

  return (
    <div className="p-6">
      <Title>Customer Database</Title>
      
      <div className="mt-6 mb-4">
        <TextInput placeholder="Search customers..." />
      </div>

      <Card>
        <div className="space-y-4">
          {customers.map((customer) => (
            <div key={customer.id} className="flex items-center justify-between p-4 border-b">
              <div>
                <Text className="font-medium">{customer.name}</Text>
                <Text className="text-gray-500">{customer.email}</Text>
              </div>
              <div className="flex items-center gap-4">
                <Text>{customer.phone}</Text>
                <Text className="text-gray-500">Rentals: {customer.rentals}</Text>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default CustomerDatabase;