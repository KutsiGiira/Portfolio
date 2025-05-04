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
      console.error("err " + error)
    })
  }, [])


// TSWIRA (user page , w lform li f db)
// FORM TSD W T7L (dashboard.cars page)
// LA CONFIRMITI T9DR TMS7 L COMMAND (dashboard.booking page)
// 9AD STATS (db.report)
// kml 3la dash page (main)

  return (
    <div className="p-6">
      <Title>Booking Management</Title>
      <Card className="mt-6">
        <div className="space-y-4">
          {customer.map((cus) => (
            <div key={cus.id} className="flex items-center justify-between p-4 border-b">
              <div>
                <Text className="font-medium">{cus.fname +" "+ cus.lname}<span className="text-gray-500 text-sm">  {cus.email}</span></Text>
                <Text className="font-small">{cus.phone}</Text>
                <Text className="text-gray-500">{cus.car_name}</Text>
              </div>
              <div>
                <Text><span className='text-gray-500'>From : </span>{cus.start_date} <span className='text-gray-500'>To : </span> {cus.end_date}</Text>
                <Text className="font-small text-center">{cus.ville}</Text>
                <Text className="font-small text-center">{cus.permis_number}</Text>
                <Text className="font-small text-center">A mount to pay : {cus.payement}$</Text>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default BookingManagement;