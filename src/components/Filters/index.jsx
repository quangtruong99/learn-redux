import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { prioritiesFilter, searchFilter, statusFilter } from '../../redux/actions';

const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState('');
  const [status, setStatus] = useState('All');
  const [priorities,setPriorities] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchFilter(searchText))
  },[searchText])

  const handleSetStatus = (e) => {
    setStatus(e.target.value)
    dispatch(statusFilter(e.target.value))
  }

  const handleSetPriority = (value) => {
    setPriorities(value);
    dispatch(prioritiesFilter(value))

  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleSetStatus}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={priorities}
          onChange={handleSetPriority}
        >
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
      </Col>
    </Row>
  );
}