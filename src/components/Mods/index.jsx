import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateRequest, userRequest } from '../../actions';
import { Button, Col, Row, Modal, List, Tag, Input, message } from 'antd/es';
import MentionsTagsComponent from '../../MentionsTagsComponent';
import posts from '../../data/Posts'

export const EditAccountModal = () =>{
  const currentUser = useSelector(state => state.user.currentUser.profile)
  const currentState = useSelector(state => state.state);

  const [editProfilModal, setEditProfilModal] = useState(currentState.editProfilModal);
  const [currentEmail, setCurrentEmail] = useState(currentUser.email);
  const [currentFirstname, setCurrentFirstname] = useState(currentUser.firstname);
  const [currentLastname, setLastname] = useState(currentUser.lastname);
  const [currentPhoneNumber, setCurrentPhoneNumber] = useState(currentUser.phoneNumber);
  const dispatch = useDispatch();

  console.log(currentUser);

  const updateProfile =()=>{

    const data ={
      email: currentEmail,
      firstname: currentFirstname,
      lastname: currentLastname,
      phoneNumber: currentPhoneNumber
    }

    dispatch(userRequest(data))
    message.success('Profile well updated', 3);
  };

  return(
    <Modal title="Edit your account" okText="Update" visible={editProfilModal} onOk={()=>updateProfile()} onCancel={() => dispatch(stateRequest(false, currentState.uploadModal, currentState.previewPublicationModal, currentState.previewItem))}>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>EMail</b>
          <Input id="email" type="text" value={currentEmail} onChange={(e) => setCurrentEmail(e.target.value)} />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Firstname</b>
          <Input id="firstname" type="text" value={currentFirstname} onChange={(e) => setCurrentFirstname(e.target.value) } />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Lastname</b>
          <Input id="lastname" type="text" value={currentLastname} onChange={(e) => setLastname(e.target.value)} />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Phone number</b>
          <Input id="email" type="text" value={currentPhoneNumber} onChange={(e) => setCurrentPhoneNumber(e.target.value)} />
        </Col>
      </Row>
    </Modal>
  )
};

export const EditAccountPicture = () =>{
  const currentState = useSelector(state => state.state);
  console.log("bye")

  const [uploadModal, setUploadModal] = useState(currentState.uploadModal);
  const [description, setDescription] = useState("");
  const [hashtags, setHastags] = useState("");
  const [mentions, setMentions] = useState("");
  const dispatch = useDispatch();


  const uploadPicture =()=> {
    return alert("J'upload une image avec la description : " + description + " et les hashtags " + hashtags + " et les mentions " + mentions);
  };

  return(
  <Modal title="Upload a picture" okText="Upload" visible={uploadModal} onOk={()=> uploadPicture()} onCancel={() => dispatch(stateRequest(currentState.editProfilModal, false, currentState.previewPublicationModal, currentState.previewItem))}>
    <Row type="flex" justify="center" className="input-container">
      <Col span={20}>
        <b>Description:</b>
        <Input id="description" title="Description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </Col>
    </Row>
    {/* <MentionsTagsComponent type="mentions" value={mentions} title="Mention a user" setValue={setMentions(mentions)} />
    <MentionsTagsComponent type="tags" value={hashtags} title="Hashtags" setValue={setHastags(hashtags)} /> */}
  </Modal>
  )
};

export const UploadPosts = () => {
  const currentState = useSelector(state => state.state);

  const [previewPublicationModal, setPreviewPublicationModal] = useState(currentState.previewPublicationModal);
  const [previewItem, setPreviewItem] = useState(currentState.previewItem);
  const post =  posts.posts

  const dispatch = useDispatch();

  const updatePic = () => {
    alert("J'update la publcation avec l'id : " + post[previewItem].id);
  }

  const deletePic =()=> {
    alert("Je supprime la publcation avec l'id : " + post[previewItem].id);
  }

  return(
    <Modal width={520} visible={previewPublicationModal} onCancel={() => dispatch(stateRequest(currentState.editProfilModal, currentState.uploadModal, false, 0))}
    footer={<Row type="flex">
      <Col span={12} className="text-center">
        <Button type="ghost" icon="edit" onClick={()=>updatePic()}>Edit</Button>
      </Col>
      <Col span={12} className="text-center">
        <Button type="danger" icon="delete" onClick={()=>deletePic()}>Delete</Button>
      </Col>
    </Row>}
  >
    <Row type="flex" align="middle">
      <Col xs={24} md={12} className="text-center">
        <img src={post[previewItem].imageUrl} width={200} height={200} alt={post[previewItem].description} />
      </Col>
      <Col xs={24} md={12}>
        <div>
          <b>Description: </b>
          <p>{post[previewItem].description}</p>
        </div>
        <div>
          <b>Hashtag:</b>
          <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={post[previewItem].hashtags}
            renderItem={(tag) => (
              <List.Item>
                <Tag>{`${tag}`}</Tag>
              </List.Item>
            )}
          />
        </div>
        <div>
          <b>Mention:</b>
          <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={post[previewItem].mentions}
            renderItem={(user) => (
              <List.Item>
                <Tag>{`@${user}`}</Tag>
              </List.Item>
            )}
          />
        </div>
      </Col>
    </Row>
  </Modal>
  )
};


