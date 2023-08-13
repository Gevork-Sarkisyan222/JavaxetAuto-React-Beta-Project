import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import '../App.css';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <ImageList
     className='media-top-jeeps-images'
      sx={{
        position:"relative",
        left:"30px",
        top:"216px",
        width: 500,
        height: 450,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://quto.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2020/10/21/20/4288200/acdee5e39f2be6ae9fa64fd93eab3efeee30caaf.jpg',
    title: 'УАЗ "Хантер"',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://quto.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2020/10/21/20/4288202/7bfc7578ebb4351cca740c78af9e58fce5add238.jpg',
    title: 'Suzuki Jimny',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://quto.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2020/10/21/20/4288203/6088695432702c089fb626565abab8028c27980c.jpg',
    title: 'Toyota Fortuner',
    author: '@helloimnik',
  },
  {
    img: 'https://quto.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2020/10/21/20/4288206/d65ecab25ac42f6c196387959af625a29d189e3d.jpg',
    title: 'Jeep Wrangler',
    author: '@nolanissac',
  },
  {
    img: 'https://quto.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2020/10/21/20/4288207/f93674f0095ac4150b85850793d05c54b3662bfd.jpg',
    title: 'Mercedes-Benz G-Class',
    author: '@hjrc33',
  },
  {
    img: 'https://quto.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2020/10/21/20/4288199/f86a4c107204ceaacf1cc8c0b27e7ce2dae4a34a.jpg',
    title: 'Chevrolet Niva',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://quto.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2020/10/21/20/4288198/45d54efe133c7c902aafe7c7727637a4460a1356.jpg',
    title: 'Lada Niva 4x4',
    author: '@tjdragotta',
  },
  {
    img: 'https://auto.ironhorse.ru/wp-content/uploads/2010/12/fj_cruiser-concept-550x320.jpg',
    title: 'Toyota: FJ Cruiser',
    author: '@katie_wasserman',
  },
  {
    img: 'https://auto.ironhorse.ru/wp-content/uploads/2002/09/Prado-90-5.jpg',
    title: 'Land Cruiser 90 Prado',
    author: '@silverdalex',
  },
  {
    img: 'https://auto.ironhorse.ru/wp-content/uploads/2014/08/Toyota-Land-Cruiser-70.jpg',
    title: 'Land Cruiser 70',
    author: '@shelleypauls',
  },
  {
    img: 'https://auto.ironhorse.ru/wp-content/uploads/2016/02/ranger-4-usa-tmb-550x300.jpg',
    title: 'Ford Ranger',
    author: '@peterlaster',
  },
  {
    img: 'https://s5.stc.all.kpcdn.net/expert/wp-content/uploads/2022/02/mitsubishi-pajero-sport.jpg',
    title: 'Mitsubishi Pajero Sport',
    author: '@southside_customs',
  },
];