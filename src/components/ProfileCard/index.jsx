import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateRequest } from '../../actions';
import { Avatar, Button, Card, Col, Icon, Row } from 'antd/es';

export const ProfileCard = () =>{

  const currentUser = useSelector(state => state.user.currentUser.profile)
  const [currentEmail, setCurrentEmail] = useState(currentUser.email);
  const [currentFirstname, setCurrentFirstname] = useState(currentUser.firstname);
  const [currentLastname, setLastname] = useState(currentUser.lastname);
  const [currentPhoneNumber, setCurrentPhoneNumber] = useState(currentUser.phoneNumber);
  const [currentProfilePicture, setCurrentProfilePicture] = useState(currentUser.profilePicture);
  const [currentUsername, setCurrentUsername] = useState(currentUser.username);
  const [createdDate, SetCreatedDate] = useState(currentUser.createdAt);
  const dispatch = useDispatch();
  const currentState = useSelector(state => state.state)

  const handleEditAccount = (value) =>{
    console.log("coucou")
    return dispatch(stateRequest(value, currentState.uploadModal, currentState.previewPublicationModal, currentState.previewItem))
  }

  const handlePic = (value) =>{
    console.log("coucou")
    return dispatch(stateRequest(currentState.editProfilModal, value, currentState.previewPublicationModal, currentState.previewItem))
  }

  const formatDate = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
  }

  
  return(
    <div style={{ margin: 50 }}>
    <Row type="flex" align="middle" justify="center">
      <Col sm={16} xs={24}>
        <Card bordered>
          <Row type="flex" align="middle" justify="center">
            <Col md={14} sm={16} xs={24}>
              <Row type="flex" justify="space-between">
                <Col span={10} className="text-center">
                  <Avatar size={100} icon="user" className="profil-pic" src={currentProfilePicture} />
                  <h3>{`${currentFirstname} ${currentLastname}`}</h3>
                </Col>
                <Col span={10}>
                  <p>
                    <Icon type="user" className="p-icon" />
                    {currentUsername}
                  </p>
                  <p>
                    <Icon type="mail" className="p-icon" />
                    {currentEmail}
                  </p>
                  <p>
                    <Icon type="phone" className="p-icon" />
                    {currentPhoneNumber}
                  </p>
                  <p>
                    <Icon type="calendar" className="p-icon" />
                    {formatDate(createdDate)}
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={10} sm={16} xs={24} className="text-center">
              <Button type="ghost" icon="setting" onClick={() => handleEditAccount(true)}>Edit account</Button>
              <br />
              <br />
              <Button type="ghost" icon="upload" onClick={() => handlePic(true)}>Upload a picture</Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
    </div>
  )
}