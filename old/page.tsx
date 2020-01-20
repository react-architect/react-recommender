import React from 'react'

import styled, {ThemeProvider, withTheme } from 'styled-components';

import { theme, Frame } from '../design/theme';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import notebookReducer from './notebook/reducer';
import Menu from './menu';
import Footer from './footer';

interface IPageProps {
    secondary: boolean | undefined
};

const rootReducer = combineReducers({
    notebookReducer

});


const store = createStore(rootReducer);


export const Page: React.SFC<IPageProps> = (props) => {

    return (
        <Provider store={ store }>
            <ThemeProvider theme={theme}>
                <Frame secondary={props.secondary}>
                    <Menu background={ props.secondary ? props.secondary : theme.mainColor } />
                    <div style={{paddingBottom: "50px"}}>
                        { props.children }
                    </div>
                    <Footer background={theme.mainColor} />
                </Frame>
            </ThemeProvider>
        </Provider>
    );
};

export default Page;

