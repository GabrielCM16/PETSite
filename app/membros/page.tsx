'use client';
import { Avatar, AvatarImage, Box, Button, ButtonText, Card, Heading, HStack, Image, Pressable, Text, VStack } from '@gluestack-ui/themed';
import Header from '@/app/components/Header';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import Profile from '../components/Profile';

export default function Home() {
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        setMobile(window.innerWidth < 1000)
    }, [])

    return (
        <main>
            <Header />
            <Box flex={1} alignItems="center">
                <Heading size='5xl' mt={80}>MEMBROS</Heading>
            </Box>
            <Box alignItems='center'>
                <Heading size='3xl'>Tutor</Heading>
                <Avatar size='2xl' width={250} height={250} mb={10}>
                    <AvatarImage source={require('@/public/profile.png')} />
                </Avatar>
                <Text size='2xl'>Guilherme Galante</Text>
                <Text size='2xl'>Tutor desde 2023</Text>
            </Box>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 50, alignItems: 'center', justifyContent: 'center', margin: ' 50px auto', padding: '0px 50px' }} >
                <Profile nome='Fulano de tal com muito sobrenome' icv='Nome de uma icv muito comprida e cheia de palavras imensas' lattes='https://www.google.com' insta='https://www.instagram.com/petcomp_unioeste/' since='2020' />
                <Profile nome='Fulano de tal com muito sobrenome' icv='Nome de uma icv muito comprida e cheia de palavras imensas' lattes='https://www.google.com' insta='https://www.instagram.com/petcomp_unioeste/' since='2020' />
                <Profile nome='Fulano de tal com muito sobrenome' icv='Nome de uma icv muito comprida e cheia de palavras imensas' lattes='https://www.google.com' insta='https://www.instagram.com/petcomp_unioeste/' since='2020' />
                <Profile nome='Fulano de tal com muito sobrenome' icv='Nome de uma icv muito comprida e cheia de palavras imensas' lattes='https://www.google.com' insta='https://www.instagram.com/petcomp_unioeste/' since='2020' />
            </div>
            <Footer />
        </main>
    );
}
