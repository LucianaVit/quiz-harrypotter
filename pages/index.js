import styled from 'styled-components'
import db from '../db.json';
import Head from 'next/head';
import QuizBackground from '../src/components/QuizBackground/index.js';
import QuizContainer from '../src/components/QuizContainer/index.js';
import QuizLogo from '../src/components/QuizLogo/index.js';
import Widget from '../src/components/Widget/index.js';
import Footer from '../src/components/Footer/index.js';
import GitHubCorner from '../src/components/GitHubCorner/index.js';


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      
      <QuizContainer>
        <QuizLogo />
          <Head>
            <title> Harry Potter: Quiz - Descubra o mundo mágico</title>
          </Head>
            <Widget>
              <Widget.Header>
                <h1>{db.title}</h1>
              </Widget.Header>
              <Widget.Content>
                <p>{db.description}</p>
              </Widget.Content>
            </Widget>

          <Widget>
            <Widget.Content>
              <h1> Quizes da Galera </h1>
                <p>
                Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Alura:
                </p>
                <Widget.Topic href="https://disneyquiz.rafael-sr.vercel.app">
                  rafael-sr/disneyquiz
                </Widget.Topic>
            </Widget.Content>
          </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}
