import React from "react";
import styles from "./Perfil.module.css";

const Perfil = () => {
  const addReminder = () => {
    const reminderName = document.getElementById('reminderName').value;
    const reminderDate = document.getElementById('reminderDate').value;

    if (reminderName && reminderDate) {
      const reminderList = document.getElementById('reminderList');
      const listItem = document.createElement('li');
      listItem.classList.add(styles.reminderItem); // Use CSS module class
      listItem.innerHTML = `<span>${reminderName}</span><span>${reminderDate}</span>`;
      reminderList.appendChild(listItem);
    }
  };

  const deleteReminders = () => {
    const reminderList = document.getElementById('reminderList');
    while (reminderList.firstChild) {
      reminderList.removeChild(reminderList.firstChild);
    }
  };

  const changePassword = () => {
    // Implement your logic to change the password here
    alert('Senha alterada com sucesso!');
  };

  const deleteAccount = () => {
    // Implement your logic to delete the account here
    alert('Conta apagada com sucesso!');
  };

  return (
    <div className={styles.profileContainer}>
      <h4>Perfil do Usuário</h4>
      <div className={styles.inputContainer}>
        <label htmlFor="username">Usuário:</label>
        <input type="text" id="username" placeholder="Digite seu usuário" />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Digite seu email" />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" placeholder="Digite sua senha" />
      </div>
      <div className={styles.reminderContainer}>
        <h4>Lembretes</h4>
        <div className={styles.reminderInput}>
          <label htmlFor="reminderName">Nome do Lembrete:</label>
          <input type="text" id="reminderName" placeholder="Digite o nome do lembrete" />
        </div>
        <div className={styles.reminderInput}>
          <label htmlFor="reminderDate">Data do Lembrete:</label>
          <input type="date" id="reminderDate" />
        </div>
        <ul className={styles.reminderList} id="reminderList"></ul>
        <div className={styles.buttonContainer}>
          <button onClick={addReminder}>Adicionar Lembrete</button>
          <button className={styles.delete} onClick={deleteReminders}>Excluir Lembretes</button>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={changePassword}>Mudar Senha</button>
        <button className={styles.delete} onClick={deleteAccount}>Apagar Conta</button>
      </div>
    </div>
  );
};

export default Perfil;
