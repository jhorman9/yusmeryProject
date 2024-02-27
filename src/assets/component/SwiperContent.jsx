import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SwiperContent = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
         progressCircle.current.style.setProperty('--progress', 1 - progress);
         progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
        delay: 10000,
        disableOnInteraction: false,
         }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className='slide-item item-1' >
          <div className='p-4 slide-item-texts'>
            <h3 className='animate__animated animate__bounceInDown mb-2 mt-0 p-0'>Hola, 👋</h3>
            <h4 className='animate__animated animate__bounceInLeft mb-2 mt-0 p-0'> <span className='text-normal'>Mi nombre es</span> Yusmery Hernandez</h4>
            <p className='animate__animated animate__bounceInUp text-normal'>Descubrir el mundo de la lectura transformó mi vida de una monotonía abrumadora a una aventura llena de emociones. Aunque no era una ávida lectora desde la infancia, encontré en los libros un refugio durante los momentos más difíciles. La risa, la ira, la felicidad y la frustración se entrelazaban mientras devoraba páginas, y de ese torbellino de sentimientos surgió el anhelo de convertirme en escritora. Con una imaginación desbordante y el apoyo incondicional de seres queridos, decidí dar vida a mi propia historia. Hoy, estoy inmersa en la creación de mi primer libro, dejando una parte de mí en cada página. Espero que al leerlo, encuentren en él las mismas emociones que he experimentado. Bienvenidos a esta travesía literaria.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide-item item-1' >
          <div className='p-4 slide-item-texts'>
            <h3 className='animate__animated animate__bounceInDown mb-2 mt-0 p-0'>Hola, 👋</h3>
            <h4 className='animate__animated animate__bounceInLeft mb-2 mt-0 p-0'> <span className='text-normal'>Mi nombre es</span> Yusmery Hernandez</h4>
            <p className='animate__animated animate__bounceInUp text-normal'>Descubrir el mundo de la lectura transformó mi vida de una monotonía abrumadora a una aventura llena de emociones. Aunque no era una ávida lectora desde la infancia, encontré en los libros un refugio durante los momentos más difíciles. La risa, la ira, la felicidad y la frustración se entrelazaban mientras devoraba páginas, y de ese torbellino de sentimientos surgió el anhelo de convertirme en escritora. Con una imaginación desbordante y el apoyo incondicional de seres queridos, decidí dar vida a mi propia historia. Hoy, estoy inmersa en la creación de mi primer libro, dejando una parte de mí en cada página. Espero que al leerlo, encuentren en él las mismas emociones que he experimentado. Bienvenidos a esta travesía literaria.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide-item item-1' >
          <div className='p-4 slide-item-texts'>
            <h3 className='animate__animated animate__bounceInDown mb-2 mt-0 p-0'>Hola, 👋</h3>
            <h4 className='animate__animated animate__bounceInLeft mb-2 mt-0 p-0'> <span className='text-normal'>Mi nombre es</span> Yusmery Hernandez</h4>
            <p className='animate__animated animate__bounceInUp text-normal'>Descubrir el mundo de la lectura transformó mi vida de una monotonía abrumadora a una aventura llena de emociones. Aunque no era una ávida lectora desde la infancia, encontré en los libros un refugio durante los momentos más difíciles. La risa, la ira, la felicidad y la frustración se entrelazaban mientras devoraba páginas, y de ese torbellino de sentimientos surgió el anhelo de convertirme en escritora. Con una imaginación desbordante y el apoyo incondicional de seres queridos, decidí dar vida a mi propia historia. Hoy, estoy inmersa en la creación de mi primer libro, dejando una parte de mí en cada página. Espero que al leerlo, encuentren en él las mismas emociones que he experimentado. Bienvenidos a esta travesía literaria.</p>
          </div>
        </SwiperSlide>
                <SwiperSlide className='slide-item item-1' >
          <div className='p-4 slide-item-texts'>
            <h3 className='animate__animated animate__bounceInDown mb-2 mt-0 p-0'>Hola, 👋</h3>
            <h4 className='animate__animated animate__bounceInLeft mb-2 mt-0 p-0'> <span className='text-normal'>Mi nombre es</span> Yusmery Hernandez</h4>
            <p className='animate__animated animate__bounceInUp text-normal'>Descubrir el mundo de la lectura transformó mi vida de una monotonía abrumadora a una aventura llena de emociones. Aunque no era una ávida lectora desde la infancia, encontré en los libros un refugio durante los momentos más difíciles. La risa, la ira, la felicidad y la frustración se entrelazaban mientras devoraba páginas, y de ese torbellino de sentimientos surgió el anhelo de convertirme en escritora. Con una imaginación desbordante y el apoyo incondicional de seres queridos, decidí dar vida a mi propia historia. Hoy, estoy inmersa en la creación de mi primer libro, dejando una parte de mí en cada página. Espero que al leerlo, encuentren en él las mismas emociones que he experimentado. Bienvenidos a esta travesía literaria.</p>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
        </>
      );
};

export default SwiperContent;