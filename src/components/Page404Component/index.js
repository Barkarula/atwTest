import React from "react";
import "./Page404.scss";
import { Row, Col } from "antd";
//import { Result, Button } from 'antd';

const Page404Component = () => (

  <div className='ReferenceContainer'>
    <Row gutter={16}>
      <Col span={22} offset={1}>
        404 
      </Col>
    </Row>
  </div>
);

export default Page404Component;

// Обновить ANTD 
  // <div className='ReferenceContainer'>
  //         <Result
  //         status="404"
  //         title="404"
  //         subTitle="Sorry, the page you visited does not exist."
  //         extra={<Button type="primary">Back Home</Button>}
  //       />