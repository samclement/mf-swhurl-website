import React, { Fragment } from 'react'
import { configure, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import GlobalStyle from '../src/components/GlobalStyle'

addDecorator((story) => (
  <Fragment>
    <GlobalStyle/>
    {story()}
  </Fragment>
))
