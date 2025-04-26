import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Button, InputNumber, Upload, message, Select } from 'antd';

const { TextArea } = Input;

const NewCar = ({ style, onClose }) => {
  const [carList, setCarList] = useState([
    {
      // image: '',
      name: '',
      price: '',
      status: '',
      description: '',
      transmition: '',
      categories: '',
      carburant: '',
      caracteristique: ''
    }
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedList = [...carList];
    updatedList[index][name] = value;
    setCarList(updatedList);
  };

  const handleSubmit = (values) => {
    carList.forEach(car => {
      fetch('http://localhost:8080/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
      })
        .then(res => res.json())
        .then(data => {
          console.log('Car added:', data);
          message.success('Car added successfully');
        })
        .catch(err => {
          console.error('Error:', err);
          message.error('Error adding car');
        });
    });
  };

  return (
    <div style={{
      zIndex: 2,
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      borderRadius: "20px",
      color: "white",
      display: style
    }} className="flex-1 overflow-auto bg-blue-900">

      <Form onFinish={handleSubmit} labelCol={{ span: 3 }} wrapperCol={{ span: 14 }} style={{ minWidth: 900 }}>
        <Form.Item>
          <Button
            style={{
              position: "absolute",
              left: "160%",
              border: "none",
              borderRadius: "100px",
              backgroundColor: "#f00",
              color: "#fff",
            }}
            onClick={onClose}
          >
            X
          </Button>
        </Form.Item>

        {/* <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="http://localhost:8080/cars/ups" listType="picture-card">
            <button
              style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
              type="button"
            >
              <PlusOutlined />
              <div>Car Pic</div>
            </button>
          </Upload>
        </Form.Item> */}

        {carList.map((car, index) => (
          <div key={index}>
            <Form.Item label="Car Name :">
              <Input
                name="name"
                value={car.name}
                onChange={(e) => handleChange(e, index)}
                placeholder="Car Name"
              />
            </Form.Item>

            <Form.Item label="Price">
              <InputNumber
                name="price"
                value={car.price}
                onChange={(value) => handleChange({ target: { name: 'price', value } }, index)}
                placeholder="Price"
              />
            </Form.Item>

            <Form.Item label="Status">
              <Select
                name="status"
                value={car.status}
                onChange={(value) => handleChange({ target: { name: 'status', value } }, index)}
              >
                <Select.Option value="Available">Available</Select.Option>
                <Select.Option value="Rented">Rented</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Description">
              <TextArea
                name="description"
                value={car.description}
                onChange={(e) => handleChange(e, index)}
                rows={4}
              />
            </Form.Item>

            <Form.Item label="Transmition">
              <Select
                name="transmition"
                value={car.transmition}
                onChange={(value) => handleChange({ target: { name: 'transmition', value } }, index)}
              >
                <Select.Option value="Automatique">Automatique</Select.Option>
                <Select.Option value="Manuel">Manuel</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Categories">
              <Select
                name="categories"
                value={car.categories}
                onChange={(value) => handleChange({ target: { name: 'categories', value } }, index)}
              >
                <Select.Option value="Suv">Suv</Select.Option>
                <Select.Option value="Compacte">Compacte</Select.Option>
                <Select.Option value="Electrique">Electrique</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Carburant">
              <Select
                name="carburant"
                value={car.carburant}
                onChange={(value) => handleChange({ target: { name: 'carburant', value } }, index)}
              >
                <Select.Option value="Essence">Essence</Select.Option>
                <Select.Option value="Diesel">Diesel</Select.Option>
                <Select.Option value="Electrique">Electrique</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Caracteristique">
              <TextArea
                name="caracteristique"
                value={car.caracteristique}
                onChange={(e) => handleChange(e, index)}
                rows={4}
              />
            </Form.Item>
          </div>
        ))}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ position: "absolute", left: "80%", border: "none", borderRadius: "100px" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewCar;
