// import { AuthContextProvider } from "./_utils/auth-context";
// import { Inter } from 'next/font/google'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
// title: 'Strive Frame Data',
// description: 'Website for viewing frame data for Guilty Gear -Strive- characters',
// }

// // export default function RootLayout({ children }) {
// //   return (
// //     <html lang="en">
// //       <body className={inter.className}>{children}</body>
// //     </html>
// //   )
// // }

// const Layout = ({ children }) => {
// 	return <AuthContextProvider>{children}</AuthContextProvider>;
// };

// export default Layout;

import { Inter } from 'next/font/google';
import { AuthContextProvider } from "./_utils/auth-context";
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Strive Frame Data',
  description: 'Website for viewing frame data for Guilty Gear -Strive- characters',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
