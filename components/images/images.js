import {Container} from '../layout'
import Image from 'next/image'
export const Images = () => {
    return (
        <Container>
            <Image width="auto" height="auto" src={"/taco_image_one.webp"} />

        </Container>

    )
}