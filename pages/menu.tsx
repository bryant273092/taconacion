import PageHeading from '../components/pageHeading';
import HOC from '../components/hoc';
import MenuList from '../components/menuList';
import { PageSeo } from '../components/seo/PageSeo';
import { JsonLd, menuSchema, breadcrumbSchema } from '../components/seo/JsonLd';
import menu from '../data/menu.json';
import type { MenuCategory } from '../types/menu';

const MenuContent = () => {
    return (
      <>
        <PageSeo
          title="Menu | Taco Nacion – Mexican Food in Ontario, CA"
          description="See the full Taco Nacion menu with prices: street tacos, breakfast burritos, chilaquiles, fish & shrimp tacos, birria ramen, combos and aguas frescas in Ontario, CA."
          path="/menu"
        />
        <JsonLd id="menu-schema" data={menuSchema(menu as MenuCategory[])} />
        <JsonLd id="breadcrumb-schema" data={breadcrumbSchema('Menu', '/menu')} />
        <PageHeading title="Our Menu" />
        <MenuList />
      </>
    )
}

export default HOC(MenuContent)
