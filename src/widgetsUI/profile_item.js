import React from 'react';
import { Link } from 'react-router-dom';
import "./ProfileItem.scss";
import { Card, Col, Avatar } from "antd";

const { Meta } = Card;

const ProfileItem = (item) => {

    return (
        <div className="workersWidjetUi">
            <Link to={`/workers/${item.id}`} className="profile_item">

                <Col 
                  className="gutter-row" 
                   xs={{ span: 22, offset: 1 }}
                   md={{ span: 12, offset: 0 }}
                   lg={{ span: 8, offset: 0 }}
                   xl={{ span: 6, offset: 0 }}
                >
                    <Card
                      className="profile_item__card"
                      bordered={true}
                      hoverable
                      cover={<img alt={item.login} src={item.image} />}
                    >
                      <Meta 
                        className="cardTitle"
                        title={item.name}
                        description={item.email}
                        avatar={<Avatar src={item.image} />}
                      />
                    </Card>
                </Col>

            </Link>
        </div>
    );
};

export default ProfileItem;

// style={{ padding: '30px' }}
//<h2 className="colText">{item.name}<h2>
// style={{ width: 300 }}
    // breakpoint="xs"
      // collapsedWidth="0"
    //style={{ padding: 24, background: '#fff', minWidth: 360 }}
    //span={8}
                      // xs={{ span: 5, offset: 1 }} 
                  // lg={{ span: 6, offset: 2 }}

                // <div className="profile__Img">
                //     <img alt={item.login} src={item.image}/>
                // </div>
                // <div className="profile__fio">
                //     <h2>{item.name}</h2>
                // </div>

                // <Link to={`/workers/${item.id}`} className="profile_link">Открыть профиль</Link>
