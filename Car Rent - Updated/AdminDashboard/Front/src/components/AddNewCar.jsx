import React, { useState } from 'react';
import { Form, Input, Button, InputNumber, Upload, message, Select } from 'antd';

const { TextArea } = Input;

const NewCar = ({ style, onClose }) => {
  const [imageFile, setImageFile] = useState(null);
  const [car, setCar] = useState({
    name: '',
    price: '',
    status: '',
    description: '',
    transmition: '',
    categories: '',
    carburant: '',
    caracteristique: ''
  });

  const handleChange = (name, value) => {
    setCar(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!imageFile) {
      message.error("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append('file', imageFile);
    Object.keys(car).forEach(key => formData.append(key, car[key]));

    try {
      const res = await fetch('http://localhost:8080/cars', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      message.success("Car added!");
      console.log(data);
    } catch (err) {
      message.error("Error uploading car");
    }
  };

  return (
    <div style={{ zIndex: 2, position: "absolute", left: "50%",top:"20px", transform: "translateX(-50%)", borderRadius: "20px", color: "white", display: style }} className="flex-1 overflow-auto bg-blue-100">
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} style={{ minWidth: 900}} onFinish={handleSubmit}>
        <Form.Item>
          <Button style={{ position: "absolute", right: "-350px", top: "10px", border: "none", borderRadius: "60px", backgroundColor: "#f00", color: "#fff" }} onClick={onClose}>
            X
          </Button>
        </Form.Item>

        <Form.Item label="Upload">
          <Upload beforeUpload={(file) => { setImageFile(file); return false; }} listType="picture-card" >
            <div className='flex justify-center w-[100px] h-[100px] rounded-lg items-center bg-blue-100'>+</div>
          </Upload>
        </Form.Item>

        <Form.Item label="Nom de voiture">
          <Input value={car.name} onChange={(e) => handleChange('name', e.target.value)} />
        </Form.Item>

        <Form.Item label="Prix">
          <InputNumber value={car.price} onChange={(value) => handleChange('price', value)} />
        </Form.Item>

        <Form.Item label="Status">
          <Select value={car.status} onChange={(value) => handleChange('status', value)}>
            <Select.Option value="Available">Disponible</Select.Option>
            <Select.Option value="Rented">loué</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Description">
          <TextArea rows={2} value={car.description} onChange={(e) => handleChange('description', e.target.value)} />
        </Form.Item>

        <Form.Item label="Transmition">
          <Select value={car.transmition} onChange={(value) => handleChange('transmition', value)}>
            <Select.Option value="Automatique">Automatique</Select.Option>
            <Select.Option value="Manuel">Manuel</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Categories">
          <Select value={car.categories} onChange={(value) => handleChange('categories', value)}>
            <Select.Option value="SUV">SUV</Select.Option>
            <Select.Option value="Compacte">Compacte</Select.Option>
            <Select.Option value="Electrique">Electrique</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Carburant">
          <Select value={car.carburant} onChange={(value) => handleChange('carburant', value)}>
            <Select.Option value="Essence">Essence</Select.Option>
            <Select.Option value="Diesel">Diesel</Select.Option>
            <Select.Option value="Electrique">Electrique</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Caracteristique">
          <TextArea rows={2} value={car.caracteristique} onChange={(e) => handleChange('caracteristique', e.target.value)} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ position: "absolute", left: "80%", border: "none", borderRadius: "100px" }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewCar;
