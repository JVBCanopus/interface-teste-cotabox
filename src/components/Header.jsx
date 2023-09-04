import React from 'react';
import axios from 'axios';

import styles from '../styles/Header.module.css';
import { baseURl } from '../utils/baseUrl';


const Header = ({ onDataSubmit }) => {
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [participation, setParticipation] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const objInfo = {
      name,
      lastName,
      participation,
    };

    await axios.get(`${baseURl}/users`).then((res) => {
      const response = res.data.reduce((total, item) => {
        return total + item.participation;
      }, 0);

      const somaParticipacao = response + parseInt(participation);

      if (somaParticipacao <= 100) {
        onDataSubmit(objInfo);
      } else {
        alert('A porcentagem de participação ultrapassa o restante');
      }
    });
    setName('');
    setLastName('');
    setParticipation('');
  };
  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Nome"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Sobrenome"
          value={lastName}
          onChange={({ target }) => setLastName(target.value)}
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Participação"
          min={1}
          max={100}
          value={participation}
          onChange={({ target }) => setParticipation(target.value)}
        />
        <button className={styles.button}>Send</button>
      </form>
    </header>
  );
};

export default Header;
