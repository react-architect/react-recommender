import React from 'react'

export interface IOption {
  id: string,
  children: React.ReactNode,
  props?: any
};

export default function Option(props: IOption) {

  return props.children;
};
