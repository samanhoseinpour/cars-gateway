import '../public/globals.css';

export const metadata = {
  title: 'Cars-Gateway',
  description: 'Discover, explore, rent cars',
};

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Root;
