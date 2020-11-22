import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Button, Card, Col, Icon, Row, Modal, List, Tag, Input, message } from 'antd/es';
import MentionsTagsComponent from '../../MentionsTagsComponent';
import posts from '../../data/Posts'

export const EditAccountModal = ({value}) =>{
  const currentUser = useSelector(state => state.user.currentUser.profile)
  const [editProfilModal, setEditProfilModal] = useState(value);
  const [currentEmail, setCurrentEmail] = useState(currentUser.email);
  const [currentFirstname, setCurrentFirstname] = useState(currentUser.firstname)
  const [currentLastname, setLastname] = useState(currentUser.lastname)
  const [currentPhoneNumber, setCurrentPhoneNumber] = useState(currentUser.phoneNumber)

  const updateProfile =()=>{
    let tmp = currentUser;
    tmp.email = currentEmail;
    tmp.firstname = currentFirstname;
    tmp.lastname = currentLastname;
    tmp.phoneNumber = currentPhoneNumber;
    message.success('Profile well updated', 3);
  };

  return(
      <Modal title="Edit your account" okText="Update" visible={editProfilModal} onOk={updateProfile()} onCancel={() => setEditProfilModal(false)}>
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

export const EditAccountPicture = ({value}) =>{
  const [uploadModal, setUploadModal] = useState(value);
  const [description, setDescription] = useState("");
  const [hashtags, setHastags] = useState("");
  const [mentions, setMentions] = useState("");

  const uploadPicture =()=> {
    alert("J'upload une image avec la description : " + description + " et les hashtags " + hashtags + " et les mentions " + mentions);
  };

  return(
  <Modal title="Upload a picture" okText="Upload" visible={uploadModal} onOk={uploadPicture()} onCancel={() => setUploadModal(false)}>
    <Row type="flex" justify="center" className="input-container">
      <Col span={20}>
        <b>Description:</b>
        <Input id="description" title="Description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </Col>
    </Row>
    <MentionsTagsComponent type="mentions" value={mentions} title="Mention a user" setValue={setMentions(mentions)} />
    <MentionsTagsComponent type="tags" value={hashtags} title="Hashtags" setValue={setHastags(hashtags)} />
  </Modal>
  )
};

export const UploadPosts = ({value}) => {
  const [previewPublicationModal, setPreviewPublicationModal] = useState(value);
  const [previewItem, setPreviewItem] = useState(0);
  const post =  posts.posts


  const updatePic = () => {
    alert("J'update la publcation avec l'id : " + post[previewItem].id);
  }

  const deletePic =()=> {
    alert("Je supprime la publcation avec l'id : " + post[previewItem].id);
  }

  return(
    <Modal width={520} visible={previewPublicationModal} onCancel={() => setPreviewPublicationModal(false)}
    footer={<Row type="flex">
      <Col span={12} className="text-center">
        <Button type="ghost" icon="edit" onClick={updatePic()}>Edit</Button>
      </Col>
      <Col span={12} className="text-center">
        <Button type="danger" icon="delete" onClick={deletePic()}>Delete</Button>
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


