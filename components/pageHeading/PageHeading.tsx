import { HeadingContainer, Line, Heading } from './styled';

interface PageHeadingProps {
    title: string;
}
export const PageHeading = ({ title }: PageHeadingProps) => {
    return (
        <HeadingContainer>
            <Line aria-hidden="true" />
            <Heading>{title}</Heading>
            <Line aria-hidden="true" />
        </HeadingContainer>
    )
}
