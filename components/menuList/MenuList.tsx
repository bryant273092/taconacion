import menuItems from '../../data/menu.json';
import type { MenuCategory } from '../../types/menu';
import { Container } from '../layout';
import {
    MeatSection, MeatHeading, MeatOptions, MeatText, AltLang,
    Category, CategoryHeading, OptionDescription,
    ItemList, ItemRow, ItemHeading, ItemDescription, ItemPrice,
} from './styled';
import { CategoryNav } from './CategoryNav';

const menu = menuItems as MenuCategory[];

const meats = [
    ['Carne Asada', 'Grilled Steak'],
    ['Pollo Asado', 'Grilled Chicken'],
    ['Chorizo', 'Mexican Sausage'],
    ['Birria', 'Marinated Beef'],
    ['Al Pastor', 'Marinated Pork'],
    ['Carnitas', 'Braised Pork'],
];

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const categories = menu.map((c) => ({ id: slug(c.category), label: c.category }));

export const MenuList = () => {
    return (
        <Container>
            <CategoryNav categories={categories} />

            <MeatSection aria-labelledby="meat-options">
                <MeatHeading id="meat-options">Meat Options</MeatHeading>
                <MeatOptions>
                    {meats.map(([es, en]) => (
                        <MeatText key={es}>
                            {es} <AltLang>({en})</AltLang>
                        </MeatText>
                    ))}
                </MeatOptions>
            </MeatSection>

            {menu.map((category) => (
                <Category key={category.category} id={slug(category.category)}>
                    <CategoryHeading>{category.category}</CategoryHeading>
                    {category.description && <OptionDescription>{category.description}</OptionDescription>}
                    <ItemList>
                        {category.items.map((item) => (
                            <ItemRow key={item.name}>
                                <div>
                                    <ItemHeading>{item.name}</ItemHeading>
                                    {item.description && <ItemDescription>{item.description}</ItemDescription>}
                                </div>
                                <ItemPrice>{item.price}</ItemPrice>
                            </ItemRow>
                        ))}
                    </ItemList>
                </Category>
            ))}
        </Container>
    )
}
