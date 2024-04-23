import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import {  useRef, useState } from 'react';
import {  remainingTodoList } from '../../redux/selectors';
export default function TodoList() {
    const ref = useRef()
    const [todoName, setTodoName] = useState('');
    const [prioriry,setPrioriry] = useState('Medium');
    const todoList = useSelector(remainingTodoList);
    const dispatch = useDispatch();
    const handleAddButtonClick = () => {
        dispatch(addTodos({
            name:todoName,
            prioriry:prioriry,
            complete:false,
            id:uuidv4()
        }));
        setTodoName('');
        setPrioriry('Medium');
        ref.current.focus();
    }
   
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(item => <Todo key={item.id} id={item.id} name={item.name} prioriry={item.prioriry} completed={item.completed}/>)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input ref={ref} value={todoName} onChange={(e)=>setTodoName(e.target.value)}/>
          <Select defaultValue="Medium" value={prioriry} onChange={(value) => setPrioriry(value)}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}