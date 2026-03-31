import PageHeading from '../components/pageHeading';
import HOC from '../components/hoc';
import MenuList from '../components/menuList';
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';

const MenuContent = () => {
    return (
      <>
        <Head>
          {generateNextSeo({
            title: "Menu | Taco Nacion - Authentic Mexican Food Ontario CA",
            description: "Browse the full Taco Nacion menu. Street tacos, burritos, seafood, combos, birria ramen, and more at our Ontario, California location.",
            canonical: "https://taco-nacion.com/menu",
          })}
        </Head>
        <PageHeading title="Menu"></PageHeading>
        <MenuList />
      </>
    )
}

export default HOC(MenuContent)
