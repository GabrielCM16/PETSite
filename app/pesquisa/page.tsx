'use client';
import { Box, Button, ButtonText, Card, Heading, HStack, Image, Pressable, Text, VStack } from '@gluestack-ui/themed';
import Header from '@/app/components/Header';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Footer from '@/app/components/Footer';

export default function Home() {
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        setMobile(window.innerWidth < 1000)
    }, [])

    return (
        <main>
            <Header />
            <Box flex={1} alignItems="center">
                <Heading size='5xl' mt={80}>PESQUISA</Heading>
                <Heading size='3xl' mt={80}>Projetos individuais de ICV (Iniciação Científica Voluntária).</Heading>
                <Text size='2xl' maxWidth={1100} textAlign='center'>Todos os alunos participantes do programa devem se responsabilizar com a condução de um projeto de pesquisa científica, ou projeto de extensão ou até mesmo engajar-se em iniciativas de startups.</Text>
            </Box>
            <Box mt={30} alignItems='center'>
                <VStack width={'100%'} alignItems='center'>
                    <Box flexDirection='row' justifyContent='space-around' width={'80%'} py={10} maxWidth={1000} borderWidth={3} borderColor='$white'>
                        <Text size='xl'>Integrante</Text>
                        <Text size='xl'>ICV</Text>
                    </Box>
                    <Box flexDirection='row' justifyContent='space-around' width={'80%'} py={10} maxWidth={1000} borderWidth={3} borderTopWidth={0} borderColor='$white'>
                        <Text size='xl'>Integrante</Text>
                        <Text size='xl'>ICV</Text>
                    </Box>
                    <Box flexDirection='row' justifyContent='space-around' width={'80%'} py={10} maxWidth={1000} borderWidth={3} borderTopWidth={0} borderColor='$white'>
                        <Text size='xl'>Integrante</Text>
                        <Text size='xl'>ICV</Text>
                    </Box>
                    <Box flexDirection='row' justifyContent='space-around' width={'80%'} py={10} maxWidth={1000} borderWidth={3} borderTopWidth={0} borderColor='$white'>
                        <Text size='xl'>Integrante</Text>
                        <Text size='xl'>ICV</Text>
                    </Box>
                    <Box flexDirection='row' justifyContent='space-around' width={'80%'} py={10} maxWidth={1000} borderWidth={3} borderTopWidth={0} borderColor='$white'>
                        <Text size='xl'>Integrante</Text>
                        <Text size='xl'>ICV</Text>
                    </Box>
                    <Box flexDirection='row' justifyContent='space-around' width={'80%'} py={10} maxWidth={1000} borderWidth={3} borderTopWidth={0} borderColor='$white'>
                        <Text size='xl'>Integrante</Text>
                        <Text size='xl'>ICV</Text>
                    </Box>
                    <Box flexDirection='row' justifyContent='space-around' width={'80%'} py={10} maxWidth={1000} borderWidth={3} borderTopWidth={0} borderColor='$white'>
                        <Text size='xl'>Integrante</Text>
                        <Text size='xl'>ICV</Text>
                    </Box>
                </VStack>
            </Box>
            <Box my={80} px={50}>
                <Heading size='3xl'>Produção de artigos</Heading>
                <Text maxWidth={'75%'} size='2xl'>O grupo também se compromete a submeter artigos para eventos e periódicos acadêmicos relevantes.
                </Text>
                <Text mt={20} maxWidth={'75%'} size='2xl'>Link dos artigos:</Text>
            </Box>
            <Footer />
        </main>
    );
}
