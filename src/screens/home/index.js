import React, { Fragment } from 'react';
import presentationImage from '../../assets/images/presentation.png';
import Header from '../../components/header';
import { Column, Section, Title, Container } from 'rbx';
import '../../styles/home.scss';
import { Link } from 'react-router-dom';

const HomeScreen = () => (
  <Fragment>
    <Header />

    <Section size="medium" className="home">
      <Container>
        <Column.Group>
          <Column size={5}>
            <Title size={2} spaced className="has-text-white">
            Tame your work, organize your life
            </Title>
            <Title size={5} spaced className="has-text-light" subtitle>
            Remember everything and tackle any project with your notes in one place.
            </Title>
            <Link to='/register' className="button is-outlined is-white is-large">
              <strong>Register Now for free</strong>
            </Link>
          </Column>
          <Column size={6} offset={1}>
            <img src={presentationImage}/>
          </Column>
        </Column.Group>
      </Container>
    </Section>

  </Fragment>
)

export default HomeScreen;