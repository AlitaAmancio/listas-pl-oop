import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './home.css';

export function Carrosel() {
  return (
    <>
      <Carousel className='tamanho-imagem'>
        <Carousel.Item>
          <img
            className="img1"
            src="/images/caozinho.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img2"
            src="/images/gatinho.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img3"
            src="/images/outroCaozinho.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img4"
            src="/images/maisOutroCaozinho.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export function Intro() {
  return (
    <>
      <div className='petlovers'>
        <h1>PET </h1>
        <img className='petloversicon' src='./images/paw.png' alt="Pet Lovers Icon"></img>
        <h1>LOVERS   </h1>
      </div>
      <div className="row row-cols-1 row-cols-sm-1 g-2 card-col mx-auto cards">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Quem Somos</h5>
              <p className="card-text">Bem-vindos ao Petshop PetLovers! Nossa equipe é apaixonada por pets, e nosso compromisso é oferecer produtos e serviços de alta qualidade para garantir o bem-estar, saúde e alegria dos seus companheiros de quatro (ou mais) patas. Cada animalzinho é tratado com carinho e cuidado, como parte da nossa família. Seja parte da experiência PetLovers, onde a felicidade do seu Pet é nossa prioridade. Estamos ansiosos para conhecê-los!</p>
            </div>
            <img src="/images/gatoculos.jpg" alt="Gatoculos" className="img-fluid" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Nossa Missão</h5>
              <p className="card-text">Nosso compromisso é criar uma experiência singular e positiva para você e seu animal de estimação. Acreditamos fervorosamente que todos os animais merecem cuidados excepcionais, amor e atenção. Por isso, dedicamos especial atenção à segurança e responsabilidade em todos os aspectos do nosso serviço. Buscamos incansavelmente fornecer os melhores produtos e serviços, garantindo que cada Pet desfrute de uma vida saudável e plenamente feliz.</p>
            </div>
            <img src="/images/64587.jpg" alt="aindaOutroCaozinho" className="img-fluid" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <a className="a" href='/lista-produtos'>
                  Produtos de excelência
                </a>
              </h5>
              <p className="card-text">Dentro do nosso Petshop, proporcionamos uma experiência completa para o seu animal de estimação, oferecendo uma ampla variedade de produtos cuidadosamente selecionados para atender às suas necessidades específicas. Nosso compromisso com a segurança e o conforto dos animais é refletido na parceria exclusiva com marcas de renome e alta qualidade. Desde alimentos nutritivos e brinquedos envolventes até acessórios estilosos e produtos de higiene, nosso catálogo abrangente abriga tudo o que é essencial para cuidar e mimar o seu fiel companheiro.</p>
            </div>
            <img src="/images/27787.jpg" alt="Produtos" className="img-fluid" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <a className="a" href='/lista-servicos'>
                  Serviços de qualidade especializada
                </a>
              </h5>
              <p className="card-text">Além de oferecer produtos de qualidade, nosso Petshop também disponibiliza uma variedade de serviços especializados para garantir o bem-estar do seu animal de estimação. Contamos com uma equipe de profissionais qualificados prontos para fornecer serviços como banho e tosa, cuidados de higiene, tratamentos terapêuticos, consultas veterinárias e muito mais. Valorizamos a saúde e o conforto do seu animal de estimação e nos esforçamos para oferecer um atendimento personalizado e cuidadoso em todos os momentos.</p>
            </div>
            <img src="/images/servicos.jpg" alt="Serviços" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};
