import React, { useState } from 'react';
import CarManagement from './CarManagement';
import { PlusOutlined } from '@ant-design/icons';
import {
  DatePicker,
  Form,
  Input,
  Button,
  InputNumber,
  Upload
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = e => {
  if (Array.isArray(e)) {
    return e;
  }
  return e === null || e === void 0 ? void 0 : e.fileList;
};
function NewCar({ onClose }){
  return (
    <div style={{zIndex: 2,
      position: "absolute", 
      left:"50%", 
      transform:"translateX(-50%)",
      borderRadius:"20px",
      color: "white"}} 
      className="flex-1 overflow-auto bg-blue-900" >
      <Form
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 14 }}
        style={{ minWidth: 900}}
      >
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
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
              type="button"
            >
              <PlusOutlined />
              <div>Car Pic</div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="Car Name : ">
          <Input placeholder='Car Name' />
        </Form.Item>
        <Form.Item label="Price">
          <InputNumber placeholder='price' />
        </Form.Item>
        <Form.Item label="Available ">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber ">
          <InputNumber />
        </Form.Item>
        <Form.Item label="description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="transmition">
          <select name="transmition" id="transmition">
            <option value="Automatique">Automatique</option>
            <option value="Manuel">Manuel</option>
          </select>
        </Form.Item>
        <Form.Item label="Categories">
          <select name="Categories" id="Categories">
            <option value="Suv">Suv</option>
            <option value="Compacte">Compacte</option>
            <option value="Electrique">Electrique</option>
            <option value="Berline">Berline</option>
          </select>
        </Form.Item>
        <Form.Item label="Carburant">
          <select name="Carburant" id="Carburant">
            <option value="Essence">Essence</option>
            <option value="Diesel">Diesel</option>
            <option value="Elec">Electrique</option>
          </select>
        </Form.Item>
        <Form.Item label="Caracteristique">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
        <Button style={{position: "absolute", left:"80%", border:"none", borderRadius:"100px"}}>Sumbit</Button>
      </Form.Item>
      </Form>
    </div>
  );
};
export default () => <NewCar />;