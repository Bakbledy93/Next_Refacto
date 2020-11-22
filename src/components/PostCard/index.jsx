import React from 'react';
import { Card, Col, Icon, Row } from 'antd/es';
import { useSelector, useDispatch } from 'react-redux';
import { stateRequest } from '../../actions';
import posts from '../../data/Posts'

export const PostCard = () =>{
  const post =  posts.posts;
  const currentState = useSelector(state => state.state);
  const dispatch = useDispatch();
  
  const openPreview = (postNumber)=> {
    console.log("hello")
    return dispatch(stateRequest(currentState.editProfilModal, currentState.uploadModal, true, postNumber))
  }

  return(
    <div style={{ margin: 50 }}>
      <Row type="flex" justify="center">
        <Col sm={18} xs={24}>
          <Col span={24} className="container text-center">
            <h2>
              <Icon type="save" />
              <span className="span-icon">Publications</span>
            </h2>
            <Card bordered className="card-pubs" onClick={() => openPreview(0)}>
              <img src={post[0].imageUrl} width={200} height={200} alt={post[0].imageUrl} />
            </Card>
            <Card bordered className="card-pubs" onClick={() => openPreview(1)}>
              <img src={post[1].imageUrl} width={200} height={200} alt={post[1].imageUrl} />
            </Card>
            <Card bordered className="card-pubs" onClick={() => openPreview(2)}>
              <img src={post[2].imageUrl} width={200} height={200} alt={post[2].imageUrl} />
            </Card>
          </Col>
        </Col>
      </Row>
    </div>
  )
}