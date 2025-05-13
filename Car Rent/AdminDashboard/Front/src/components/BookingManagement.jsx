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
  const ConfirmBooking = (id) => {
    let conf = confirm("Commande confirmed ?")
    if(conf){
    fetch("http://localhost:8080/confirm/" + id,{method: "DELETE"})
    .then(data => console.log("dazt" + data))
    .catch(err => console.error(err))
      window.location.reload();
    }
  }
// 9AD STATS (db.report) (1)
  return (
    <div className="p-6">
      <Title>Booking Management</Title>
      <Card className="mt-6">
        <div className="space-y-4">
          {customer.map((cus) => (
            <div key={cus.id} className="flex items-center justify-between p-4 border-b">
              <div>
                <Text className="text-xl">{cus.fname +" "+ cus.lname}<span className="text-gray-500 text-sm">  {cus.email}</span></Text>
                <Text className="text-sm">{cus.phone}</Text>
                <Text className="text-gray-900">{cus.car_name}</Text>
              </div>
              <div>
                <Text><span className='text-gray-500'>From : </span>{cus.start_date} <span className='text-gray-500'>To : </span> {cus.end_date}</Text>
                <Text className="font-small text-center">{cus.ville}</Text>
                <Text className="font-small text-center">{cus.permis_number}</Text>
                <Text className="font-small text-center">A mount to pay : {cus.payement}$</Text>
              </div>
              <button onClick={() => ConfirmBooking(cus.id)} >Confirmed</button>
            </div>
          ))}
        </div>
      </Card>
      
    </div>
  );
}

export default BookingManagement;