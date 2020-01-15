/**
 * Created by frank.zickert on 14.01.20.
 */

import React, { useEffect, useState } from 'react';
import {IOption} from "../option/Option";

const URL = "http://localhost:3000/_api";

const RECOMMEND = "/recommend";
const REPORT = "/report";

const STATE = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  RESPONSE: "RESPONSE"
};

export interface IRecommendResult {
  loading: Boolean,
  recommended?: React.ReactNode,
  error?: string,
  onSuccess: (optionId: string) => void,
  renderOption: (optionId: string) => React.ReactNode
};

type Res = (props: IRecommendResult) => React.ReactNode;

export interface IRecommend {
  mode: string | number,
  recommendId?: string,
  options: IOption[],
  children: Res,
  epsilon?: Number
};

function isNumber(value: string | number): boolean
{
  return ((value != null) &&
  (value !== '') &&
  !isNaN(Number(value.toString())));
}

export default function Recommend (props: IRecommend): React.ReactNode {
  const [state, setState] = useState({state: STATE.LOADING, recommended: undefined});

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json",
      "Accept-Charset": "utf-8"
    }
  };

  async function loadData (onResult, onError) {


    /*if (isNumber(props.mode)) {
      console.log(props.options[props.mode].props.id);
      onResult(props.options[props.mode].props.id)

    } else {*/
      // apparently, the fetch does not require the hostname...why?
      await fetch(URL+RECOMMEND,
        Object.assign({
          body: JSON.stringify({
            recommendId: props.recommendId,
            mode: props.mode,
            options: props.options.map(option => option.props.id),
            epsilon: props.epsilon
          })
        }, params)).then(result => result.json()).then(parsedBody => {
            console.log(parsedBody);
            onResult(parsedBody.recommendation);
        }).catch(error => {
        //console.error("post-error: ", error);
        onError(error);
      });
    }


  //};

  useEffect(() => {

    if (state.state === STATE.LOADING) {
      loadData(
        (recommended: string) => {
          //console.log(data, files, folders)
          setState({
            state: STATE.RESPONSE,
            recommended: recommended
          });
        },
        (err) => {
          setState({
            state: STATE.ERROR,
            recommended: err
          });

        });
    };
  }, [state]);


  console.log(state);
  return props.children({
    loading: state.state === STATE.LOADING,
    recommended: state.state === STATE.RESPONSE ? state.recommended : undefined,
    error: state.state === STATE.ERROR ? state.recommended : undefined,
    onSuccess: (optionId) => fetch(URL+REPORT,
      Object.assign({
        body: JSON.stringify({
          recommendId: props.recommendId,
          mode: props.mode,
          optionId: optionId
        })
      }, params)).then(result => {
        console.log("post result: ", result);
      }).catch(error => {
        console.error("post-error: ", error);
      }),
    renderOption: (optionId)  => props.options.find(option => {
      //console.log(option.props.id, optionId)
      return option.props.id == optionId
    })
  });
};

