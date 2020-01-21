import React, {useEffect, useState} from 'react';
import {FETCH_PARAMS, DEFAULT_URL, RECOMMEND_API, REPORT_API} from '../constants';
import { separateDevEnv } from '../libs';
import {IOption} from "../option/Option";

import { RecommenderContext } from '../recommender/Recommender';

/**
 * Callback function to notify the recommender about achieving an objective
 *
 * @param accountId specifies the Id of the application account.
 * @param objectiveId specifies the id of the achieved objective
 * @param optionId specifies the option that has beed used
 */
const onAchieved = (accountId: string, objectiveId: string, optionId: string, serverUrl?: string) => (
    fetch((serverUrl ? serverUrl : DEFAULT_URL)+REPORT_API,
        Object.assign({
            body: JSON.stringify({
                accountId: accountId,
                objectiveId: separateDevEnv(objectiveId),
                optionId: optionId
            })
        }, FETCH_PARAMS)
    ).then(result => {
        console.log("post-result: ", result);
    }).catch(error => {
        console.error("post-error: ", error);
    })
);

export function withObjective(Component: React.ReactType) {

    return function WrapperComponent(props) {
        return (
            <RecommenderContext.Consumer>
                {(context: any) => {

                    return <Component
                        {...props}
                        onAchieved={(objectiveId: string) => (
                            onAchieved(context.accountId,objectiveId,context.optionId, context.serverUrl)
                        )}
                    />
                }}
            </RecommenderContext.Consumer>
        );
    };
};
