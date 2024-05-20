import { Avatar, AvatarImage, Box, Heading, Image, Text } from "@gluestack-ui/themed";
import Link from "next/link";

export default function Profile({ nome, icv, lattes, insta, since }: { nome: string, icv: string, lattes: string, insta: string, since: string }) {
    return (
        <Box flexDirection="row" alignItems="center">
            <Avatar size="2xl">
                <AvatarImage source={require('@/public/profile.png')} />
            </Avatar>
            <Box ml={15} maxWidth={500}>
                <Text bold size="xl">{nome}</Text>
                <Text>ICV: {icv}</Text>
                <Text bold>Membro desde {since}</Text>
                <Box flexDirection="row" justifyContent="space-around">
                    <Link href={lattes}><Text bold>Lattes</Text></Link>
                    <Link href={insta}><Text bold>Instagram</Text></Link>
                </Box>
            </Box>
        </Box>
    );
}
