// @flow

import React from 'react'

type GetProps<Props, ComponentProps> = (props: Props) => ComponentProps

/*
 * Receive Props, transform them in ComponentProps and return
 * Component with ComponentProps
 */
const prepareComponent = <Props, ComponentProps>(
  getProps: GetProps<Props, ComponentProps>
) => (Component: (props: any) => React$Element<any>) =>
    function PrepareComponent(props: any): React$Element<any> {
      return <Component {...getProps(props)} />
    }

export default prepareComponent
