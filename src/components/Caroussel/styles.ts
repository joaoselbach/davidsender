import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;

  .mySwiper {
    padding-top: 50px;
    padding-bottom: 104px;
    text-align: -webkit-center;
  }

  .swiper-button-next {
    inset-block-start: auto;
    bottom: 8px;
    right: 46.3%;
    padding: 8px 20px;
    background-color: #46BAB1;
    border-radius: 50px;
    cursor: pointer;

    @media (max-width: 1468px) {
      right: 44%
    }

    @media (max-width: 868px) {
      right: 40%
    }

    @media (max-width: 460px) {
      right: 35%
    }
  }

  .swiper-button-prev {
    inset-block-start: auto;
    bottom: 8px;
    left: 46.3%;
    padding: 8px 20px;
    background-color: #46BAB1;
    border-radius: 50px;
    cursor: pointer;

    @media (max-width: 1468px) {
      left: 44%
    }

    @media (max-width: 868px) {
      left: 40%
    }

    @media (max-width: 460px) {
      left: 35%
    }
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 13px;
    font-weight: bold;
    color: #fff;
  }

`