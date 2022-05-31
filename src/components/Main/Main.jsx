import React from 'react';
import styled from 'styled-components';
import YellowBtn from "../../Ui/Button/YellowBtn";
import Logo from "./img/logo.svg"

const Main = () => {
    return (
        <MainContainer>
            <MainHeader>
                <MainLogo>
                    <Image src={Logo}/>
                    <LogoText>Testtask</LogoText>
                </MainLogo>
                <MainBtns>
                    <YellowBtn a={'asd'}>Users</YellowBtn>
                    <YellowBtn a={'asd'}>Sing up</YellowBtn>
                </MainBtns>
            </MainHeader>
            <MainBlock>
                <MainContant>
                    <ContentHeading>Test assignment for front-end developer</ContentHeading>
                    <ContentText>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</ContentText>
                    <YellowBtn>Sing up</YellowBtn>
                </MainContant>

            </MainBlock>
        </MainContainer>
    );
};

export default Main;

const MainContainer = styled.div`
  max-width: 1190px;
  margin: 10px auto;
`
const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 60px;
`
const MainLogo = styled.div`
  display: flex;       
`

const Image = styled.img`
`
const LogoText = styled.p`
  text-transform: uppercase;
`

const MainBtns = styled.div`
display: flex;
`




const MainBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-image: url('https://abzagenci.imgix.net/abzagency/main/bg/bg.png');
  width: 100%;
  height: 650px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: black;
  position: relative;
  :after{
    content:'';
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:rgba(0,0,0,.5);
  }
`
const MainContant = styled.div`
  color: azure;
  position: absolute;
  height: 50%;
  z-index: 5;
  display: flex;
  flex-wrap: wrap;
  max-width:  380px;
  text-align: center;
  justify-content: center;
  align-items: center;
`
const ContentHeading = styled.h1`
    text-align: center;
   
`
const ContentText = styled.p`
`


