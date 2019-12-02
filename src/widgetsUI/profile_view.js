import React from 'react';
import "./ProfileView.scss";
import { Row, Col } from "antd";
import { Typography } from 'antd';
import { format } from 'date-fns'
const { Title, Text } = Typography;

const ProfileView = (item) => {

  let responseTime = item.worker.adopted_at;
  let msUTC = Date.parse(responseTime)
  let formattedTime = new Date(msUTC)

  let itemDay = formattedTime.getDate();
  let itemMonth = formattedTime.getMonth();
  let itemYear = formattedTime.getFullYear();

  let resultTime = format(new Date(itemYear, itemMonth, itemDay), 'DD.MM.YYYY')

    return (
        <div className="workerViewWidjetUi">
        <Row gutter={16}>
          <Col 
            className="WorkerContainer__imgContainer" 
            span={22}
            offset={1}
          >
            <Title className='WorkerContainer__title' level={2}>{item.name}</Title>
          </Col>
          <Col 
            className="WorkerContainer__imgContainer" 
            xs={{ span: 22, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            md={{ span: 10, offset: 1 }}
            lg={{ span: 8, offset: 1 }}
            xl={{ span: 16, offset: 1 }}
          >
            <img className="WorkerContainer__Img" alt={item.worker} src={item.image} />
          </Col>
          <Col 
            className="gutter-row" 
            xs={{ span: 22, offset: 1 }}
            sm={{ span: 12, offset: 1 }}
            md={{ span: 10, offset: 1 }}
            lg={{ span: 14, offset: 1 }}
            xl={{ span: 16, offset: 1 }}
          >
            <div className="WorkerContainer__infoText" >
              <Title level={4}>Логин:</Title>
                <Text strong>{item.login}</Text>
              <Title level={4}>Email:</Title>
                <Text copyable strong>{item.email}</Text>
              <Title level={4}>Должность:</Title>
                <Text strong>{item.worker.position}</Text>
              <Title level={4}>Отдел:</Title>
                <Text strong>{item.worker.department}</Text>
              <Title level={4}>Зачислен:</Title>
               <Text strong>{resultTime}</Text>
              <Title level={4}>О себе:</Title>
                <p>{item.about}</p>
            </div>
           </Col>
        </Row>
        </div>
    );
};

export default ProfileView;

// style={{ padding: '30px' }}
    //style={{ padding: 24, background: '#fff', minWidth: 360 }}
