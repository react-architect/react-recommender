import React, {useEffect, useState} from 'react';
import {FETCH_PARAMS, DEFAULT_URL, RECOMMEND_API, REPORT_API} from '../constants';
import {IOption} from "../option/Option";
import { RecommenderContext } from '../recommender/Recommender';
import { separateDevEnv } from '../libs';
import { Recommendation } from '../recommendation/recommendation';

/**
 * The different states the `<Recommend/>`-component can have.
 */
export const RECOMMENDATION_STATE = {
    LOADING: "LOADING",
    ERROR: "ERROR",
    RESPONSE: "RESPONSE"
};




export interface IRecommend {
    /**
     * The mode specifies the optimizing algorithm. Use "egreedy" for epsilon greedy, "random" for no optimization, or a
     * number to fix the resulting recommendation to the specified index of the options array.
     */
    mode: string | number,

    /**
     * Specify the id of the objective to be achieved.
     */
    objectiveId: string,

    /**
     * Array of `<Option/>`-components. `<Recommend/>` chooses the best options in order to achieve the specified objective
     */
    options: IOption[],

    /**
     * If you use "egreedy"-mode, you can specify the epsilon (float between 0.0 and 1.0). Epsilon is the probability
     * with which <Recommend/> recommends an option randomly.
     */
    epsilon?: Number,

    /**
     * Provide a function as the child of <Recommend/>. See Recommendation.
     */
    children: Recommendation,

};


export const provideOption = (Component: React.ReactType) => {
    return function WrapperComponent(props) {

        return (
            <RecommenderContext.Consumer>
                {(context: any) => {

                    return <Component
                        {...props}
                        accountId={context.accountId}
                        serverUrl={context.serverUrl}
                    />
                }}
            </RecommenderContext.Consumer>
        );
    };
};

/**
 *
 * The `<Recommend/>`-component is the optimizer. It selects and recommends the best of the provided options.
 */
export default function Recommend (props: IRecommend) {
    const [state, setState] = useState({state: RECOMMENDATION_STATE.LOADING, recommendation: undefined});

    useEffect(() => {

        if (state.state === RECOMMENDATION_STATE.LOADING) {
            fetch((props["serverUrl"] ? props["serverUrl"] : DEFAULT_URL)+RECOMMEND_API,
                Object.assign({
                    body: JSON.stringify({
                        objectiveId: separateDevEnv(props.objectiveId),
                        accountId: props["accountId"],
                        mode: props.mode,
                        options: props.options.map(option => option["props"].id),
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
                        return props.options.find(option => option["props"].id == optionId);
                    }
                });
            }}
        </RecommenderContext.Consumer>
    );
};
