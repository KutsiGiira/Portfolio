import { Card, Title, Text, Badge } from '@tremor/react';
import { useEffect , useState } from 'react';

function BookingManagement() {
  const [customer, setCustomer] = useState([])

  useEffect(() =>{
    fetch("http://localhost:8080/booking")
    .then(res =>{
      if(!res.ok){
        throw new Error("failure")
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
      setCustomer(data);
    })
    .catch(error => {
      console.error("err")
    })
  }, [])

  return (
    <div className="p-6">
      <Title>Booking Management</Title>
      <Card className="mt-6">
        <div className="space-y-4">
          {customer.map((cus) => (
            <div key={cus.id} className="flex items-center justify-between p-4 border-b">
              <div>
                <Text className="font-medium">{cus.fname +" "+ cus.lname}</Text>
                <Text className="text-gray-500">car to rent</Text>
              </div>
              <div className="flex items-center gap-4">
                <Text>From : {cus.start_date} To :  {cus.end_date}</Text>
                <Badge color={cus.status === 'active' ? 'green' : 'yellow'}>
                  {cus.status}availbale
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