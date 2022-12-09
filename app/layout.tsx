// import RootStyleRegistry from './emotion';

import AppProvider from "../contexts/AppProvider";


// export default function RootLayout({
//   children,
// }: {
//   children: JSX.Element
// }) {
//   return (
//     <html>
//       <head />
//       <body><RootStyleRegistry>{children}</RootStyleRegistry></body>
//     </html>
//   )
// }




type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
  return (
    <html>
      <head />
      <body>
        <AppProvider>{props.children}</AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
