import React from "react";
import "./Page404.scss";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
//import { Result, Button } from 'antd';
import { Button } from "antd";
import { Typography } from "antd";
const { Title } = Typography;

const Page404Component = () => (
  <div className="page404">
    <Row>
      <Col>
        <Title>404 :(</Title>
        <Title level={3}>Страница не существует</Title>
        <Link to="/">
          <Button className="page404__button" type="primary">
            Домой
          </Button>
        </Link>
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
