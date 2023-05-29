import React, { Fragment } from 'react';
const IndexPage = () => {
  return (
    <Fragment>
      <header>
        <div className="container">
          <div className="row">
            <div className="responsive-logo"></div>
            <div className="pullcontainer">
              <a href="#" id="pull">
                <i className="fa fa-bars fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <nav>
                <div className="logo-holder"></div>
                <ul className="clearfix">
                  <li>
                    <a href="#about">Про КНИТУ</a>
                  </li>
                  <li className="dot">.</li>
                  <li>
                    <a href="#contact" className="r_spacer">
                      Контакт
                    </a>
                  </li>
                  <li>
                    <a href="#work">Деятельность</a>
                  </li>
                  <li className="dot">.</li>
                  <li>
                    <a href="sign-in">Вход</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="hero"></div>
      </header>
      <div className="container-fluid intro" id="about">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h1 className="chain">ИСТОРИЯ КНИТУ</h1>
            <p className="text-intro">
              «Казань — местность, где химическая промышленность в России имеет первостепенное
              значение и кроме того, производства прядильно-ткацкое и мукомольное в Казани и близ ее
              сообщают ей характер важного промышленного центра, в котором вполне справедливо
              учредить промышленное училище». (Из доклада министра народного просвещения на
              заседании Государственного Совета 26 июня 1889 г.)
            </p>
            <p className="text-intro">
              Казанский национальный исследовательский технологический университет берет свое начало
              с Казанского соединенного промышленного училища. 14 (26) июня 1890 года император
              Александр III повелел создать в Казани соединенное среднее химико-технологическое
              училище и низшее техническое училище с механической, химической и строительной
              специальностями. Для строительства училища был выделен земельный участок на Арском
              поле. Кроме учебного корпуса (ныне корпус Б), были сооружены и оборудованы
              технико-химические, столярные и слесарно-механические мастерские, газовый завод,
              собственная электростанция, жилой корпус для преподавателей и сотрудников (корпус О).
            </p>
            <p className="text-intro">
              10 сентября 1897 года состоялось торжественное открытие Казанского промышленного
              училища. Училище готовило мастеров-практиков и было оснащено полузаводским и заводским
              оборудованием для производства соды, сульфата натрия, соляной кислоты, сухой перегонки
              дерева, железного и медного купороса, квасцов, мыловарения и клееварения. Казанское
              промышленное училище дало 17 выпусков, подготовив 1145 специалистов. Постановлением
              отдела вузов Наркомпроса РСФСР от 2 апреля 1919 года Казанское промышленное училище
              преобразуется в Казанский политехнический институт. Этот институт стал первым высшим
              учебным заведением инженерного профиля в Татарстане.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 section-1 nopadding" id="work">
            {/* <div className="logo-1 wp1"></div> */}
          </div>
          <div className="col-md-4 section-text nopadding">
            <div className="wp4">
              <h2 className="frame" style={{ height: 'auto' }}>
                УНИВЕРСИТЕТ СЕГОДНЯ
              </h2>
              <p>
                В составе КНИТУ 12 учебных и научно-исследовательских институтов (в том числе
                Проектный институт «Союзхимпромпроект», Казанский НИИ каучуков специального
                назначения «Спецкаучук»). В 2014 году открыто представительство КНИТУ во Вьетнаме
                (г. Вьетчи).
              </p>
              <div className="thin-sep"></div>
            </div>
            <div className="small-featured-img seat-red">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 section-text nopadding">
            <div className="wp5">
              <h2 className="mech">Образовательная деятельность</h2>
              <p>
                Сегодня КНИТУ - это крупнейший в Российской Федерации образовательный центр
                химико-технологического профиля – лидер в области подготовки высококвалифицированных
                инженерных кадров по направлению «Химическая технология». Здесь реализуется более
                378 образовательных программ высшего, среднего и дополнительного образования. В вузе
                обучается более 25 000 студентов и аспирантов из России и зарубежных стран.
              </p>
              <div className="thin-sep"></div>
            </div>
            <div className="small-featured-img seat-black">
              <div className="arrow"></div>
            </div>
          </div>
          <div className="col-md-8 section-2 nopadding">
            {/* <div className="logo-2 wp2"></div> */}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 section-3">{/* <div className="logo-3 wp3"></div> */}</div>
          <div className="col-md-4 section-text nopadding">
            <div className="wp6">
              <h2 className="front-frame">КНИТУ в рейтингах</h2>
              <p>
                По версии одного из наиболее влиятельных глобальных рейтингов университетов (QS
                University Rankings: BRICS 2015), КНИТУ занимает 151-160 место среди вузов стран
                БРИКС. В 2017 году проект «Социальный навигатор» международного информационного
                агентства «Россия сегодня» составил национальный рейтинг востребованности вузов в
                РФ. КНИТУ в числе лидеров: у нас 12 место среди инженерных университетов страны и
                самая высокая позиция по сравнению с другими вузами региона.
              </p>
              <div className="thin-sep"></div>
            </div>
            <div className="small-featured-img frame-red">
              <div className="arrow"></div>
            </div>
          </div>
          <div className="col-md-4 section-4"></div>
        </div>
      </div>
      <section className="flex-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    {/* <div className="flex-twitter-icon"></div> */}
                    {/* <h2 className="twitter-post-username">
                      <a href="#">AOS New York @aod</a> <span>/ 35 min</span>
                    </h2>
                    <p className="twitter-post">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac
                      nulla semper rhoncus. Nullam a odio porttitor, dictum turpis vitae, pretium
                      ante amet.
                    </p> */}
                    <div className="img">
                      <img src="src/assets/img/slide1.png" alt="Leather Seats" />
                      <div className="overlay">
                        <a href="http://google.com/" className="expand"></a>
                        <a className="close-overlay hidden">x</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img">
                      <img src="src/assets/img/slide2.png" alt="Leather Seats" />
                      <div className="overlay">
                        <a href="http://google.com/" className="expand"></a>
                        <a className="close-overlay hidden">x</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img">
                      <img src="src/assets/img/slide3.png" alt="Leather Seats" />
                      <div className="overlay">
                        <a href="http://google.com/" className="expand"></a>
                        <a className="close-overlay hidden">x</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid" id="shop">
        <div className="row">
          <div id="effect" className="effects clearfix">
            <div className="col-md-4 left nopadding">
              <div className="left-box-1">
                <div className="img">
                  <img src="src/assets/img/bot1.jpg" alt="Leather Seats" />
                  <div className="overlay">
                    <a href="http://google.com/" className="expand">
                      leather seats
                    </a>
                    <a className="close-overlay hidden">x</a>
                  </div>
                </div>
              </div>
              <div className="left-box-2 box">
                <div className="img">
                  <img src="src/assets/img/bot2.jpg" alt="Custom Seats" />
                  <div className="overlay">
                    <a href="#" className="expand">
                      custom seats
                    </a>
                    <a className="close-overlay hidden">x</a>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="left-box-btm box">
                <div className="img">
                  <img src="src/assets/img/bot3.jpg" alt="Limited Edition" />
                  <div className="overlay">
                    <a href="#" className="expand">
                      limited edition
                    </a>
                    <a className="close-overlay hidden">x</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mid nopadding">
              <div className="mid-box-1 box">
                <div className="img">
                  <img src="src/assets/img/bot4.jpg" alt="Shop Bags" />
                  <div className="overlay">
                    <a href="#" className="expand">
                      shop bags
                    </a>
                    <a className="close-overlay hidden">x</a>
                  </div>
                </div>
              </div>
              <div className="mid-box-2 box">
                <div className="img">
                  <img src="src/assets/img/bot10.jpg" alt="Shop Bikes" />
                  <div className="overlay">
                    <a href="#" className="expand">
                      shop bikes
                    </a>
                    <a className="close-overlay hidden">x</a>
                  </div>
                </div>
              </div>
              {/* <div className="clearfix"></div> */}
            </div>
            <div className="col-md-4 right nopadding">
              <div className="right-box-1 box">
                <div className="img">
                  <img src="src/assets/img/bot6.jpg" alt="Shop Now" />
                  <div className="overlay">
                    <a href="#" className="expand">
                      shop now
                    </a>
                    <a className="close-overlay hidden">x</a>
                  </div>
                </div>
              </div>
              <div className="right-box-2 box">
                <div className="img">
                  <img src="src/assets/img/bot7.jpg" alt="Shop Seats" />
                  <div className="overlay">
                    <a href="#" className="expand">
                      shop seats
                    </a>
                    <a className="close-overlay hidden">x</a>
                  </div>
                </div>
              </div>
              <div className="right-box-3 box">
                <div className="img">
                  <img src="src/assets/img/bot8.jpg" alt="Shop Accessories" />
                  <div className="overlay">
                    <a href="#" className="expand">
                      shop accessories
                    </a>
                    <a className="close-overlay hidden">x</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="discover">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <a href="https://www.kstu.ru/index.jsp" className="shop-btn">
                Исследовать университет
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="sign_up">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 sign-up">
              <h2 className="logo-header">Оставить электронную почту!</h2>
              <form name="signup-form">
                <input
                  className="signup-input"
                  type="email"
                  name="email_address"
                  defaultValue=""
                  placeholder="enter your email..."
                  title="Please enter a valid email address."
                  required
                />
                <button type="submit" className="submit-btn">
                  Отправлять
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-leftcol">
              <p>
                <span className="bold-16p">Татарстан </span>
                42015,г. Казань, ул. К.Маркса, 68 <a href="#">KRNTU@mail.ru</a>
              </p>
            </div>
            <div className="col-md-4 footer-midcol">
              {/* <ul>
                <li>
                  <a href="#" className="twitter-icon">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="facebook-icon">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="pintrest-icon">
                    Pintrest
                  </a>
                </li>
              </ul> */}
              <div className="clearfix"></div>
            </div>
            <div className="col-md-4 footer-rightcol">
              {/* <p>
                Designed by{' Son Nguyen '}
                <a href="#">
                  <img src="src/assets/img/yebo-icon.png" alt="Yebo Logo" />
                </a>
              </p> */}
              <p className="nopadding">
                Developed by <a href="https://vk.com/wolfmsqg">Son Nguyen</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default IndexPage;
