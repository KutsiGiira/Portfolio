import { Card, Title, Text, Badge } from '@tremor/react';

function BookingManagement() {
  const bookings = [
    {
      id: 1,
      customer: 'John Doe',
      car: 'Toyota Camry',
      startDate: '2024-03-15',
      endDate: '2024-03-18',
      status: 'active',
    },
    {
      id: 2,
      customer: 'Jane Smith',
      car: 'Honda CR-V',
      startDate: '2024-03-20',
      endDate: '2024-03-25',
      status: 'pending',
    },
  ];

  return (
    <div className="p-6">
      <Title>Booking Management</Title>
      
      <Card className="mt-6">
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="flex items-center justify-between p-4 border-b">
              <div>
                <Text className="font-medium">{booking.customer}</Text>
                <Text className="text-gray-500">{booking.car}</Text>
              </div>
              <div className="flex items-center gap-4">
                <Text>{booking.startDate} - {booking.endDate}</Text>
                <Badge color={booking.status === 'active' ? 'green' : 'yellow'}>
                  {booking.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default BookingManagement;