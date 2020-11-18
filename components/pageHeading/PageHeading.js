import { HeadingContainer, Line, Heading } from './styled';

export const PageHeading = (props) => {
    return (
        <HeadingContainer>
            <Line />
                <Heading>{props.title}</Heading>
            <Line />
        </HeadingContainer>
    )
}