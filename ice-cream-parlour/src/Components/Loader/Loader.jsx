import { Flex, Image } from "@chakra-ui/react";
import { CENTER, FILL_PARENT, FIXED, WHITE } from "../../constants/typography";
import my_pixel from "../../scripts/my_pixel";

export default function Loader({gif}){


    return <Flex top={my_pixel(120)} bg={WHITE} justify={CENTER} alignItems={CENTER} w={FILL_PARENT} position={FIXED} h={FILL_PARENT} zIndex={10}>

        <Image w={my_pixel(100)} src={gif}></Image>


    </Flex>
}