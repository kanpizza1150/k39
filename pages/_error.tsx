import { NextPage } from 'next'
import React from 'react'
import * as Styled from '../styles/notFound'
const Error: NextPage = ({ statusCode }: any) => {
  return (
    <Styled.Container>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    </Styled.Container>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
