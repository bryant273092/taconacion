import {MenuContainer, MenuNavContainer, MenuButton, ItemListContainer, ItemRow, CategoryHeading, ItemDescription, ItemHeading, ItemPrice, Category, TextContainer, MeatSection, MeatHeading, MeatText, MeatOptions, AltLang, OptionDescription} from './styled';
import menuItems from '../../data/menu.json'

export const MenuList = () => {
    return (
        <MenuContainer>
            {/* <MenuNavContainer>
                {menuItems.map((category) => (
                    <MenuButton key={category.category}>{category.category}</MenuButton>
                ))}
            </MenuNavContainer> */}
            <ItemListContainer>
                <MeatSection>
                    <MeatHeading>Meat Options</MeatHeading>
                    <MeatOptions>
                        <MeatText>Carne Asada <AltLang>(Grilled Steak) </AltLang> </MeatText>
                        <MeatText>Pollo Asado <AltLang>(Grilled Chicken) </AltLang> </MeatText>
                        <MeatText>Chorizo <AltLang>(Mexican Sauasage) </AltLang> </MeatText>
                        <MeatText>Birria <AltLang>(Marinated Beef) </AltLang> </MeatText>
                        <MeatText>Al Pastor <AltLang>(Marinated Pork) </AltLang> </MeatText>
                        <MeatText>Carnitas <AltLang>(Braised Pork) </AltLang> </MeatText>
                    </MeatOptions>
                </MeatSection>
                {menuItems.map((category) => (
                    <div>
                        <CategoryHeading key={category.category}>{category.category}</CategoryHeading>
                        <OptionDescription key={category.category}>{category.description}</OptionDescription>
                        <div>
                            {category.items.map((item) => (
                                <ItemRow key={item.name}>
                                    <TextContainer key={item.name}>
                                        <ItemHeading key={item.name}>{item.name}</ItemHeading>
                                        <ItemDescription key={item.description}>{item.description}</ItemDescription>
                                    </TextContainer>
                                    <ItemPrice key={item.decription}>{item.price}</ItemPrice>
                                </ItemRow>
                            ))}
                        </div>
                    </div>
                ))}

            </ItemListContainer>
            
        </MenuContainer>
    )
}