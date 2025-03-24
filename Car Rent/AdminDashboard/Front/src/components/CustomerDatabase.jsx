import { Card, Title, Text, TextInput } from '@tremor/react';
import {useState, useEffect}from 'react';
function CustomerDatabase() {
  const [customer, setCustomer] = useState([])

  useEffect(() =>{
    fetch("http://localhost:8080/contact")
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
 
//9ad ports
// had lpage t9adat la biti t9ad ba9i desigh liha 7sn mhm tal db mzyan
  return (
    <div className="p-6">
      <Title>Customer Database</Title>
      
      <div className="mt-6 mb-4">
        <TextInput placeholder="Search customers..." />
      </div>

      <Card>
        <div className="space-y-4">
          {customer.map((cus) => (
            <div key={cus.id} className="flex items-center justify-between p-4 border-b">
              <div>
                <Text className="font-medium">{cus.nom}</Text>
                <Text className="text-gray-500">{cus.email}</Text>
              </div>
              <div className="flex items-center gap-4">
                <Text>{cus.sujet}</Text>
                <Text className="text-gray-500">Message: {cus.message} "f"</Text>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default CustomerDatabase;