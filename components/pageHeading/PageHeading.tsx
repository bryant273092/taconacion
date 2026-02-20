import { HeadingContainer, Line, Heading } from './styled';

interface PageHeadingProps {
    title: string;
}
export const PageHeading = ({ title }: PageHeadingProps) => {
    return (
        <HeadingContainer>
            <Line />
                <Heading>{title}</Heading>
            <Line />
        </HeadingContainer>
    )
}