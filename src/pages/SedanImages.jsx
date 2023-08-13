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
      className="media-top-sedan-images"
      sx={{
        position:"absolute",
        left:"400px",
        top:"1830px",
        width: 500,
        height: 450,
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
    img: 'https://avatars.mds.yandex.net/get-verba/1030388/2a000001786ab6d740f53ca6259ae80885c7/cattouch',
    title: 'Toyota Camry',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://s3.stc.all.kpcdn.net/expert/wp-content/uploads/2022/02/skoda-superb.jpg',
    title: 'Skoda Superb',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://s10.stc.all.kpcdn.net/expert/wp-content/uploads/2022/02/volkswagen-polo-sedan.jpg',
    title: 'Volkswagen Polo Sedan',
    author: '@helloimnik',
  },
  {
    img: 'https://s3.stc.all.kpcdn.net/expert/wp-content/uploads/2022/02/1-7-1.jpg',
    title: 'Honda Accord',
    author: '@nolanissac',
  },
  {
    img: 'https://s2.stc.all.kpcdn.net/expert/wp-content/uploads/2022/02/kia-optima-1.jpg',
    title: 'Kia Optima',
    author: '@hjrc33',
  },
];