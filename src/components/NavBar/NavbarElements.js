import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    height: 6rem;
    width: 100vw;
    display: flex;
    position: sticky;
    z-index: 10;
    background-color: #053742;
    box-shadow: 0 3px 20px rgba(0,0,0,0.2);
`;

export const NavLink = styled(Link)`
    color:#f2f5f7;
    font-family: sans-serif;
    letter-spacing: 1px;
    font-weight: 500;
    margin: 0 0.7vw;
    text-decoration: none;
    transition: all ease-in-out 350ms;
    padding: 10px;  
    position: relative;
    &.active {
        color:#000;
        background-color: #fff;
        padding: 10px;
        border-radius: 50px;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    width: 80vw;
    display: flex;
    padding: 0 0.7vw;
    justify-content: space-evenly;
    align-items: center;
    text-transform: uppercase;
    list-style: none;
    font-weight: 600;
`;