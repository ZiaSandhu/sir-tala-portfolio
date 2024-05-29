import generateStylesheetObject from '@/Common/generateStylesheetsObject';
import Lines from '@/components/Common/Lines';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Talha Saleem',
  icons: {
    icon: '/light/assets/imgs/favicon.ico',
    shortcut: '/light/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/light/assets/css/plugins.css',
      '/light/assets/css/style.css',
    ]),
  },
};
function Layout({ children }) {
  return (
    <html lang="en">
      
      <body className="sub-bg">
        <Lines />
        <div>
          <main>{children}</main>
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}

export default Layout;
