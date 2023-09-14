import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui/Navbar/Navbar';

interface Props {
  children: React.ReactNode;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const ShopLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={pageDescription} />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={pageDescription} />
        {imageFullUrl && <meta name='og:image' content={imageFullUrl} />}
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main>
        <div style={{ height: '94vh' }}>{children}</div>
      </main>
    </>
  );
};
