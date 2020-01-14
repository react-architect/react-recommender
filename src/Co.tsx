/**
 * @class ExampleComponent
 */

import * as React from 'react'

export interface ICo {
  /**
   * We definitely need a text
   */
  text: string,

  /**
   * You don't need another property
   */
  another?: number
}

/**
 * This is my example component
 *
 */
export default function ExampleComponent (props: ICo) {

    const {
      text
    } = props;

    return (
      <div>
        Show new Text: {text}
      </div>
    )
}
