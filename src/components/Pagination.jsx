import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../App.css';

export default function PaginationOutlined(props) {
  const {handleClickClearCards} = props;

  const textRef = React.useRef(null);

  const handleTextClick = () => {
    window.scrollTo({
      top: 430,
      behavior: 'smooth'
    });
  };

  return (
    <div className='Main-Pagination'>
    <Stack className='Pagination' spacing={2}>
      <Pagination className='pagination-content' ref={textRef} onClickCapture={handleTextClick} onClick={handleClickClearCards} count={2} variant="outlined" />
    </Stack>
    </div>
  );
}