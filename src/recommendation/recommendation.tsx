import React from 'react';

export interface IRecommendResult {
    /**
     * Indicates whether the `<Recommend/>`-component is loading the recommendation {true} or not {false}
     */
    loading: Boolean,

    /**
     * The id of the recommended option. Only defined if loading is done {false} and there is no {error}
     */
    recommendation?: string,

    /**
     * Error during loading the recommendation. If loading is complete ({false}), then either the error or the
     * recommendation is defined.
     */
    error?: string,

    /**
     * Callback-function to render the option with the specified Id. Should be the recommended one. But it is up to
     * the app to render a different option
     *
     * @param optionId specifies the id of the option to be rendered
     */
    renderOption: (optionId: string) => React.ReactNode
};

export type Recommendation = (props: IRecommendResult) => React.ReactNode;

// this is a dummy function to create the docs
/**
 *
 * The `Recommendation` is the result of the `<Recommend/>`-component. Provide this function as a child of `<Recommend/>`
 */
export function Recommendation(props: IRecommendResult): React.ReactNode  {return undefined};
