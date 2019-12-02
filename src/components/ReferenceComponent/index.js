import React from "react";
import "./Reference.scss";
import { Row, Col } from "antd";
import { Divider } from 'antd';
import { Typography } from 'antd';
import { Collapse } from 'antd';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
const { Title} = Typography;
const { Panel } = Collapse;

//Заэкспортить в соседнем файле.
const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
    as a welcome guest in many households across the world.
  </p>
);

const task1 = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
    as a welcome guest in many households across the world.
  </p>
);

const task2 = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
    as a welcome guest in many households across the world.
  </p>
);

const task3 = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
    as a welcome guest in many households across the world.
  </p>
);

function callback(key) {
  console.log(key);
}

const HomeComponent = () => (

  <div className='ReferenceContainer'>
    <Row gutter={16}>
      <Col span={22} offset={1}>
        <Title className='ReferenceContainer__title' level={3}>Справка по тестовому заданию</Title>
      </Col>
      <Col 
        className="HomeContainer__infoText" 
        xs={{ span: 24, offset: 0 }}
        sm={{ span: 22, offset: 1 }}
        md={{ span: 20, offset: 1 }}
        lg={{ span: 20, offset: 2 }}
        xl={{ span: 20, offset: 2 }}
       >
        <Collapse 
          accordion
          expandIconPosition={'right'}
          bordered={false}
          defaultActiveKey={['1']}
        >  
          <Title className='ReferenceContainer__title1' level={4}>Задание </Title>
          <Divider />
          <Panel className='ReferenceContainer__header' header="Описание" key="1">
            {text}
          </Panel>
          <Panel header="Задание 1: &nbsp; Авторизация" key="2">
            {task1}
          </Panel>
          <Panel header="Задание 2: &nbsp;  Сотрудники" key="3">
            {task2}
          </Panel>
          <Panel header="Задание 3: &nbsp; Профиль" key="4">
            {task3}
          </Panel>
        </Collapse>
        <div>
           <Title className='ReferenceContainer__help__title' level={4}>Помощь в разработке </Title>
           <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
           </Tabs>
        </div>
      </Col>
    </Row>
  </div>
);

export default HomeComponent;

    // isAcitve

      // <Col 
      //   className="gutter-row" 
      //   xs={{ span: 22, offset: 1 }}
      //   sm={{ span: 20, offset: 2 }}
      //   md={{ span: 20, offset: 2 }}
      //   lg={{ span: 20, offset: 2 }}
      //   xl={{ span: 20, offset: 2 }}
      //  >
      // <div className="HomeContainer__infoText">
      //   <Title className="ReferenceContainer__textTitle" level={4}>1. Для прохождения тестового задания вам необходимо авторизоваться на сервисе.</Title>
      //   <Title className="ReferenceContainer__textTitle" level={4}>2. После подтверждения регистрации, требования к заданию, само задание и советы по его выполнению вы найдете в разделе справка.</Title>
      //   <Title className="ReferenceContainer__textTitle" level={4}>3. О завершении работы вы можете уведомить нас через личный кабинет, либо отправив письмо по адресу exam@atwinta.ru.</Title>
      //   <Title className="ReferenceContainer__textTitle" level={4}>4. Не забудьте сохранить ссылку на github проекта в профиле</Title>
      //  </div>
      // </Col>