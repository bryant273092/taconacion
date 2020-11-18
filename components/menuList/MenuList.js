import {MenuContainer, MenuNavContainer, MenuButton, ItemListContainer, ItemRow, CategoryHeading, ItemDescription, ItemHeading, ItemPrice, Category, TextContainer} from './styled';
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
                {menuItems.map((category) => (
                    <div>
                        <CategoryHeading key={category.category}>{category.category}</CategoryHeading>
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