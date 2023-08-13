import React from 'react';
import { Link } from 'react-router-dom';
import CarRentalIcon from '@mui/icons-material/CarRental';
import BlogImages from './BlogImages';
import VideoBlogCards from './VideoBlogCards';
import SedanImages from './SedanImages';


function VideoBlog() {
   

   const cardsData = [
      {
        title: "Honda Accord",
        data: "март 26, 2023",
        image: "https://www.arabahabercisi.com/wp-content/uploads/2021/05/2021-Honda-Accord-fiyat-listesi-600x381.jpg",
        secondTitle: "Honda Accord рестайлинг, седан, 9 поколение, - технические характеристики и комплектации",
        firstTypography: `«Автомобиль года» в 1976 году по версии журнала Motor Fan.
          «Автомобиль года в классе до $5,000» 1977 года по версии журнала Road Test в США.`,
        secondTypography: `Honda Accord — среднеразмерный (до 1989 года — компактный) автомобиль, выпускающийся японским производителем Honda с 1976 года. С момента начала продаж в одних только Соединённых Штатах продано более 8 000 000 седанов, хэтчбэков, универсалов и купе[1]. На данный момент производится десятое поколение автомобиля.
          Аккорд — согласие и гармония между человеком, обществом и автомобилем.
          Соитиро Хонда
          Слово Accord имеет латинское происхождение и образовано из предлога ad «к, на» + cor (род. п. cordis) «сердце», то есть — «к сердцу».`,
      },
      {
        title: "Toyota Camry",
        data: "июль 6, 2023",
        image: "https://s16.stc.all.kpcdn.net/expert/wp-content/uploads/2022/02/unnamed-file-1-960x540-1.jpg",
        secondTitle: "Toyota Camry. Этот седан настоящий бестселлер. Не раз данный автомобиль был самым продаваемым в России, США и других странах",
        firstTypography: `Название «Camry» который имеет значение «корона». В России, наряду с другими автомобилями фирмы, модель пользуется стабильным покупательским спросом[3], в связи с чем в 2005 году начато строительство сборочного завода в посёлке Шушары[4], 21 декабря 2007 года завод выпустил первый автомобиль[5].`,
        secondTypography: "",
      },
      {
        title: "Mazda 3",
        data: "июнь 16, 2023",
        image: "https://s14.stc.all.kpcdn.net/expert/wp-content/uploads/2022/02/photo.jpg",
        secondTitle: "Последние инкарнации этой «Мазды» все больше своими контурами напоминают машину из будущего.",
        firstTypography: `Под капотом может быть бензиновый движок на 1.5 или 2.0 литра (в случае с последней моделью). Салон так и притягивает взгляд. Его хочется изучать и разглядывать. Вроде бы все в нем лишено правильных геометрических форм и наоборот преобладает некая ассиметрия. Но получилось здорово. Нарекания к ней есть по части цены: если соотносить ее комплектацию и стоимость с тем же сегментов у конкурентов, то окажется, что производители сэкономили, например, на доступе без ключа, камере заднего вида и других значимых нюансах.`,
        secondTypography: "",
      },
      {
        title: "Audi A4",
        data: "апрель 16, 2023",
        image: "https://www.topgear.com/sites/default/files/cars-car/image/2021/03/audiuk0002282120audi20a420saloon.jpg?w=1280&h=720",
        secondTitle: "Audi A4 Avant (Ауди А4 Авант) - универсал класса «D» с передним или полным приводом. Рестайлинговая версия пятого поколение модели была представлена в мае 2019 года.",
        firstTypography: `Автомобиль Audi A4 первого поколения выпускался с 1994 по 2001 годы. Четырехцилиндровые моторы 1.6 и 1.8 развивали мощность от 101 до 170 сил. Через два года после выпуска появились универсал и полноприводная версия А4 quattro, на вершине гаммы закрепилась версия S4 с «битурбошестёркой» 2.7 мощностью 265 л. с. Таких было продано боле 30 тысяч машин.`,
        secondTypography: "",
      },
    ];
    


  return (
    <div className='Video-Blog-Main'>
  <Link to="/">
     <img alt='back-icon' className='back-icon-vidos' src="https://react-sneakers-five.vercel.app/images/go-back-arrow.svg" />
  </Link>
       <h1 className='review-title'>Обзоры на машины и новости</h1>
     <div className='Videos-Cars-Review'>
        <h2 className='first-second-review-video-title'>Авто-обзор Mersedes-Benz S550 vs Bmw 540 <CarRentalIcon sx={{color:"grey"}} /></h2>
        <iframe className='first-review-video' width="560" height="315" src="https://www.youtube.com/embed/gdfJisiYCRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className='second-review-video' width="560" height="315" src="https://www.youtube.com/embed/RBWyZgaMHCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     </div>
     <div className='Images-Information-blog'>
        <h1 className='SUVs-top'>Топ 12 внедорожников</h1>
        <BlogImages />
     </div>
     <div className='left-content-videos'>
       <iframe className='left-first-video' width="560" height="315" src="https://www.youtube.com/embed/eE7UnwY7hhI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <iframe className='left-second-video' width="560" height="315" src="https://www.youtube.com/embed/xXsJ8vmMtWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     </div>
     <div className='cards-images'>
      {
         cardsData.map((data, index) => (
            <VideoBlogCards key={index} {...data} />
          ))
      }

     </div>
     <div className='Top-Sendans'>
        <h1 className='top-sedans-text'>Топ 5 седанов <span style={{color:"grey"}}>2023</span></h1>
        <SedanImages />
     </div>
     <h1 id='media-video-down-title' className='video-down-title'>Смотреть Видео</h1>
     <div className='Down-videos'>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/pQzj4XlnnhI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/SbzSwbw8eFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/-q7xtABwd94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/Z2neZroVlyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     </div>
      <article className='First-Car-Info-Conteiner'>
      <p className='first-car-info'>BMW E34 — третье поколение BMW пятой серии, выпускавшееся с 1987 года по 1995-й с кузовом седан и по 1996-й с кузовом универсал  Автомобиль был выдержан в   BMW, но в то же время содержал в себе современные технологии. Он был также оснащён автоматическим контролем устойчивости (ASC) или тяги (ASC + T). В октябре 1987 года BMW начали производство семейства Е34. По сравнению с Е28, кузов стал более обтекаемым, появились вертикальные указатели поворота спереди, противотуманные фары под бампером. Габариты по сравнению с предыдущей моделью пятой серии ощутимо выросли, а масса автомобиля была снижена. Дизайн: BMW E34 имеет классический и элегантный дизайн
         Двигатели: от 2.0 до 3.8 литра и предлагали различные уровни мощности, начиная от более экономичных версий до более спортивных M-моделей. Дизельные двигатели имели объем от 2.0 до 3.5 литра
      </p>
      </article>
      <article className='Second-Car-Info-Conteiner'>
      <p className='second-car-info'>
         AMG E63 S: AMG E63 S - это спортивная версия Mercedes-Benz E-Class, предлагающая высокую производительность и роскошный комфорт. Этот автомобиль оснащен 4,0-литровым битурбированным V8 двигателем, развивающим до 603 лошадиных сил. Он обладает отличными динамическими характеристиками и способен разгоняться до 100 км/ч за 3,4 секунды. AMG E63 S имеет специальную подвеску AMG, аэродинамические элементы и систему полного привода 4MATIC, обеспечивающую отличную управляемость.
         BMW M4: BMW M4 - это спортивное купе, предлагающее высокую производительность и динамичный стиль. Он оснащен 3,0-литровым турбированным шестицилиндровым двигателем, развивающим до 503 лошадиных сил в модификации Competition. M4 обладает быстрой и плавной разгонной динамикой, способной достичь 0-100 км/ч примерно за 3,9 сек
      </p>
      </article>
      <article className='Third-Car-Info-Conteiner'>
    <p className='third-car-info'>
         Opel Vectra B, выпускавшийся с 1995 по 2002 год, представляет собой семейство среднеразмерных автомобилей. Этот автомобиль предлагал комфортную и просторную салон, а также разнообразные двигатели, включая бензиновые и дизельные варианты. Бензиновые двигатели варьировались от 1.6 до 2.6 литра, а дизельные — от 1.7 до 2.0 литра. Вектра В обладала хорошей управляемостью и устойчивостью на дороге благодаря надежной подвеске. Она также была оснащена различными опциями, включая систему ABS, климат-контроль, электрические стеклоподъемники и центральный замок. Вектра В была популярной моделью в Европе благодаря своей надежности, комфорту и доступной стоимости владения. Opel Vectra B отличалась привлекательным дизайном с плавными линиями и элегантной силуэтом. Она предлагала просторный багажник и достаточно места для пассажиров
    </p>
      </article>
      <article className='Fourd-Car-Info-Conteiner'>
      <p className='Fourd-car-info'>
        Для прокачки автобуса можно использовать несколько методов. Во-первых, можно улучшить производительность, установив более мощный двигатель или произведя тюнинг существующего. Это может включать установку наддува, чип-тюнинга или улучшение системы выпуска. Во-вторых, можно обновить подвеску и тормозную систему для улучшения управляемости и безопасности. Установка спортивной подвески, амортизаторов и тормозных дисков может значительно повысить динамику автобуса. Также можно улучшить внешний вид автобуса, добавив аэродинамические обвесы, новую краску или декоративные элементы. Важно помнить, что любые изменения должны быть согласованы с законодательством и обеспечивать безопасность пассажиров и дорожное соблюдение. Консультация с профессионалами и специалистами в данной области также может быть полезной для успешной прокачки автобуса.
      </p>
      </article>

    </div>
  )
}

export default VideoBlog;