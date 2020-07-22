import React from 'react'
import { GlobalStyle } from 'styles/Global'
import { AuthProvider } from 'hooks/useAuth'
import styled from 'styled-components'
import Head from "next/head"
import NProgress from 'nextjs-progressbar'
import { DefaultSeo } from 'components/seo'

const AppContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 768px;
  min-height: 100vh;
`

const Provider = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>
    {children}
  </AuthProvider>
)

export const App: React.FC = ({ children }) => {
  return (
    <Provider>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
      </Head>
      <DefaultSeo />

      <NProgress
        color={ 'blue' }
        height="1"
        options={{ showSpinner: false }}
      />
      <GlobalStyle />
      <AppContainer>
        {children}
      </AppContainer>
    </Provider>
  )
}
