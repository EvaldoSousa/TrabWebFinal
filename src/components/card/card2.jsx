import React from 'react';
import styles from './card.module.css';

const Card2 = () => {
  return (
    <div className={styles.wrapper}>
      <Card
        img="https://cdn.alboompro.com/5f6c338306017400012a0703_6117463a492459000188c423/original_size/cantinho_da_filo_106.jpg?v=1"
        title="Patas Amigas"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"
      />

      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV368SFCNl7ILk5-S83SsfPVI6qEiL4nvQGg&usqp=CAU"
        title="Acolher e Transformar"
        description="Fear Risotto no more! This simple recipe is perfect for family dinners."
      />

      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzwUanPvGLPtuoHK5QigYo_9E8qrWhq7-uA&usqp=CAU"
        title="Compromisso Social Global"
        description="Baked Cod with Vegetables. 30-minute meal!"
      />
        <Card
        img="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/13/spogomi-1677537048543_v2_600x350-1k201loheb67k.jpg"
        title="Aliança Pela Mudança"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"
      />

      <Card
        img="https://s2-g1.glbimg.com/AMMYKvFJeFi-RGnw6yXUAoY3JE8=/0x0:906x507/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/q/3/nzEilZR8aBNLbRzeX0Jw/sem-titulo.png"
        title="Rede Humanitaria"
        description="Fear Risotto no more! This simple recipe is perfect for family dinners."
      />

      <Card
        img="https://img.freepik.com/fotos-premium/close-de-um-cao-vira-lata-mestico-parecendo-triste-no-exame-medico-pelo-veterinario-profissional_118628-2698.jpg"
        title="Mundo Animal Seguro"
        description="Baked Cod with Vegetables. 30-minute meal!"
      />

<Card
        img="https://www.shutterstock.com/image-photo/patient-kid-lie-down-on-600nw-1021395253.jpg"
        title="Semeando Bondade"
        description="Baked Cod with Vegetables. 30-minute meal!"
      />
        <Card
        img="https://files.adventistas.org/v2.adra.org.br/2022/09/13123003/Barbalho-II-2.jpeg"
        title="Amor em Ação"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"
      />

      <Card
        img="https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2016/04/12/638312/20160412181614665591u.JPG"
        title="Ponte Para Esperança"
        description="Fear Risotto no more! This simple recipe is perfect for family dinners."
      />

      <Card
        img="https://s2.glbimg.com/fkKrrK0d81yCwLqwmro7aaT1C10=/s.glbimg.com/jo/g1/f/original/2014/09/03/gato-triste.jpg"
        title="Lar Dos Peludos"
        description="Baked Cod with Vegetables. 30-minute meal!"
      />
    </div>
  );
};

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles['card__body']}>
        <img src={props.img} alt="Recipe" className={styles['card__image']} />
        <h2 className={styles['card__title']}>{props.title}</h2>
        <p className={styles['card__description']}>{props.description}</p>
      </div>
      <button className={styles['card__btn']}>Saber Mais</button>
    </div>
  );
}

export default Card2;
