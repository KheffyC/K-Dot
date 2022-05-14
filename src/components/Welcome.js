import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled, {keyframes} from "styled-components"
import { ImFacebook2, ImLinkedin2, ImGithub } from 'react-icons/im'

const Welcome = ({ animationType }) => {

    const animation = keyframes`${animationType}`;
    const AnimationDiv = styled.div`
        animation: 2s ${animation};
        font-size: 30px;
    `;
    const navigate = useNavigate()

  return (
    <AnimationDiv>
        <br />
        <br />
        <h1 className='AnimationH1'>Welcome to K-Dot</h1>
        <br />
        <h4>Shop around and see what you like</h4>
        <br />
        <button className='HomeButton' onClick={() => navigate("/Products")}>Lets Get Started</button>
        <div className='SocialLinks'>
            <ul>
                <li><a href='https://www.facebook.com/kheffy.cervantez/' target="_blank" rel="noreferrer"><ImFacebook2/></a></li>
                <li><a href='https://github.com/KheffyC/K-Dot' target="_blank" rel="noreferrer"><ImGithub/></a></li>
                <li><a href='https://www.linkedin.com/in/kheffy-cervantez/' target="_blank" rel="noreferrer"><ImLinkedin2/></a></li>
            </ul>
        </div>
    </AnimationDiv>

  )
}

export default Welcome