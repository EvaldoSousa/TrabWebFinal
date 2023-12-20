import React from 'react';
import styles from './Find.module.css';
import Card from './Card';
import { Link } from 'react-router-dom';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Conheça as instituições</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Lugares maravilhosos esperando por sua ajuda</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            // when window width is >= 340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            // when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Link to="/patasAmigas">
              <Card
                image='https://cdn.alboompro.com/5f6c338306017400012a0703_6117463a492459000188c423/original_size/cantinho_da_filo_106.jpg?v=1'
                make='Patas Amigas'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link to="/acolherTransformar">
              <Card
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV368SFCNl7ILk5-S83SsfPVI6qEiL4nvQGg&usqp=CAU'
                make='Acolher e Transformar'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link to="/compromissoSocial">
              <Card
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzwUanPvGLPtuoHK5QigYo_9E8qrWhq7-uA&usqp=CAU'
                make='Compromisso Social Global'
              />
          </Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link to="/aliancaMudanca">
            <Card
              image='https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/13/spogomi-1677537048543_v2_600x350-1k201loheb67k.jpg'
              make='Aliança pela Mudança'
            />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link to="/redeHumanitaria">
            <Card
              image='https://s2-g1.glbimg.com/AMMYKvFJeFi-RGnw6yXUAoY3JE8=/0x0:906x507/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/q/3/nzEilZR8aBNLbRzeX0Jw/sem-titulo.png'
              make='Rede Humanitária'
            />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
          <Link to="/mundoAnimal">
            <Card
              image='https://img.freepik.com/fotos-premium/close-de-um-cao-vira-lata-mestico-parecendo-triste-no-exame-medico-pelo-veterinario-profissional_118628-2698.jpg'
              make='Mundo Animal Seguro'
            />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link to="/semeandoBondade">
            <Card
              image='https://www.shutterstock.com/image-photo/patient-kid-lie-down-on-600nw-1021395253.jpg'
              make='Semeando Bondade'
            />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link to="/amorAcao">
            <Card
              image='https://files.adventistas.org/v2.adra.org.br/2022/09/13123003/Barbalho-II-2.jpeg'
              make='Amor em Ação'
            />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link to="/ponteEsperanca">
            <Card
              image='https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2016/04/12/638312/20160412181614665591u.JPG'
              make='Pontes para a Esperança'
            />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link to="/larPeludo">
            <Card
              image='https://s2.glbimg.com/fkKrrK0d81yCwLqwmro7aaT1C10=/s.glbimg.com/jo/g1/f/original/2014/09/03/gato-triste.jpg'
              make='Lar dos Peludos'
            />
          </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
