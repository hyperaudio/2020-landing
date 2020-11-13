import fluidify from '@src/utils/fluidify';

const sizes = {
  100: ['12px', '13px', '1.6em'],
  200: ['13px', '15px', '1.6em'],
  300: ['14px', '16px', '1.6em'],
  400: ['15px', '20px', '1.6em'],
  500: ['18px', '30px', '1.4em'],
  600: ['21px', '40px', '1.4em'],
  700: ['24px', '50px', '1.3em'],
  800: ['27px', '60px', '1.2em'],
  900: ['30px', '110px', '1.1em'],
};

export default function setType(size) {
  const range = { min: sizes[size][0], max: sizes[size][1] };
  return { ...fluidify('fontSize', range), [`lineHeight`]: sizes[size][2] };
}
