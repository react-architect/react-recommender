import * as React from 'react';

import styled from 'styled-components';

import imgLogo from '../assets/logo.png';

import { mainColor } from '../design/theme';
import Container from '../design/container';
import Grid, { Item, ItemDesign } from '../design/grid';
import { Title, PreHeader, Header1, Header2, SubHeader } from '../design/header';
import { InlineCode } from '../design/text';
import Button, { LinkButton } from '../design/button';

import { media } from '../design/responsive';

import Page from '../components/page';
import  Notebook from '../components/notebook'

/**
 * Sizing Icons: https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal, faGamepad} from '@fortawesome/free-solid-svg-icons'
import { faDocker } from '@fortawesome/free-brands-svg-icons'
import { withRouter } from 'react-router-dom'


interface HomePageProps {
    history: any // provided by withRouter
}

export const TeaserImage =  styled.img`
    
    max-width: 90%;
    max-height: 90%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
   
    ${({ theme }) => media.mobile`
        position: relative;
    `}
    
`;

export const TeaserItem = styled(Item)`
    order: 3;
   
    ${({ theme }) => media.mobile`
        
        order: 1;
    `}
`;

export const ResponsiveImage =  styled.img`
    

    ${({ theme }) => media.desktop`
        max-width: 50%;
    `}
   
    ${({ theme }) => media.tablet`
        max-width: 50%;
    `}
   
    ${({ theme }) => media.mobile`
        max-width: 90%;
    `}
    margin: 2em;
`;

const Feature = styled.li`
    padding-bottom: 0.2em;
`;


const ArgumentHead = ({content, icon, color}) => <SubHeader style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: color}}>
        <FontAwesomeIcon icon={icon} color={color} size="2x" style={{ marginRight: "0.2em" }}/>
        {content}
</SubHeader>



const HomePage: React.SFC<HomePageProps> = (props) => {

    return <Page>

        
        <Container>
            <div style={{marginTop: "2em"}} />
            <PreHeader>Code-Architect</PreHeader>

            <Title>Experiment. Deploy. Use.</Title>
            <Grid>
                <Item desktop={9} tablet={8} mobile={12}>
                    <p><b>
                        Code-Architect lets you experiment with data and code. But it provides for producing code that
                        you can put into production - with a single click.
                    </b></p>
                    <ul className="fa-ul" >
                        <Feature><FontAwesomeIcon icon={faDocker} listItem/>
                            Experiment with your data and code. Get immediate feedback
                        </Feature>
                        <Feature><FontAwesomeIcon icon={faTerminal} listItem/>
                            Track execution history
                        </Feature>
                        <Feature><FontAwesomeIcon icon={faGamepad} listItem/>
                            Deploy to production with one click!
                        </Feature>
                        <Feature><FontAwesomeIcon icon={faGamepad} listItem/>
                            Let your users use your analysis without bothering you to rerun the Notebook
                        </Feature>
                    </ul>

                    {/*
                    <p align="center">
                        <LinkButton
                            width="280px"
                            href="https://www.lean-data-science.com/page?ref=landingpage&dest=https://towardsdatascience.com/how-to-setup-your-jupyterlab-project-environment-74909dade29b"
                            target="_blank"
                        >Learn more</LinkButton>


                    </p>
                     */}


                </Item>
                <TeaserItem desktop={3} tablet={4} mobile={6} style={{ position:"relative"}} >
                    <TeaserImage src={imgLogo}/>
                </TeaserItem>


            </Grid>

            <hr />
            <Notebook />


        </Container>



    </Page>


};

export default withRouter(HomePage);