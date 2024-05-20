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
        <main style={{ minHeight: '100vh', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            <Header />
            <Box flex={1} alignItems="center">
                <Heading size='5xl' mt={80}>Sala PETComp</Heading>
                <Text size='2xl' mt={50} maxWidth={1100} textAlign='center'>A Sala de Estudos atual do PETComp localiza-se em:</Text>
                <Text size='2xl' mt={10} maxWidth={650} textAlign='center' bold>Rua Universitária, n° 2069,Bloco F, sala 15, CEP 85819-110, Bairro Jardim Universitário, Cascavel - PR.</Text>

                <Card bgColor='$surface' mt={50} borderRadius={25} alignItems='center' justifyContent='center' width={400} height={150}>
                    <Text size='2xl' textAlign='center'>
                        Dias e horários de atendimento:
                        Segunda a sexta, das <Text size='2xl' bold>8h às 22h</Text>.
                    </Text>
                </Card>
            </Box>
            <Footer />
        </main>
    );
}
