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
    .catch(err => {
      console.error(err)
    })
  }, [])
  const [search, setSearch] = useState('');
  const filterNames = customer.filter((cus) => cus.nom.toLowerCase().includes(search.toLowerCase()));
// had lpage t9adat la biti t9ad ba9i desigh liha 7sn mhm tal db mzyan
  return (
    <div className="p-6">
      <Title>Customer Database</Title>
      <div className="mt-6 mb-4">
        <TextInput placeholder="Search customers..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <Card>
        <div className="space-y-4">
          {filterNames.length > 0 ? (filterNames.map((cus) => (
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
          ))): (
            <Text className="text-center text-gray-500">No customers found.</Text>
          )}
        </div>
      </Card>
    </div>
  );
}

export default CustomerDatabase;