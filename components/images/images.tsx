import {Container} from '../layout'
import Image from 'next/image'
export const Images = () => {
    return (
        <Container>
            <Image width={800} height={600} src={"/taco_image_one.webp"} alt="Taco Nacion food" />

        </Container>

    )
}