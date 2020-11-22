// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { EditAccountModal, EditAccountPicture, UploadPosts } from '../../components/Mods'
import { ProfileCard } from '../../components/ProfileCard'
import { PostCard } from '../../components/PostCard'

export const Home = () =>{
  const currentState = useSelector(state => state.state);

  console.log(currentState);

  if(currentState.editProfilModal === true){
    console.log("Hello 1")
    return(
    <div style={{ margin: 50 }}>
      <EditAccountModal/>
      <ProfileCard />
      <PostCard/>
    </div>  
    )    
  }

  if(currentState.uploadModal === true){
    console.log("Hello 2")
    return (      
    <div style={{ margin: 50 }}>
      <EditAccountPicture/>
      <ProfileCard />
      <PostCard/>
    </div>  
    )   
  }

  if(currentState.previewPublicationModal === true){
    console.log("Hello 3")
    return (
      <div style={{ margin: 50 }}>
      <UploadPosts /> 
      <ProfileCard />
      <PostCard/>
    </div>  
    )   
  }

  return(
    <div style={{ margin: 50 }}>
      <ProfileCard />
      <PostCard/>
    </div>  
)
};
