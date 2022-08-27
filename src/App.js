import { Button, Col, Row, Modal, Form, Input } from "antd";
import "./App.scss";
import { Title } from "./components/Title";
import asistman from "./images/asistman.png";
import engeniering from "./images/engeniering.svg";
import photovideo from "./images/photovideo.svg";
import geoloc from "./images/geoloc.svg";
import automat from "./images/automat.svg";
import printforms from "./images/printforms.svg";
import anlitics from "./images/anlitics.svg";
import pos1 from "./images/pos1.svg";
import pos2 from "./images/pos2.svg";
import pos3 from "./images/pos3.svg";
import pos4 from "./images/pos4.svg";
import pos5 from "./images/pos5.svg";
import set1 from "./images/set1.svg";
import set2 from "./images/set2.svg";
import set3 from "./images/set3.svg";
import set4 from "./images/set4.svg";
import ava1 from "./images/ava1.svg";
import ava2 from "./images/ava2.svg";
import ava3 from "./images/ava3.svg";
import clock from "./images/clock.svg";
import free from "./images/free.svg";
import skype from "./images/skype.svg";

import useWindowDimensions from "./useWindowDimensions";
import { Settings } from "./components/Settings";
import { Problems } from "./components/Problems";
import Slider from "react-slick";
import { Reviews } from "./components/Reviews";
import { useEffect, useState } from "react";

const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

function App() {
  const { width } = useWindowDimensions();

  const [myref, setMyref] = useState(1);

  useEffect(() => {
    document.getElementById(myref).scrollIntoView();
  }, [myref, setMyref]);

  const executeScroll = (id) => {
    setMyref(id);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <header className="App-header d-flex-between">
        <div>
          <img src={asistman} style={{ height: "90px", width: "200px" }} />
        </div>
        <div className="d-flex-center">
          <div className="navhead">
            <p onClick={() => executeScroll(1)}>Главная</p>
            <p onClick={() => executeScroll(2)}>Возможности</p>
            <p onClick={() => executeScroll(3)}>Стоимость</p>
          </div>
          <div className="navhead__btn">
            <button onClick={showModal}>Бесплатная демонстрация</button>
          </div>
          <Modal
            title="ЗАПИСАТЬСЯ НА ДЕМОНСТРАЦИЮ"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>
              Введите свое имя и номер телефона или e-mail, мы свяжемся с вами
              для согласования времени и даты демонстрации сервиса.
            </p>
            <Form onFinish={(fields) => console.log(fields)}>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="Имя" />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="+7___-___-__-__" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="e-mail" />
              </Form.Item>

              <Button type="primary" htmlType="submit">
                ЗАПИСЬ
              </Button>
            </Form>
          </Modal>
        </div>
      </header>
      <main className="App">
        <div id={1} />
        <p className="bold">
          ПЛАТФОРМА ДЛЯ УПРАВЛЕНИЯ И СТАНДАРТИЗАЦИИ ПРОЦЕССОВ ТЕХНИЧЕСКОГО
          ОБСЛУЖИВАНИЯ И МОНТАЖА СЛАБОТОЧНЫХ ИНЖЕНЕРНЫХ СИСТЕМ
        </p>
        <img src={engeniering} className="w-100" />
        <Title text={"Для чего"} />
        <p className="text">
          Платформа ASSISTMAN нацелена упростить и автоматизировать привычные
          рабочие процессы в рамках технического обслуживания, монтажа и ремонта
          слаботочных инженерных систем, исключить «человеческий фактор».
        </p>
        <p className="text">
          Удобный инструмент управления, простая коммуникация с персоналом.
          Любые отчётные формы. Автоматизация бизнес-процессов.
        </p>
        <Title text={"Какие проблемы решает ASSISTMAN?"} />
        <Row gutter={[16, 16]} justify="center">
          <Problems
            xl={4}
            md={8}
            sm={12}
            xs={24}
            text={"Автоматизация процессов"}
            src={automat}
          />
          <Problems
            xl={4}
            md={8}
            sm={12}
            xs={24}
            text={"Геолокация сотрудников"}
            src={geoloc}
          />
          <Problems
            xl={4}
            md={8}
            sm={12}
            xs={24}
            text={"Фото-видео фиксация"}
            src={photovideo}
          />
          <Problems
            xl={4}
            md={12}
            sm={12}
            xs={24}
            text={"Печатные формы"}
            src={printforms}
          />
          <Problems
            xl={4}
            md={12}
            sm={12}
            xs={24}
            text={"Аналитика"}
            src={anlitics}
          />
        </Row>

        <Title text={"Возможности  ASSISTMAN"} />
        <div
          id={2}
          className={`${
            width > 560 ? "d-flex-between grey p-10 mr-t-10" : "grey"
          }`}
        >
          <div>
            <img src={pos1} />
          </div>
          <div>
            <h3 className="possibilities">
              управление задачами Контроль ПЕРСОНАЛА
            </h3>
            <p>
              Главная цель – исключить ручное управление задачами и осуществлять
              контроль за своевременностью и качеством работ персонала в режиме
              онлайн. Оперативно реагировать на внештатные ситуации.
            </p>
          </div>
        </div>
        <div
          className={`${
            width > 560 ? "d-flex-between grey p-10 mr-t-10" : "grey"
          }`}
        >
          <div>
            <img src={pos2} />
          </div>
          <div>
            <h3 className="possibilities">пЛАНИРОВАНИЕ РАБОЧЕГО ВРЕМЕНИ</h3>
            <p>
              Планирование – важная составляющее успешной работы. Специальный
              модуль платформы систематизирует и оптимизирует рабочее время
              каждого сотрудника. За счёт сбора точной аналитики, такая система
              наиболее эффективна.
            </p>
          </div>
        </div>
        <div
          className={`${
            width > 560 ? "d-flex-between grey p-10 mr-t-10" : "grey"
          }`}
        >
          <div>
            <img src={pos3} />
          </div>
          <div>
            <h3 className="possibilities">
              аВТОМАТИЗАЦИЯ И УЧЕТ ДОКУМЕНТООБОРОТА
            </h3>
            <p>
              Система позволяет автоматизировать формирование отчетных и
              подтверждающих документов, стандартизировать их формы, улучшить
              качество и сократить время их заполнения.
            </p>
          </div>
        </div>
        <div
          className={`${
            width > 560 ? "d-flex-between grey p-10 mr-t-10" : "grey"
          }`}
        >
          <div>
            <img src={pos4} />
          </div>
          <div>
            <h3 className="possibilities">Мониторинг объектов на карте</h3>
            <p>
              Платформа показывает географию объектов на карте, это позволяет
              быстро перейти ко всем задачам выбранного объекта,
              сориентироваться по объёму работ, которые запланированы, либо были
              проведены ранее.
            </p>
          </div>
        </div>
        <div
          className={`${
            width > 560 ? "d-flex-between grey p-10 mr-t-10" : "grey"
          }`}
        >
          <div>
            <img src={pos5} />
          </div>
          <div>
            <h3 className="possibilities">надежное хранение данных</h3>
            <p>
              Платформа обеспечивает надёжное и системное хранение данных
              каждого объекта: хронология выполнения работ, описание
              оборудования (установленного или демонтированного), техническая
              документация, медиа файлы (изображения, фото, видео).
            </p>
          </div>
        </div>

        <Title text={"ASSISTMAN легко настраивается "} />
        <Row justify="center" gutter={[16, 16]}>
          <Settings
            text={"Ежедневное резервное копирование"}
            title={"БЕЗОПАСНО"}
            src={set1}
          />
          <Settings
            text={"Уменьшает затраты связанные с человеческим фактором"}
            title={"ВЫГОДНО"}
            src={set2}
          />
          <Settings
            text={"Доступно на любом мобильном устройстве"}
            title={"МОБИЛЬНО"}
            src={set3}
          />
          <Settings
            text={"Удобный и простой интерфейс"}
            title={"ПРОСТО"}
            src={set4}
          />
        </Row>

        <Title text={"Стоймость ASSISTMAN:"} />
        <div id={3} />
        <div>
          <p className="text">
            Тарифы расчитываются индивидуально, зависят от количества
            добавляемых объектов.
          </p>
          <h2 className="sum">ОТ 7 000 РУБ./МЕС.</h2>
        </div>
        <ul>
          <li>Неограниченное количество пользователей.</li>
          <li> Весь доступный функционал. </li>
          <li>Неограниченное количество справочников, документов, отчетов. </li>
          <li>Отдельно оплачивается дисковое пространство: 10 руб. за 1 ГБ.</li>
        </ul>

        <Slider {...settings}>
          <Reviews
            title={"Екатерина КРАВЧЕКНОгЕН. ДИРЕКТОР АЛЬТАИР"}
            text={`В ASSISTMAN мы ведем проекты уже несколько лет.
            Благодаря этому продукту мы можем объединять разных специалистов для работы над одним проектом. ASSISMAN это 30% нашей эффективности.`}
            src={ava2}
          />
          <Reviews
            src={ava1}
            title={`Сергей Шило
              ДИРЕКТОР “Дозор"`}
            text={`В результате использования ASSISMAN стало меньше хаоса, задачи перестали теряться, появилась возможность планирования ресурсов.`}
          />
          <Reviews
            src={ava3}
            title={`Екатерина КРАВЧЕКНО
              гЕН. ДИРЕКТОР “АЛЬТАИР”`}
            text={`В ASSISTMAN мы ведем проекты уже несколько лет.
              Благодаря этому продукту мы можем объединять разных специалистов для работы над одним проектом. ASSISTMAN это 30% нашей эффективности.`}
          />
          <Reviews
            title={"Екатерина КРАВЧЕКНОгЕН. ДИРЕКТОР АЛЬТАИР"}
            text={`В ASSISTMAN мы ведем проекты уже несколько лет.
            Благодаря этому продукту мы можем объединять разных специалистов для работы над одним проектом. ASSISMAN это 30% нашей эффективности.`}
          />
        </Slider>

        <Title text={"Узнайте о ASSISTMAN ОТ ПРОФЕССИОНАЛА"} />
        <Row>
          <Col span={24}>
            <div className="d-flex-center">
              <Button type="primary" onClick={showModal}>
                Заказать демонстрацию
              </Button>
            </div>
          </Col>
          <Col span={24}>
            <div className="d-flex-around">
              <div>
                <div>
                  <img src={clock} />
                </div>
                <div>Демонстрация займет не больше часа</div>
              </div>
              <div>
                <div>
                  <img src={free} />
                </div>
                Совершенно бесплатно
              </div>
            </div>
          </Col>
          <Col span={24}>
            <div className="d-flex-center">
              <div>
                <img src={skype} />
              </div>
              Организуем удаленный доступ и проведем демострацию
            </div>
          </Col>
        </Row>
      </main>

      <footer className="d-flex-between">
        <div>© ASSISTMAN, 2019</div>
        <div>Политика конфиденциальности</div>
        <div>
          <div>Нужна помощь?</div>
          <div>+7-995-183-04-19 </div>
          <div>INFO@ASSISTMAN.RU</div>
        </div>
      </footer>
    </>
  );
}

export default App;
