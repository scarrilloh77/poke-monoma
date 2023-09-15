import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui/Navbar/Navbar';
import * as SC from './MainLayout.styles';

interface Props {
  children: React.ReactNode;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const MainLayout: FC<Props> = ({
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
      <SC.MainContainer>
        <nav className='flex'>
          <Navbar />
        </nav>
        <main className='flex flex-auto'>
          <SC.ContentContainer>{children}</SC.ContentContainer>
        </main>
      </SC.MainContainer>
    </>
  );
};
