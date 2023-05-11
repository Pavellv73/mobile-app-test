/* eslint-disable prettier/prettier */
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React from 'react';
import { Header } from '@rneui/themed';

type Props = {
  children: ReactJSXElement;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header
        // ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['red', 'pink'],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
      />
      <React.Fragment>{children}</React.Fragment>
    </>
  );
};
