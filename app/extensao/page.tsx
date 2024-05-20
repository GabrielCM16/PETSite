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
                <Heading size='5xl' mt={80}>EXTENSÃO</Heading>
                <Heading size='3xl' mt={80}>A&B Game Jam</Heading>
                <Text size='2xl' maxWidth={1100} textAlign='center'>A A&B Game Jam é um evento anual organizado pelo PETComp como parte do projeto de Organização de Eventos. Neste evento, tanto os estudantes da Unioeste quanto a comunidade externa são convidados a participar de uma GameJam, onde as equipes têm como objetivo criar um jogo do zero em uma semana seguindo um tema escolhido pelo PET.</Text>
                <Text size='2xl' maxWidth={1100} textAlign='center' mt={20}>Em 2024, será realizada a A&B Game Jam VIII!</Text>
                <Text size='2xl' maxWidth={1100} mt={10}>Confira os resultados anteriores da A&B Game Jam:</Text>
                <Box width={600} flexDirection='row' justifyContent='space-around'>
                    <Link href={'https://itch.io/jam/ab-game-jam-vii'}><Text size='xl'>VII 2023</Text></Link>
                    <Link href={'https://itch.io/jam/ab-game-jam-vi'}><Text size='xl'>VI 2022</Text></Link>
                    <Link href={'https://gamejolt.com/search/games?q=abgamejam5'}><Text size='xl'>V 2021</Text></Link>
                    <Link href={'https://gamejolt.com/search/games?q=abgamejam4'}><Text size='xl'>IV 2020</Text></Link>
                    <Link href={'https://gamejolt.com/search/games?q=abgamejam3'}><Text size='xl'>III 2019</Text></Link>
                    <Link href={'https://gamejolt.com/search/games?q=abgamejam2'}><Text size='xl'>II 2018</Text></Link>
                    <Link href={'https://gamejolt.com/search/games?q=abgamejam'}><Text size='xl'>I 2018</Text></Link>
                </Box>
                <Image backgroundColor='$surface' width={1000} height={290} source={require('@/public/Logo_PETComp.png')} alt="Logo Petcomp" mt={20} />
            </Box>

            <Box flex={1} alignItems="center" mt={70}>
                <Heading size='3xl'>Coleta de lixo eletrônico</Heading>
                <Text size='2xl' maxWidth={1200} textAlign='center'>O grupo disponibiliza lixeiras exclusivas para a coleta de lixo eletrônico no Campus da Unioeste Cascavel. Essa iniciativa visa principalmente auxiliar a comunidade na destinação adequada desse tipo de resíduo.</Text>
                <Image backgroundColor='$surface' width={1000} height={290} source={require('@/public/Logo_PETComp.png')} alt="Logo Petcomp" mt={20} />
            </Box>

            <Box flex={1} alignItems="center" mt={70}>
                <Heading size='3xl'>Divulgação do curso</Heading>
                <Text size='2xl' maxWidth={1200} textAlign='center'>Para promover o curso de Ciência da Computação da Unioeste de Cascavel, a equipe se compromete a realizar visitas em escolas como uma estratégia fundamental de divulgação. Essa iniciativa visa não apenas informar a comunidade sobre as oportunidades educacionais disponíveis, mas também atrair potenciais interessados na área.</Text>
                <Image backgroundColor='$surface' width={1000} height={290} source={require('@/public/Logo_PETComp.png')} alt="Logo Petcomp" mt={20} />
            </Box>

            <Box flex={1} alignItems="center" mt={70}>
                <Heading size='3xl'>DOCOM</Heading>
                <Text size='2xl' maxWidth={1200} textAlign='center'>Para documentar e divulgar as atividades realizadas, o grupo registra todos os projetos em locais de acesso exclusivo para os petianos vigentes e futuros, além de compartilhar publicamente suas atividades no <Link style={{ color: 'white' }} href={'https://www.instagram.com/petcomp_unioeste/'}>Instagram</Link>.</Text>
                <Image backgroundColor='$surface' width={1000} height={290} source={require('@/public/Logo_PETComp.png')} alt="Logo Petcomp" mt={20} />
            </Box>

            <Box flex={1} alignItems="center" mt={70} px={50}>
                <Heading size='3xl'>PETCode</Heading>
                <Text size='2xl' maxWidth={1200} textAlign='center'>Neste projeto, o grupo tem como compromisso realizar atividades relacionadas a programação:</Text>
                <Box maxWidth={1000} mt={30} width={'100%'} flexDirection='row' justifyContent='space-between'>
                    <Box width={'50%'}>
                        <Text size='2xl' fontWeight='bold'>Minicurso de Programação:</Text>
                        <Text size='2xl'>
                            Em 2024, o PETComp promoverá um Minicurso de Programação aberto à comunidade interna e externa da Unioeste. O objetivo principal deste minicurso é introduzir conceitos fundamentais de lógica de programação. Este ano, o curso será ministrado utilizando a linguagem Python.
                        </Text>
                    </Box>
                    <Image backgroundColor='$surface' width={400} height={400} source={require('@/public/Logo_PET.png')} alt='logo pet' />
                </Box>
                <Box maxWidth={1000} mt={30} width={'100%'} flexDirection='row' justifyContent='space-between'>
                    <Box width={'50%'}>
                        <Text size='2xl' fontWeight='bold'>Monitoria de Algoritmos:</Text>
                        <Text size='2xl'>
                            Todas as segundas-feiras, às 17:00h, a equipe realiza monitorias da disciplina de algoritmos destinadas aos estudantes do 1° ano de Ciência da Computação da Unioeste de Cascavel. O propósito principal deste projeto é auxiliar os alunos, fornecendo suporte para esclarecer suas dúvidas relacionadas à disciplina.
                        </Text>
                    </Box>
                    <Image backgroundColor='$surface' width={400} height={400} source={require('@/public/Logo_PET.png')} alt='logo pet' />
                </Box>
            </Box>

            <Box flex={1} alignItems="center" mt={70}>
                <Heading size='3xl'>PETVoluntário</Heading>
                <Text size='2xl' maxWidth={1200} textAlign='center'>Este projeto visa realizar atividades que beneficiem a comunidade externa, tais como doação de sangue, arrecadação de itens materiais para aqueles que necessitam, e outras iniciativas com propósito semelhante.</Text>
                <Image backgroundColor='$surface' width={1000} height={290} source={require('@/public/Logo_PETComp.png')} alt="Logo Petcomp" mt={20} />
            </Box>

            <Box flex={1} alignItems="center" mt={70} mb={50}>
                <Heading size='3xl'>Recepção dos Calouros</Heading>
                <Text size='2xl' maxWidth={1200} textAlign='center'>Para facilitar a integração dos novos calouros ao curso de Ciência da Computação na universidade, o PET realiza uma apresentação abordando o programa, o funcionamento do sistema universitário e informações essenciais que os alunos necessitam conhecer.</Text>
                <Image backgroundColor='$surface' width={1000} height={290} source={require('@/public/Logo_PETComp.png')} alt="Logo Petcomp" mt={20} />
            </Box>



            <Footer />
        </main>
    );
}
