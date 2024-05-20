import { Box, Heading, Image, View } from "@gluestack-ui/themed";
import Link from "next/link";

export default function Footer() {
    return (
        <View px={50} height={140} justifyContent="center" alignItems="center" bgColor="$surface" >
            <Heading size="2xl">Alguma dúvida? Entre em contato:</Heading>
            <Box flexDirection="row" width={'30%'} justifyContent={'space-around'} mt={10} alignSelf="center">
                <Link href={'mailto:petcomp.cascavel@gmail.com'}>
                    <Image alt="Email" tintColor={'$white'} width={30} height={30} source={require('@/public/mail.png')} />
                </Link>
                <Link href={'https://www.instagram.com/petcomp_unioeste/'} target="_blank" rel="noopener noreferrer">
                    <Image alt="Instagram" tintColor={'$white'} width={28} height={28} source={require('@/public/instagram.png')} />
                </Link>
            </Box>
        </View>
    );
}
