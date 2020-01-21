import React from 'react'

export interface IOption {
    /**
     * The `id` is an arbitrary `string`. It must be unique all options provided to a `<Recommend/>`.
     */
    id: string,

    children: React.ReactNode,

};

/**
 * The  `<Option/>` renders whatever you provide as its `children`. It is a wrapper to be used in the `options`-property
 * of `<Recommend/>` -component
 */
export default function Option(props: IOption) {
    return props.children;
};
