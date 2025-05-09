import { Card, Title, Text, Grid, Metric } from '@tremor/react';
import { useEffect, useState } from 'react';
function Dashboard() {
const [totalCars, setTotal] = useState([])
  useEffect(() =>{
    fetch("http://localhost:8080/cars/count")
    .then(res=> res.json())
    .then(data => {setTotal(data), console.log(data)})
    .catch((err) => console.error(err));}, [])

const [totalCostumers, setToCos] = useState([])
useEffect(() => {
    fetch("http://localhost:8080/contact/TotalCostumers")
    .then(res => res.json())
    .then(data => setToCos(data))
    .catch(err => console.log(err))
}, [])
const [Av, setAv] = useState([])
useEffect(() => {
  fetch('http://localhost:8080/cars/av').then(res => res.json()).then(data => setAv(data))
})

const [Sum, setSum] = useState([])
useEffect(() => {
  fetch('http://localhost:8080/booking/sumPayement').then(res => res.json()).then(data => setSum(data))
}, [])


  return (
    <div className="p-6 bg-blue-50">
      <Title className="text-blue-900">Dashboard Overview</Title>
      <Text className="text-blue-700">Welcome to your car rental management system</Text>
      
      <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="gap-6 mt-6">
        <Card decoration="top" decorationColor="blue">
          <Text className="text-blue-700">Total Cars</Text>
          <Metric className="text-blue-900">{totalCars.Total}</Metric>
        </Card>
        <Card decoration="top" decorationColor="blue">
          <Text className="text-blue-700">Available Cars</Text>
          <Metric className="text-blue-900">{Av.AvNumber}</Metric>
        </Card>
        <Card decoration="top" decorationColor="blue">
          <Text className="text-blue-700">Total Customers</Text>
          <Metric className="text-blue-900">{totalCostumers.Costumers}</Metric>
        </Card>
        <Card decoration="top" decorationColor="blue">
          <Text className="text-blue-700">Monthly Revenue</Text>
          <Metric className="text-blue-900">{Sum.Sum}$</Metric>
        </Card>
      </Grid>
    </div>
  );
}

export default Dashboard;