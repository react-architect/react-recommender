import React from 'react';

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

export type Recommendation = (props: IRecommendResult) => React.ReactNode;

// this is a dummy function to create the docs
/**
 *
 * The `Recommendation
 */
export function Recommendation(props: IRecommendResult): React.ReactNode  {return undefined};
