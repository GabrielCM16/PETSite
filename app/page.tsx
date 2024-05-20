'use client';
import { Box, Button, ButtonText, Card, Heading, HStack, Image, Pressable, Text } from '@gluestack-ui/themed';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Footer from './components/Footer';

export default function Home() {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setMobile(window.innerWidth < 1000)
  }, [])

  return (
    <main>
      <Header />
      <Box flex={1} alignItems="center">
        <Image source={require('@/public/Logo_PETComp.png')} alt="Logo Petcomp" width={420} height={120} mt={80} />
        <Heading size='2xl' mt={80}>O QUE É?</Heading>
        <Text size='2xl' maxWidth={1000} textAlign='center'>O Programa de Educação Tutorial (PET) insere estudantes de graduação em projetos de educação tutorial com o objetivo de aplicar seus conhecimentos e ampliar sua formação através da realização de projetos de ensino, pesquisa e extensão.</Text>
        <Image source={require('@/public/petGroup.png')} alt="Grupo de pessoas ilustradas" width={400} height={410} my={50} />
      </Box>
      <Box mt={-40} flexDirection={mobile ? 'column' : 'row'} justifyContent='space-around' alignItems={mobile ? 'center' : 'flex-start'}>
        <Link style={{ textDecoration: 'none' }} href={'/pesquisa'}>
          <Card bgColor='$surface' my={mobile ? 10 : 0} borderEndEndRadius={25} borderEndStartRadius={25} alignItems='center' width={270} height={300}>
            <Heading size='2xl'>PESQUISA</Heading>
            <Text mt={5} size='xl' textAlign='center'>Para incentivar a pesquisa, no PET, todos os membros devem ter um projeto de iniciação cientifica.</Text>
          </Card>
        </Link>
        <Link style={{ textDecoration: 'none' }} href={'/ensino'}>
          <Card bgColor='$surface' my={mobile ? 10 : 0} mt={50} borderEndEndRadius={25} borderEndStartRadius={25} alignItems='center' width={270} height={300}>
            <Heading size='2xl'>ENSINO</Heading>
            <Text mt={5} size='xl' textAlign='center'>O PET organiza eventos para compartilhar e adquirir conhecimento, como minicursos e palestras, que são abertos para os membros do PET e para os acadêmicos do curso de ciência da computação.</Text>
          </Card>
        </Link>
        <Link style={{ textDecoration: 'none' }} href={'/extensao'}>
          <Card bgColor='$surface' my={mobile ? 10 : 0} borderEndEndRadius={25} borderEndStartRadius={25} alignItems='center' width={270} height={300}>
            <Heading size='2xl'>EXTENSÃO</Heading>
            <Text mt={5} size='xl' textAlign='center'>Entre os projetos que o PET realiza, existem os projetos de extensão, que estabelecem uma conexão com a comunidade.</Text>
          </Card>
        </Link>
      </Box>
      <Box my={80} px={50}>
        <Box>
          <Heading size='3xl'>UMA HISTÓRIA</Heading>
          <Text maxWidth={'75%'} size='2xl'>O PET Ciência da Computação (PETComp) foi criado em dezembro de 2010 e é o 5º Grupo PET da UNIOESTE (1º do campus de Cascavel), destinado exclusivamente aos alunos regularmente matriculados no Curso.
          </Text>
        </Box>
        <Box alignItems='flex-end'>
          <Heading size='3xl'>DE CONQUISTA</Heading>
          <Text textAlign='right' maxWidth={'75%'} size='2xl'>
            Sua aprovação junto ao MEC foi uma conquista do Prof. Dr. Clodis Boscarioli, muito bem recebida, após 5 tentativas de submissão de projeto por parte de vários professores.
          </Text>
        </Box>
      </Box>
      <Footer />
    </main>
  );
}
