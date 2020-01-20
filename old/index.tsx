import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';

import { withUser } from 'infrastructure-components';

import NotebookBar from './notebook-bar';
import Cell from '../cell';

import {
    setIdentifier, setPort, setSecurity, setPassword, setEmail, setLdsPassword,
    getNotebookRoot, SECURITY, PACKAGES, addPackage, deletePackage
} from './reducer';
import Grid, { Item, ItemDesign } from '../../design/grid';

import { Header2 } from '../../design/header';
import Input from '../../design/input';
import Selector, { SelectItem } from '../../design/selector';
import { InlineCode } from '../../design/text';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import {mainColor} from "../../design/theme";
import {media} from "../../design/responsive";

//import DownloadButton from './download-button';

interface INotebookProps {
    arrIdx: number,
    code: string,
    error: boolean,
    userId: string | undefined, // attached through withUser
}


const Frame = styled.span`
    width: ${props => props.width};
    position: relative;
    padding: 10px;
    padding-top: 10px;
    display:flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;

    border:2px solid ${props => props.theme.mainColor};
    border-radius: 8px;;
  
    margin: 12px 4px;
`;


const SecurityItem = styled(SelectItem)`
    
    font-size: 0.8em;
    font-family: ${props => props.theme.headlineFont};
    
    ${({ theme }) => media.desktop`
      width: calc(33% - 28px);
   `}

    ${({ theme }) => media.tablet`
      width: calc(33% - 28px);
    `}

    ${({ theme }) => media.mobile`
      width: calc(100% - 12px);
      margin-top: 4px;
      margin-bottom: 4px;
   `}
`;


const SecurityHead = styled.span`
    display: block;
    font-size: 1.8em;
    font-weight: bold;
    
`;

const NotebookHeader = styled.h3`
    display: block;
`;

function Notebook (props: INotebookProps)  {

    const { identifier, port, security, password, email, packages, ldspassword } = useSelector(getNotebookRoot);
    const dispatch = useDispatch();

    return <div>
        <Grid>
            <Item  desktop={12} tablet={12} mobile={12}>
                <Header2>
                    Start your Data Analysis now:
                </Header2>




            </Item>
        </Grid>
        <div>
            <NotebookBar />

            <Cell executed/>
            <Cell executed/>
            <Cell />

        </div>

    </div>



}

export default styled(withUser(Notebook))`
    margin-left: 20px;
`;