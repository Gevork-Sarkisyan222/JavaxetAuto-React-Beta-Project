import React from 'react';
import Avatar from '@mui/joy/Avatar';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';

export default function RadioButton({ gender, setGender, formError }) {
  const genderArr = [
    { gender: 'мужской', genderImage: 'https://img.icons8.com/?size=512&id=12351&format=png' },
    { gender: 'женский', genderImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Venus_symbol_%28heavy_pink%29.svg/220px-Venus_symbol_%28heavy_pink%29.svg.png' }
  ];

  return (
    <FormControl required error={formError} sx={{ marginTop: '10px' }}>
      <FormLabel>Выберите ваш пол</FormLabel>
      <RadioGroup
        overlay
        name="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        defaultValue="мужской"
        orientation="horizontal"
        sx={{ gap: 2, height: '70px' }}
      >
        {genderArr.map((num) => (
          <Sheet
            component="label"
            key={num.gender}
            variant="outlined"
            sx={{
              p: 0.5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 'sm',
              borderRadius: 'md',
            }}
          >
            <Radio
              value={num.gender}
              variant="soft"
              sx={{
                mb: 2,
              }}
            />
            <Avatar sx={{ marginTop: '-12px', width: '30px', height: '30px' }} alt={`gender-image}`} src={num.genderImage} />
            <Typography level="body-sm" sx={{ mt: 1 }}>
              {num.gender}
            </Typography>
          </Sheet>
        ))}
      </RadioGroup>
    </FormControl>
  );
}
