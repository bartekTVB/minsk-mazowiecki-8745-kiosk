import { useState, useEffect, useCallback } from 'react';
import BtnRound from '../BtnRound/BtnRound';
import { StyledCarousel, Slider } from './Carousel.style';

function Carousel({ config, setLoader }) {
  const carousel = config.carousel;

  const [slideActive, setSlideActive] = useState(0);
  const length = carousel.length;

  const handleSlideLeft = () => {
    setSlideActive((slideActive - 1) >= 0 ? (slideActive - 1) : (length - 1))
  };

  const handleSlideRight = useCallback(() => {
    setSlideActive((slideActive + 1) < length ? (slideActive + 1) : 0);
  }, [length, slideActive]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSlideRight();
    }, 10000);

    return () => clearTimeout(timeout);
  }, [slideActive, handleSlideRight])

  return (
    <StyledCarousel>
      <a
        href={carousel[slideActive].page}
        onClick={setLoader}
      >
        POZNAJ SZCZEGÓŁY
      </a>
      <BtnRound
        handleUp={handleSlideRight}
        handleDown={handleSlideLeft}
      />
      {
        carousel.map((item, index) => {
          return (
            <Slider
              key={item.id}
              show={slideActive === index ? true : false}
            >
              <div>
                <div>{item.title}</div>
                <div>{item.txt1}</div>
                <div>{item.txt2}</div>
              </div>
              <div>
                <img src={`${config.baseURL}/assets/images/${item.img}`} alt="" />
              </div>
            </Slider>
          )
        })
      }
    </StyledCarousel>
  )
}

export default Carousel