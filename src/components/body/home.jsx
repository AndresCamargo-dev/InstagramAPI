import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../body/home.css';
const URL_API = "https://graph.instagram.com/me";
const access_token = "IGQVJXVGFRRW1Td281OXVQYjd2WWVZANmJydEZAvY3ctVV9mNUJBaGkyZADZABZAmtlTXphRDgyVU9DY29Cdnl3OURZAZAHpfR1RNaFVqMFVoeUhadzdTUnVjNEl0QUIwZAGVFU2VNMFZAoaS1JWmJuRGNLanpRLWgxVTMxUjc5Uldn";

const getUserInfo = async (setUserInfo) => {
  try {
    const userInfo = await axios.get(`${URL_API}?fields=id,username,media_count&access_token=${access_token}`)
    setUserInfo(userInfo.data);
    return userInfo
  } catch (error) {
    console.error(error)
  }
}

const getMediaInfo = async (setMedaInfo) => {
  try {
    const mediaData = await axios.get(`${URL_API}/media?fields=id,media_url,caption&access_token=${access_token}`)
    console.log(mediaData)
    setMedaInfo(mediaData.data)
    return mediaData
  } catch (error) {
    console.log(error);
  }
};

const Home = () => {
  const [userInfo, setUserInfo] = useState({});
  const [mediaInfo, setMediaInfo] = useState({});

  const evento = ({ setUserInfo, setMediaInfo }) => {
    getUserInfo(setUserInfo);
    getMediaInfo(setMediaInfo);
  }

  useEffect(() => {
    console.log('logeo', userInfo);
    console.log('logeo media', mediaInfo);
  }, [userInfo, mediaInfo]

  )

  return (
    <div>
      {/* <h1>{`${userInfo.username}`}</h1>
      <h2 className='neumorphism'></h2>
      <p>{`${userInfo.media_count}`}</p>
      <p>{`${mediaInfo.data[0].id}`}</p> */}

      <div className='photos-container'>
        {mediaInfo && mediaInfo.data.map((p) => {
          return (
            <img src={p.media_url} id={p.id} className='100px' />
          );
        })}
      </div>

      <button onClick={() => evento({ setUserInfo, setMediaInfo })}>click</button>
    </div>
  )

};

export default Home;
