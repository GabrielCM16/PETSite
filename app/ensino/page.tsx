'use client';
import { Box, Button, ButtonText, Card, Heading, HStack, Image, Pressable, Text, VStack } from '@gluestack-ui/themed';
import Header from '@/app/components/Header';
import { useEffect, useState } from 'react';
import Footer from '@/app/components/Footer';

export default function Home() {
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        setMobile(window.innerWidth < 1000)
    }, [])

    return (
        <main>
            <Header />
            <Box alignItems="center">
                <Heading size='5xl' mt={80}>ENSINO</Heading>
            </Box>
            <Box margin={'auto'} maxWidth={1300} my={80} >
                <div style={{ display: 'grid', gridTemplateColumns: '5fr 6fr', columnGap: 20 }} >
                    <Image width={550} height={400} backgroundColor='$surface' source={require('@/public/images/projects/AvaliacaoDicip.jpg')} alt='###INSERIR DESCRIÇÃO###' />
                    <Box>
                        <Heading size='3xl'>Avaliação das disciplinas</Heading>
                        <Text size='2xl'>
                            Como maneira de dar voz aos estudantes de ciência da computação da Unioeste de Cascavel, o PETComp oferece formulários semestrais e anuais aos alunos, permitindo que compartilhem suas percepções sobre a didática dos professores e a metodologia utilizada em sala de aula. Os feedbacks são então repassados aos docentes para contribuir com a melhoria contínua do ensino.
                        </Text>
                    </Box>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '6fr 5fr', columnGap: 20, marginTop: 40 }} >
                    <Box>
                        <Heading textAlign='right' size='3xl'>Biblioteca coletiva</Heading>
                        <Text textAlign='right' size='2xl'>
                            Neste projeto, a cada quinze dias, é designado a uma dupla de petianos (inclusive o tutor), o compromisso de apresentar na reunião semanal o feedback de um livro leram ou estejam em processo de leitura.
                        </Text>
                    </Box>
                    <Image width={550} height={300} backgroundColor='$surface' source={require('@/public/images/projects/Biblioteca.png')} alt='###INSERIR DESCRIÇÃO###' />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '5fr 6fr', columnGap: 20, marginTop: 40 }} >
                    <Image width={550} height={300} backgroundColor='$surface' source={require('@/public/images/projects/CinePET.jpg')} alt='###INSERIR DESCRIÇÃO###' />
                    <Box>
                        <Heading size='3xl'>CinePET</Heading>
                        <Text size='2xl'>
                            Periodicamente, o grupo se reúne na sala do PET ou no cinema para assistir um filme juntos, e na reunião seguinte, cada membro compartilha sua concepção sobre a obra.
                        </Text>
                    </Box>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '6fr 5fr', columnGap: 20, marginTop: 40 }} >
                    <Box>
                        <Heading textAlign='right' size='3xl'>CiPET</Heading>
                        <Text textAlign='right' size='2xl'>
                            O CiPET tem como objetivo oferecer cursos, palestras e painéis à comunidade acadêmica. Sendo assim, o grupo PETComp regularmente convida profissionais de diversas áreas, com enfoque na ciência da computação, para ministrarem essas atividades aos estudantes.
                        </Text>
                    </Box>
                    <Image width={550} height={300} backgroundColor='$surface' source={require('@/public/images/projects/CIPET.png')} alt='###INSERIR DESCRIÇÃO###' />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '5fr 6fr', columnGap: 20, marginTop: 40 }} >
                    <Image width={550} height={300} backgroundColor='$surface' source={require('@/public/Logo_PET.png')} alt='###INSERIR DESCRIÇÃO###' />
                    <Box>
                        <Heading size='3xl'>Pet in english</Heading>
                        <Text size='2xl'>
                            Neste projeto, a equipe realiza uma variedade de atividades com o objetivo de aplicar e aprimorar as habilidades de comunicação em inglês dos membros. Isso inclui:
                        </Text>
                        <Text ml={15} size='lg'>English workshop: atividade na qual os petianos apresentam seus projetos individuais de pesquisa em inglês;</Text>
                        <Text ml={15} size='lg'>Dias especiais nos quais é permitido falar apenas em inglês na sala do PET;</Text>
                        <Text ml={15} size='lg'>Feedbacks do grupo sobre TEDTalks assistidos completamente em inglês, e outras iniciativas semelhantes.</Text>
                    </Box>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '6fr 5fr', columnGap: 20, marginTop: 40 }} >
                    <Box>
                        <Heading textAlign='right' size='3xl'>Seminários Multidisciplinares</Heading>
                        <Text textAlign='right' size='2xl'>
                            A cada duas semanas, um membro do grupo prepara e conduz um seminário sobre um tópico de interesse pessoal, não necessariamente ligado à computação. O objetivo principal deste projeto é melhorar as habilidades de comunicação oral e corporal dos petianos durante as apresentações.
                        </Text>
                    </Box>
                    <Image width={550} height={300} backgroundColor='$surface' source={require('@/public/images/projects/SeminariosMult.png')} alt='###INSERIR DESCRIÇÃO###' />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '5fr 6fr', columnGap: 20, marginTop: 40 }} >
                    <Image width={550} height={300} backgroundColor='$surface' source={require('@/public/images/projects/VisitasTec.png')} alt='###INSERIR DESCRIÇÃO###' />
                    <Box>
                        <Heading size='3xl'>Visitas técnicas/culturais</Heading>
                        <Text size='2xl'>
                            Com o objetivo de ampliar e aplicar o repertório de conhecimento dos membros, ao mesmo tempo em que promove a integração do grupo, o PETComp realiza regularmente visitas técnicas e culturais.
                        </Text>
                    </Box>
                </div>
            </Box>
            <Footer />
        </main>
    );
}
