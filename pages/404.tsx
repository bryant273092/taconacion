import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import PageHeading from '../components/pageHeading';
import { Button, ButtonRow, Container, Lead } from '../components/layout';

const NotFound = () => (
  <>
    <Head>
      {generateNextSeo({ title: 'Page Not Found | Taco Nacion', noindex: true })}
    </Head>
    <PageHeading title="Page Not Found" />
    <Container>
      <Lead>Sorry, we couldn&apos;t find that page. Hungry? Check out the menu or order online.</Lead>
      <ButtonRow>
        <Button href="/menu">View Menu</Button>
        <Button href="/order">Order Online</Button>
      </ButtonRow>
    </Container>
  </>
);

export default NotFound
