import React, {useEffect} from 'react'
import styled from 'styled-components';
import UserItem from "./UserItem/UserItem";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../../store/getUsers/action";

const UserList = () => {

    const dispatch = useDispatch()
    const listData = useSelector(store => store.getUser)
    const {users} = listData;

    // console.log(users.map(el =>el))
    useEffect(()=>{
        dispatch(addUser())
    },[])

    return (
        <ListContainer>
           <ListTitle>Working with GET request</ListTitle>
            <ListBlock>
                {users.map(post=>

                     <UserItem key={post.id} post={post}/>
                )}
            </ListBlock>
        </ListContainer>
    );
};

export default UserList;

const ListContainer = styled.div`
  
`

const ListTitle = styled.h2`
  text-align: center;
  font-size: 40px;
`
const ListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`
