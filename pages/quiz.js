import styled from 'styled-components'
import db from '../db.json';
import Head from 'next/head';
import QuizBackground from '../src/components/QuizBackground/index.js';
import QuizContainer from '../src/components/QuizContainer/index.js';
import Widget from '../src/components/Widget/index.js';

export default function Quiz() {
    return (
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
              <Widget>
                <Widget.Header>
                    <h1>Perguntas 1 de 5</h1>
                </Widget.Header>
                <Widget.Content>
                    <h1>{db.questions.title}</h1>
                    <p>{db.questions.description}</p>
                </Widget.Content>
              </Widget>
  
            <Widget>
              <Widget.Content>
                <h1> Quizes da Galera </h1>
                  <p>
                  Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Alura fez:
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