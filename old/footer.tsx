/**
 * Created by frank.zickert on 15.04.19.
 */

import React from 'react';

import styled from 'styled-components'

import { IRoute, withRoutes, withUser, userLogout, getBasename } from 'infrastructure-components';
import { Link, withRouter } from 'react-router-dom';

export const BottomBar = styled.div`
    background-color: ${props => props.background};
    overflow: hidden;
    font-family: ${props => props.theme.navbarFont};
    font-size: ${props => props.theme.navbarFontSize};
    display: block;
    text-align: center;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index:999;
    
    
    & > a {
        display: inline-block;
        color: #FFF;
        text-align: center;
        padding: 10px 12px;
        text-decoration: none;
         
        &:hover {
            background-color: ${props => props.theme.navbarHoverColor};
            color: #000;
        }
        
    }
    
`;


interface IProps {
    background: string
    routes: Array<IRoute>, //attached through withRoutes,
    location: any, // attached through withRouter
    userId: string | undefined, // attached through withUser
}




const Footer: React.SFC<IProps> = (props) => {


    return (
        <BottomBar background={props.background}>
            {
                props.routes.filter(route => route.customType && route.customType.footer).map((route, i) => (
                    <Link key={'ROUTE_'+i}   to={ route.path }>
                        {route.name}

                    </Link>
                ))
            }
            
        </BottomBar>
    );
};

export default withRoutes(withRouter(withUser(Footer)));
