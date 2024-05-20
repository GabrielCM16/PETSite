import { Button, ButtonText, Divider, Image, Menu, MenuItem, MenuItemLabel, Text, View } from "@gluestack-ui/themed";
import Link from "next/link";

export default function Header() {
    return (
        <View px={50} height={73} flexDirection="row" justifyContent="space-between" alignItems="center" bgColor="$backgroundDark0" >
            <Link href={'/'}>
                <Image tintColor={'$black'} height={56} width={190} source={require("@/public/Logo_PETComp.png")} alt="Logo Petcomp" />
            </Link>
            <nav style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Link href="/" style={{ fontFamily: "Hind", fontSize: 20, fontWeight: 'bold', textDecoration: 'none', color: 'black' }} passHref>INÍCIO</Link>
                <Divider marginHorizontal={35} orientation="vertical" bgColor="$black" height={33} w={2} />

                <Menu
                    placement="bottom"
                    trigger={({ ...triggerProps }) => {
                        return (
                            <Button variant="link" {...triggerProps}>
                                <ButtonText color="$black" fontSize={20} bold>MEMBROS</ButtonText>
                            </Button>
                        );
                    }}
                >
                    <MenuItem alignItems="center" justifyContent="center" key="Atuais" textValue="Atuais">
                        <Link href="/membros" style={{ fontFamily: "Hind", fontSize: 20, fontWeight: 'bold', textDecoration: 'none', color: 'white' }} passHref>MEMBROS</Link>
                    </MenuItem>
                    <MenuItem alignItems="center" justifyContent="center" key="Ex" textValue="Ex-membros">
                        <Link href="/ex-membros" style={{ fontFamily: "Hind", fontSize: 20, fontWeight: 'bold', textDecoration: 'none', color: 'white' }} passHref>EX-MEMBROS</Link>
                    </MenuItem>
                </Menu>
                {/* <Link href="/membros" style={{ fontFamily: "Hind", fontSize: 20, fontWeight: 'bold', textDecoration: 'none', color: 'black' }} passHref>MEMBROS</Link> */}
                <Divider marginHorizontal={35} orientation="vertical" bgColor="$black" height={33} w={2} />
                <Link href="/sala" style={{ fontFamily: "Hind", fontSize: 20, fontWeight: 'bold', textDecoration: 'none', color: 'black' }} passHref>SALA</Link>
            </nav>
        </View>
    );
}
