import { useState,useEffect } from 'react';
import { Card, Title, Text, Button, TextInput, Select, SelectItem } from '@tremor/react';
import AddNewCar from './AddNewCar';
import CarEdit from './CarEdit';
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
  let del = confirm("ce véhicule sera supprimé ");
  if(del === true){
        fetch('http://localhost:8080/cars/del/' + id,{
      method: "delete"
      })
      .then(setCars(prev => prev.filter(car => car.id !== id)))
      .catch(console.error("Error not deleted"))
      window.location.reload();
    }
  }


  const [FormVis, setFormVis] = useState(false);
  function open() {
    setFormVis(true);
  }
  function close() {
    setFormVis(false);
  }

  const [Editor, setEditor] = useState(null);
  function OpenEditor(id){
    setEditor(id);
  }
  function CloseEditor(){
    setEditor(null);
  }
  return (
    <div className="p-6" style={{zIndex: 1}}>
      <div className="flex justify-between items-center mb-6">
        <Title>Gestion de voitures</Title>
        <Button style={{position: 'absolute', left: "90%"}} onClick={open}>Add New Car</Button>
        <div>
        {FormVis && <AddNewCar onClose={close} />}
    </div>
      </div>

      <Card>
        <div className="space-y-4" style={{zIndex: 3}}>
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
                {Editor === car.id && <CarEdit onClose={CloseEditor} id={car.id} />}
                <Button variant="secondary" size="xs" onClick={() => OpenEditor(car.id)}>Modifier</Button>
                <Button variant="primary" size="xs" onClick={() => DeleteCar(car.id)}>Supprimer</Button>
                <div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default CarManagement;