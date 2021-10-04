import moment, { Moment } from 'moment';

const getRandomInteger = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomDate = (start: Moment, end: Moment) => {
  const endTime = +moment(end);
  const startTime = +moment(start);

  if (startTime > endTime) {
    throw new Error('Start date is after end date');
  }

  const randomNumber = Math.floor(
    Math.random() * (endTime - startTime) + startTime,
  );

  return moment(randomNumber);
};

export const generateOccupiedTerms = (): Moment[] => {
  try {
    const dates: Moment[] = [];
    const start = moment().add(1, 'day');
    const end = moment().add(2, 'week');
  
    while(dates.length !== 15) {
      const randomDate = getRandomDate(start, end);
  
      const formattedDate = moment(randomDate).format('YYYY-MM-DD');
      if (![6,0].includes(randomDate.day())) {
        dates.push(moment(formattedDate))
      }
    }
  
    dates.forEach((date, index) => {
      const formattedDate = date.format('YYYY-MM-DD');
      if (date.day() % 2 === 0) {
        let hour = getRandomInteger(8, 13);
  
        if (hour === 11) {
          hour += 1;
        }
  
        dates[index] = moment(`${formattedDate} ${hour.toString().padStart(2, '0')}:15`);
      } else {
        let hour = getRandomInteger(13, 18);
        
        if (hour === 16) {
          hour += 1;
        }
  
        dates[index] = moment(`${formattedDate} ${hour.toString().padStart(2, '0')}:15`);
      }
    });
  
    return dates;
  } catch (e) {
    return [];
  }
};
