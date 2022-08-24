import { Anchor, Button, Col, Row } from "antd";
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
import useWindowDimensions from "./useWindowDimensions";
import { Settings } from "./components/Settings";

const { Link } = Anchor;

function App() {
  const { width } = useWindowDimensions();

  console.log(width);

  return (
    <>
      <header className="App-header d-flex-between">
        <div>
          <img src={asistman} style={{ height: "90px", width: "200px" }} />
        </div>
        <div>
          <div>
            <Anchor className="d-flex">
              <Link href="#components-anchor-demo-basic" title="Главная" />
              <Link href="#components-anchor-demo-static" title="Возможности" />
              <Link href="#API" title="Стоимость"></Link>
            </Anchor>
          </div>
          <div>
            <Button>Бесплатная демонстрация</Button>
          </div>
        </div>
      </header>
      <main className="App">
        <p className="text">
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
        <Row gutter={[16, 16]}>
          <Col xl={4} md={8} sm={12} xs={24}>
            <div>
              <img src={automat} />
              <p>Автоматизация процессов</p>
            </div>
          </Col>
          <Col xl={4} md={8} sm={12} xs={24}>
            <div>
              <img src={geoloc} />
              <p>Геолокация сотрудников</p>
            </div>
          </Col>
          <Col xl={4} md={8} sm={12} xs={24}>
            <div>
              <img src={photovideo} />
              <p>Фото-видео фиксация</p>
            </div>
          </Col>
          <Col xl={4} md={12} sm={12} xs={24}>
            <div>
              <img src={printforms} />
              <p>Печатные формы</p>
            </div>
          </Col>
          <Col xl={4} md={12} sm={12} xs={24}>
            <div>
              <img src={anlitics} />
              <p>Аналитика</p>
            </div>
          </Col>
        </Row>

        <Title text={"Возможности  ASSISTMAN"} />
        <div
          className={`${
            width > 480 ? "d-flex-between grey p-10 mr-t-10" : "grey"
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
            width > 480 ? "d-flex-between grey p-10 mr-t-10" : "grey"
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
            width > 480 ? "d-flex-between grey p-10 mr-t-10" : "grey"
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
            width > 480 ? "d-flex-between grey p-10 mr-t-10" : "grey"
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
            width > 480 ? "d-flex-between grey p-10 mr-t-10" : "grey"
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
        <Row>
          <Settings
            text={"Ежедневное резервное копирование"}
            title={"БЕЗОПАСНО"}
            src={set1}
          />
          <Settings
            text={"Ежедневное резервное копирование"}
            title={"БЕЗОПАСНО"}
            src={set2}
          />
          <Settings
            text={"Ежедневное резервное копирование"}
            title={"БЕЗОПАСНО"}
            src={set3}
          />
          <Settings
            text={"Ежедневное резервное копирование"}
            title={"БЕЗОПАСНО"}
            src={set4}
          />
        </Row>

        <Title text={"Стоймость ASSISTMAN:"} />
        <div>
          <p className="text">
            Тарифы расчитываются индивидуально, зависят от количества
            добавляемых объектов.
          </p>
          <h2>ОТ 7 000 РУБ./МЕС.</h2>
        </div>
        <ul>
          <li>Неограниченное количество пользователей.</li>
          <li> Весь доступный функционал. </li>
          <li>Неограниченное количество справочников, документов, отчетов. </li>
          <li>
            {" "}
            Отдельно оплачивается дисковое пространство: 10 руб. за 1 ГБ.
          </li>
        </ul>
        <div>BlocksBlocksBlocksBlocksBlocksBlocksBlocks</div>

        <Title text={"Узнайте о ASSISTMAN ОТ ПРОФЕССИОНАЛА"} />
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
