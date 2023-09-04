import React from 'react';
import axios from 'axios';
import { HiOutlineTrash } from 'react-icons/hi'

import styles from '../styles/Table.module.css';
import { baseURl } from '../utils/baseUrl';

const Table = ({ data, setRefreshUI }) => {
  const removerUsuario = async (id) => {
    await axios.delete(`${baseURl}/users/${id}`).then(() => {
      setRefreshUI((prevState) => !prevState)
    });
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.head}>
          <th>Id</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Participation</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={index} className={styles.row}>
            <td className={styles.data}>{index + 1}</td>
            <td className={styles.data}>{item.name}</td>
            <td className={styles.data}>{item.lastName}</td>
            <td className={styles.data}>{item.participation}%</td>
            <td className={styles.data}>
              <HiOutlineTrash onClick={(e) => removerUsuario(item._id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
