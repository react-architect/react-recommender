import React, {useEffect, useState} from 'react'
import {FETCH_PARAMS, URL, RECOMMEND, REPORT} from '../constants';
import {IOption} from "../option/Option";

const RecommenderContext = React.createContext({});


const RECOMMENDATION_STATE = {
    LOADING: "LOADING",
    ERROR: "ERROR",
    RESPONSE: "RESPONSE"
};

export interface IRecommender {
    /**
     * The accountId is the unique email address assigned to the React app. The owner of the
     * email address has access to the stats of all objectives.
     */
    accountId: string,

    /**
     * Wrap your React app into this component at a high level.
     */
    children: React.ReactNode
}

/**
 * Callback function to notify the recommender about achieving an objective
 *
 * @param accountId specifies the Id of the application account.
 * @param objectiveId specifies the id of the achieved objective
 * @param optionId specifies the option that has beed used
 */
const onAchieved = (accountId: string, objectiveId: string, optionId: string) => (
    fetch(URL+REPORT,
        Object.assign({
            body: JSON.stringify({
                accountId: accountId,
                objectiveId: objectiveId,
                optionId: optionId
            })
        }, FETCH_PARAMS)
    ).then(result => {
        console.log("post-result: ", result);
    }).catch(error => {
        console.error("post-error: ", error);
    })
);


export default function Recommender(props: IRecommender) {
    const [optionId, setOptionId] = useState(undefined);

    return (
        <RecommenderContext.Provider
            value={{
                accountId: props.accountId,
                optionId: optionId,
                setOptionId: setOptionId
            }}>{props.children}
        </RecommenderContext.Provider>
    );
};


export function withObjective(Component: React.ReactType) {


    return function WrapperComponent(props) {
        return (
            <RecommenderContext.Consumer>
                {(context: any) => {

                    return <Component
                        {...props}
                        onAchieved={(objectiveId: string) => (
                            onAchieved(context.accountId,objectiveId,context.optionId)
                        )}
                    />
                }}
            </RecommenderContext.Consumer>
        );
    };
};

export interface IRecommendResult {
    /**
     * Indicates whether the Recommend-component is loading the recommendation {true} or not {false}
     */
    loading: Boolean,

    /**
     * The recommended option. Only defined if loading is done {false} and there is no {error}
     */
    recommendation?: React.ReactNode,

    /**
     * Error during loading the recommendation. If loading is complete ({false}), then either the error or the
     * recommendation is defined.
     */
    error?: string,

    /**
     * Callback-function to render the option with the specified Id. Should be the recommended one. But it is up to
     * the app to render a different option
     *
     * @param optionId
     */
    renderOption: (optionId: string) => React.ReactNode
};

type Recommendation = (props: IRecommendResult) => React.ReactNode;

export interface IRecommend {
    accountId: string,
    setOptionId: (optionId: string) => void,
    mode: string | number,
    objectiveId?: string,
    options: IOption[],
    children: Recommendation,
    epsilon?: Number
};

function provideOption(Component: React.ReactType) {
    return function WrapperComponent(props) {
        return (
            <RecommenderContext.Consumer>
                {(context: any) => {

                    return <Component
                        {...props}
                        accountId={context.accountId}
                    />
                }}
            </RecommenderContext.Consumer>
        );
    };
};


export const Recommend = provideOption((props: IRecommend) => {
    const [state, setState] = useState({state: RECOMMENDATION_STATE.LOADING, recommendation: undefined});

    useEffect(() => {

        if (state.state === RECOMMENDATION_STATE.LOADING) {
            fetch(URL+RECOMMEND,
                Object.assign({
                    body: JSON.stringify({
                        objectiveId: props.objectiveId,
                        accountId: props.accountId,
                        mode: props.mode,
                        options: props.options.map(option => option.props.id),
                        epsilon: props.epsilon
                    })
                }, FETCH_PARAMS)
            ).then(result => result.json()).then(parsedBody => {
                setState({
                    state: RECOMMENDATION_STATE.RESPONSE,
                    recommendation: parsedBody.recommendation
                });
            }).catch(error => {
                setState({
                    state: RECOMMENDATION_STATE.ERROR,
                    recommendation: error
                });
            });

        };
    }, [state]);

    return (
        <RecommenderContext.Consumer>
            {(context: any) => {

                return props.children({
                    loading: state.state === RECOMMENDATION_STATE.LOADING,
                    recommendation: state.state === RECOMMENDATION_STATE.RESPONSE ? state.recommendation : undefined,
                    error: state.state === RECOMMENDATION_STATE.ERROR ? state.recommendation : undefined,
                    renderOption: (optionId) => {
                        context.setOptionId(optionId);
                        return props.options.find(option => option.props.id == optionId);
                    }
                });
            }}
        </RecommenderContext.Consumer>
    );
});

