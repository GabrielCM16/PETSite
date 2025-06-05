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
                    <AvatarImage source={require('@/public/images/members/ronaldo.jpg')} />
                </Avatar>
                <Text size='2xl'>Guilherme Galante</Text>
                <Text size='2xl'>Tutor desde 2023</Text>
            </Box>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 50, alignItems: 'center', justifyContent: 'center', margin: ' 50px auto', padding: '0px 50px' }} >
                {/*<Profile nome='David Antonio Brocardo' icv='Práticas de Computação Desplugada Inspiradas na Máquina de Turing Para O Desenvolvimento do Pensamento Computacional e O Ensino de Matemática' lattes='https://lattes.cnpq.br/6537105647684215' insta='https://www.instagram.com/brocardo_david/' since='2022' />
                <Profile nome='Fábio Kenji Sato' icv='Avaliação do Consumo de Energia da Estação EnvCity de Coleta de Qualidade do Ar.' lattes='https://lattes.cnpq.br/4579969236899501' insta='https://www.instagram.com/petcomp_unioeste/' since='2023' />
                <Profile nome='Gabriel Lenser' icv='Nome de uma icv muito comprida e cheia de palavras imensas' lattes='https://lattes.cnpq.br/1714539603430097' insta='https://www.instagram.com/gabxlenser/' since='2023' />
                <Profile nome='Gabriel Yudi Leite Higuchi' icv='Soluções IDS e IPS para redes SDN' lattes='https://www.google.com' insta='https://www.instagram.com/gabriel.yudih/' since='2022' />
                <Profile nome='Guilherme Augusto Deitos Alves ' icv='Interface de Geração de Relatórios para Dados Meteorológicos do INMET' lattes='https://www.google.com' insta='https://www.instagram.com/guilherme_deitos/' since='2023' />
                <Profile nome='Isadora Coelho Araujo' icv='Estudo Comparativo de Estratégias de Calibração de Hiperparâmetros' lattes=' http://lattes.cnpq.br/0132065613234912' insta='https://www.instagram.com/isacoelho7/' since='2021' />
                <Profile nome='Leonardo Calsavara' icv='Nome de uma icv muito comprida e cheia de palavras imensas' lattes='https://lattes.cnpq.br/4448151885151326' insta='https://www.instagram.com/leo_calsavara/' since='2023' />
                <Profile nome='Maria Eduarda Amorim Quevedo' icv='Reconfiguração de TV Boxes Apreendidas pela Receita Federal: Substituição do Sistema Operacional por Linux e Construção de Documentação Detalhada do Processo

' lattes='http://lattes.cnpq.br/3097985855355895' insta='https://www.instagram.com/mari_qvv/' since='2023' />*/}
                <Profile nome='Ronaldo Drecksler Farias Pachico' icv='Nome de uma icv muito comprida e cheia de palavras imensas' lattes='https://orcid.org/0000-0002-0437-7249' insta='https://www.instagram.com/ronaldo.dck/' since='2022' picture = {require('@/public/images/members/ronaldo.jpg')}/>
                {/*<Profile nome='Thalita Wiederkehr Pereira' icv='"Implementação de um Sistema de Navegação Simples para Robôs Móveis de Pequeno Porte Baseado 
em Mapeamento e Marcações em QRCode"' lattes='http://lattes.cnpq.br/5647218203879099' insta='https://www.instagram.com/thalitawiederkehr/' since='2023' />*/}
  
            </div>
            <Footer />
        </main>
    );
}
