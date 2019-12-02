import React from "react";
import "./Home.scss";
import { Row, Col } from "antd";
import { Typography } from 'antd';
const { Title} = Typography;

const HomeComponent = () => (
  <div 
    className='HomeContainer'
  >
    <Row gutter={16}>
      <Col 
        className="HomeContainer__topTitle" 
        span={22}
        offset={1}
      >
        <Title className='HomeContainer__title' level={1}>Атвинта</Title>
        <Title className='HomeContainer__subTitle' level={4}>Тестовое задание</Title>
      </Col>
      <Col 
        className="gutter-row" 
        xs={{ span: 22, offset: 1 }}
        sm={{ span: 20, offset: 2 }}
        md={{ span: 20, offset: 2 }}
        lg={{ span: 20, offset: 2 }}
        xl={{ span: 20, offset: 2 }}
       >
      <div className="HomeContainer__infoText">
        <Title className="HomeContainer__textTitle" level={4}>1. Для прохождения тестового задания вам необходимо авторизоваться на сервисе.</Title>
        <Title className="HomeContainer__textTitle" level={4}>2. После подтверждения регистрации, требования к заданию, само задание и советы по его выполнению вы найдете в разделе справка.</Title>
        <Title className="HomeContainer__textTitle" level={4}>3. О завершении работы вы можете уведомить нас через личный кабинет, либо отправив письмо по адресу exam@atwinta.ru.</Title>
        <Title className="HomeContainer__textTitle" level={4}>4. Не забудьте сохранить ссылку на github проекта в профиле</Title>
       </div>
      </Col>
    </Row>
  </div>
);

export default HomeComponent;
