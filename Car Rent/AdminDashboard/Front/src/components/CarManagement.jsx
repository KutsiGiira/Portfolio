import { useState,useEffect } from 'react';
import { Card, Title, Text, Button, TextInput, Select, SelectItem } from '@tremor/react';
import AddNewCar from './AddNewCar';
import { message } from 'antd';
function CarManagement() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/cars')
      .then(res => res.json())
      .then(data => setCars(data))
      .catch(err => console.error('Error fetching cars:', err));
  }, []);
function DeleteCar(id){
  let del = confirm("are u sure about that ? ");
  if(del === true){
        fetch('http://localhost:8080/cars/del/' + id,{
      method: "delete"
      })
      .then(setCars(prev => prev.filter(car => car.id !== id)))
      .catch(console.error("Error not deleted"))
      window.location.reload();
    }
  }

  //--------------function bach tbdl status dyal car--------------------------//
  // const [status, setStatus] = useState([]);
  //     function statusHandler(carId){
  // setStatus(prevCars =>
  //    prevCars.map(car => car.id === carId ? {...car, status: car.status === "Available" ? "Rented" : "Available"}: "Status not found"));
  //    console.log("c")
  //       }

  const [FormVis, setFormVis] = useState(false);
  function open() {
    setFormVis(true);
  }

  function close() {
    setFormVis(false);
  }
  return (
    <div className="p-6" style={{zIndex: 1}}>
      <div className="flex justify-between items-center mb-6">
        <Title>Car Management</Title>
        <Button style={{position: 'absolute', left: "90%"}} onClick={open}>Add New Car</Button>
        <div>
        {FormVis && <AddNewCar onClose={close} />}
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
                <span className={`px-2 py-1 rounded ${car.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {car.status}
                </span>
                <Text>{car.price}$/day</Text>
                <Button variant="secondary" size="xs">Edit</Button>
                <Button variant="primary" size="xs" onClick={() => DeleteCar(car.id)}>Delete</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default CarManagement;