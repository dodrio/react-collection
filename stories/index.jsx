import React from 'react'
import { storiesOf } from '@storybook/react'
import Collection from '../src/index.jsx'

storiesOf('Message', module)
  .add('Unicorn', () => <Collection content="Unicorn" />)
  .add('Rainbow', () => <Collection content="Rainbow" />)
