import RootStyleRegistry from './emotion';

export default function RootLayout({
  children,
}: {
  children: JSX.Element
}) {
  return (
    <html>
      <head />
      <body><RootStyleRegistry>{children}</RootStyleRegistry></body>
    </html>
  )
}
