import { Avatar, AvatarImage, Box, Heading, Image, Text } from "@gluestack-ui/themed";
import Link from "next/link";

export default function Profile({ nome, icv, lattes, insta, since, picture}: { nome: string, icv: string, lattes: string, insta: string, since: string, picture: any}) {
    return (
        <Box flexDirection="row" alignItems="center">
            <Avatar size="2xl">
                <AvatarImage source={picture} alt={`${nome} profile picture`} />
            </Avatar>
            <Box ml={15} maxWidth={500}>
                <Text bold size="xl">{nome}</Text>
                <Text>ICV: {icv}</Text>
                <Text bold>Membro desde {since}</Text>
                <Box flexDirection="row" justifyContent="space-around">
                    <Link href={lattes} key='lattes'><Text bold>Lattes</Text></Link>
                    <Link href={insta} key='insta'><Text bold>Instagram</Text></Link>
                </Box>
            </Box>
        </Box>
    );
}
