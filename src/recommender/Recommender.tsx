import React, {useState} from 'react';

export const RecommenderContext = React.createContext({});

export interface IRecommender {
    /**
     * The accountId is the unique email address assigned to the React app. The owner of the
     * email address has access to the stats of all objectives.
     */
    accountId: string,

    /**
     * Wrap your React app into this component at a high level.
     */
    children: React.ReactNode,

    /**
     * specify the URL of your custom backend implementation. Leave undefined to use the default server.
     */
    serverUrl?: string
}

/**
 * The `<Recommender/>`-component is the higher-order-component you need to integrate into your app.
 *
 */
export default function Recommender(props: IRecommender) {
    const [optionId, setOptionId] = useState(undefined);

    console.log(optionId);
    return (
        <RecommenderContext.Provider
            value={{
                accountId: props.accountId,
                optionId: optionId,
                setOptionId: setOptionId,
                serverUrl: props.serverUrl
            }}>{props.children}
        </RecommenderContext.Provider>
    );
};
