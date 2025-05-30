import { Card, Title, Text, Badge } from '@tremor/react';
import { useEffect , useState } from 'react';
import checkSvg from '../assets/check.svg'
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
    let conf = confirm("Client appelé ?")
    if(conf){
    fetch("http://localhost:8080/confirm/" + id,{method: "DELETE"})
    .then(data => console.log("dazt" + data))
    .catch(err => console.error(err))
      window.location.reload();
    }
  }
  return (
    <div className="p-6">
      <Title>Gestion de reservation du client</Title>
      <Card className="mt-6">
        <div className="space-y-4">
          {customer.map((cus) => (
            <div key={cus.id} className="flex justify-between p-4 border-b">
              <div>
                <Text className="text-xl font">{cus.fname +" "+ cus.lname} <span className="text-gray-600 text-sm">{cus.email}</span></Text>
                <Text className="text-lg text-gray-900 text-md"><span className='text-gray-500'>Tel : </span>{cus.phone}</Text>
                <Text className="text-gray-900"><span className='text-gray-500'>Voiture : </span><span className='font-bold'>{cus.car_name}</span></Text>
                <Text className="text-gray-900"><span className='text-gray-500'>Address : </span>{cus.adresse}</Text>
                <Text className="text-gray-900"><span className='text-gray-500'>Montant : </span>{cus.payement}$</Text>
                <Text><span className='text-gray-500'>From : </span>{cus.start_date}
                      <span className='text-gray-500'> To : </span> {cus.end_date}</Text>
                <Text className="text-gray-900"><span className='text-gray-500'>Code postal: </span>{cus.code_postal}</Text>
                <Text className="text-gray-900"><span className='text-gray-500'>Numero permis:  </span>{cus.permis_number}</Text>
              </div>
              <button onClick={() => ConfirmBooking(cus.id)} className='flex justify-between w-[80px] h-[150px] items-center'>Appelé<img src={checkSvg} className='bg-green-800 rounded-lg h-[20px] w-[20px]'/></button>
            </div>
          ))}
        </div>
      </Card>
      
    </div>
  );
}

export default BookingManagement;