import { useState } from 'react';
import { Card, Title, Text, Button, TextInput, Select, SelectItem } from '@tremor/react';
import AddNewCar from './AddNewCar';
function CarManagement() {
  const [cars, setCars] = useState([
    { id: 1, name: 'Toyota Camry', type: 'Sedan', status: 'available', price: 50 },
    { id: 2, name: 'Honda CR-V', type: 'SUV', status: 'rented', price: 65 },
  ]);


const [FormVis, setFormVis] = useState("none")
  function open(){
    setFormVis("block")
  }
  function close(){
    setFormVis("none")
  }
  return (
    <div className="p-6" style={{zIndex: 1}}>
      <div className="flex justify-between items-center mb-6">
        <Title>Car Management</Title>
        <Button style={{position: 'absolute', left: "90%"}} onClick={open}>Add New Car</Button>
        <div>
        <AddNewCar onClose={close} style={{display: FormVis}}/>
    </div>
      </div>

      <Card>
        <div className="space-y-4" >
          {cars.map((car) => (
            <div key={car.id} className="flex items-center justify-between p-4 border-b">
              <div>
                <Text className="font-medium">{car.name}</Text>
                <Text className="text-gray-500">{car.type}</Text>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-2 py-1 rounded ${
                  car.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {car.status}
                </span>
                <Text>${car.price}/day</Text>
                <Button variant="secondary" size="xs">Edit</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default CarManagement;