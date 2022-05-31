import React, {useEffect} from 'react';
import styled from 'styled-components';

const UserItem = ({post}) => {
    console.log(post.name)
    return (
        <UserCard>
            <Image />
            <Name>{post.name} </Name>
            <Position>Co-Founder and CEO</Position>
            <Mail>Ilya_founder@gmail.com</Mail>
            <Phone>+38 (098) 235 44 24</Phone>
        </UserCard>
    );
};

export default UserItem;

const UserCard = styled.div`
  box-sizing: border-box;
  width: 282px;
  height: 254px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  line-height: 26px;
`

const Image = styled.p`
  src: url(${post =>post.photo});
`
const Name = styled.p`

`
const Position = styled.p`

`
const Mail = styled.p`

`
const Phone = styled.p`

`
