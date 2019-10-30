import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  plateTypes = [
    {value: 5000, type: 'Suffix'},
    {value: 2000, type: 'Prefix'},
    {value: 10000, type: 'Dateless'},
    {value: 500, type: 'Current'}
  ];

  plateFormatTypes = {
    current: false,
    prefix: false,
    suffix: false,
  };

  plateMeaning = [
    {value: 1000, type: 'English'},
    {value: 1500, type: 'Punjabi'},
    {value: 500, type: 'Hindi'},
    {value: 1500, type: 'Pakistani'},
    {value: 0, type: 'Other'},
  ];

  plateCharacterType = [
    {value: 10000, type: 'EXACT', percentage: 50},
    {value: -2000, type: 'MORE', percentage: 5},
    {value: 1000, type: 'LESS', percentage: 10}
  ];

  plateMatchOptions = [
    {
      value: 0,
      type: '1: Not sure',
      hint: 'Not sure if its a good match or not!',
      percentage: 0
    },
    {
      value: 100,
      type: '2: Not really',
      hint: 'a number or letter will need modifying to look like another number or letter',
      percentage: 10
    },
    {
      value: 2000,
      type: '4: Good match',
      hint: 'all numbers represent the correct character and are in the correct position',
      percentage: 20
    },
    {
      value: 4000,
      type: '5: Very good match',
      hint: 'numbers look like the actual letter eg 6=G, not 19=A',
      percentage: 25
    },
    {
      value: 6000,
      type: '5: Exact match',
      hint: 'two words with no modifications',
      percentage: 25
    },
    {
      value: 20000,
      type: '6: Perfect exact match',
      hint: 'single word with no modifications',
      percentage: 50
    },
  ];

  plateTotalChar = [
    {value: 20000, type: '2', percentage: 75},
    {value: 10000, type: '3', percentage: 50},
    {value: 5000, type: '4', percentage: 10},
    {value: 1000, type: '5', percentage: 5},
    {value: 800, type: '6', percentage: 3},
    {value: 500, type: '7', percentage: 1},
  ];

  plateTotalNumbers = [
    {value: 5000, type: '1', percentage: 50},
    {value: 1000, type: '2', percentage: 10},
    {value: 500, type: '3', percentage: 1},
  ];

  plateTotalLetters = [
    {value: 10000, type: '1', percentage: 50},
    {value: 5000, type: '2', percentage: 10},
    {value: 2000, type: '3', percentage: 1},
    {value: 500, type: '4', percentage: 1},
    {value: 100, type: '5', percentage: 1},
  ];

  plateLetterModifications = [
    {value: -4000, type: 'Yes', percentage: -50, hint: 'Need to add'},
    {value: 1000, type: 'No', percentage: 10, hint: 'Need to add'},
  ];

  plateNumberModifications = [
    {value: -2000, type: 'Yes', percentage: -50, hint: 'Need to add'},
    {value: 1000, type: 'No', percentage: 10, hint: 'Need to add'},
  ];

  suffixNumberPlates = [
    { letter: 'A', value: 1, from: '1 Feb 1963', to: '31 July 1963', year: 1963 },
    { letter: 'B', value: 1, from: '1 Feb 1964', to: '31 July 1964', year: 1964 },
    { letter: 'C', value: 1, from: '1 Feb 1965', to: '31 July 1965', year: 1965 },
    { letter: 'D', value: 1, from: '1 Feb 1966', to: '31 July 1966', year: 1966 },
    { letter: 'E', value: 1, from: '1 Jan 1967', to: '31 July 1967', year: 1967 },
    { letter: 'F', value: 1, from: '1 Feb 1968', to: '31 July 1968', year: 1968 },
    { letter: 'G', value: 1, from: '1 Feb 1968', to: '31 July 1969', year: 1969 },
    { letter: 'H', value: 1, from: '1 Feb 1969', to: '31 July 1970', year: 1970 },
    { letter: 'J', value: 1, from: '1 Feb 1970', to: '31 July 1971', year: 1971 },
    { letter: 'K', value: 1, from: '1 Feb 1971', to: '31 July 1972', year: 1972 },
    { letter: 'L', value: 1, from: '1 Feb 1972', to: '31 July 1973', year: 1973 },
    { letter: 'M', value: 1, from: '1 Feb 1973', to: '31 July 1974', year: 1974 },
    { letter: 'N', value: 1, from: '1 Feb 1974', to: '31 July 1975', year: 1975 },
    { letter: 'P', value: 1, from: '1 Feb 1975', to: '31 July 1976', year: 1976 },
    { letter: 'R', value: 1, from: '1 Feb 1976', to: '31 July 1977', year: 1977 },
    { letter: 'S', value: 1, from: '1 Feb 1977', to: '31 July 1978', year: 1978 },
    { letter: 'T', value: 1, from: '1 Feb 1978', to: '31 July 1979', year: 1979 },
    { letter: 'V', value: 1, from: '1 Feb 1979', to: '31 July 1980', year: 1980 },
    { letter: 'W', value: 1, from: '1 Feb 1980', to: '31 July 1981', year: 1981 },
    { letter: 'X', value: 1, from: '1 Aug 1981', to: '31 July 1982', year: 1982 },
    { letter: 'Y', value: 1, from: '1 Aug 1982', to: '31 July 1983', year: 1983 },
  ];

  prefixNumberPlates = [
    { letter: 'A', value: 1, from: '1 Aug 1983', to: '31 July 1984', year: 1983 },
    { letter: 'B', value: 1, from: '1 Aug 1984', to: '31 July 1985', year: 1984 },
    { letter: 'C', value: 1, from: '1 Aug 1985', to: '31 July 1986', year: 1985 },
    { letter: 'D', value: 1, from: '1 Aug 1986', to: '31 July 1987', year: 1986 },
    { letter: 'E', value: 1, from: '1 Aug 1987', to: '31 July 1988', year: 1987 },
    { letter: 'F', value: 1, from: '1 Aug 1988', to: '31 July 1989', year: 1988 },
    { letter: 'G', value: 1, from: '1 Aug 1989', to: '31 July 1990', year: 1989 },
    { letter: 'H', value: 1, from: '1 Aug 1990', to: '31 July 1991', year: 1990 },
    { letter: 'J', value: 1, from: '1 Aug 1991', to: '31 July 1992', year: 1991 },
    { letter: 'K', value: 1, from: '1 Aug 1992', to: '31 July 1993', year: 1992 },
    { letter: 'L', value: 1, from: '1 Aug 1993', to: '31 July 1994', year: 1993 },
    { letter: 'M', value: 1, from: '1 Aug 1994', to: '31 July 1995', year: 1994 },
    { letter: 'N', value: 1, from: '1 Aug 1995', to: '31 July 1996', year: 1995 },
    { letter: 'P', value: 1, from: '1 Aug 1996', to: '31 July 1997', year: 1996 },
    { letter: 'R', value: 1, from: '1 Aug 1997', to: '31 July 1998', year: 1997 },
    { letter: 'S', value: 1, from: '1 Aug 1998', to: '28 Feb 1999', year: 1999 },
    { letter: 'T', value: 1, from: '1 March 1999', to: '31 July 2000', year: 1999 },
    { letter: 'V', value: 1, from: '1 Aug 2000', to: '28 Feb 2001', year: 1999 },
    { letter: 'W', value: 1, from: '1 March 2001', to: '31 July 2002', year: 2000 },
    { letter: 'X', value: 1, from: '1 Aug 2002', to: '28 Feb 2003', year: 2000 },
    { letter: 'Y', value: 1, from: '1 March 2003', to: '31 July 2004', year: 2001 },
  ];

  currentStyleNumberPlates = [
    { number: '01', value: 1, from: 'reserved', to: 'reserved', year: '0' },
    { number: '51', value: 1, from: 'September 2001', to: 'March 2002', year: '2001/02' },
    { number: '02', value: 1, from: 'March 2002', to: 'Setember 2002', year: '2002' },
    { number: '52', value: 1, from: 'September 2002', to: 'March 2003', year: '2002/03' },
    { number: '03', value: 1, from: 'March 2003', to: 'September 2003', year: '2003' },
    { number: '53', value: 1, from: 'September 2003', to: 'March 2004', year: '2003/04' },
    { number: '04', value: 1, from: 'March 2004', to: 'September 2004', year: '2004' },
    { number: '54', value: 1, from: 'September 2004', to: 'March 2005', year: '2004/05' },
    { number: '05', value: 1, from: 'March 2005', to: 'September 2005', year: '2005' },
    { number: '55', value: 1, from: 'September 2005', to: 'March 2006', year: '2005/06' },
    { number: '06', value: 1, from: 'March 2006', to: 'September 2006', year: '2006' },
    { number: '56', value: 1, from: 'September 2006', to: 'March 2007', year: '2006/07' },
    { number: '07', value: 1, from: 'March 2007', to: 'September 2007', year: '2007' },
    { number: '57', value: 1, from: 'September 2007', to: 'March 2008', year: '2007/08' },
    { number: '08', value: 1, from: 'March 2008', to: 'September 2008', year: '2008' },
    { number: '58', value: 1, from: 'September 2008', to: 'March 2009', year: '2008/09' },
    { number: '09', value: 1, from: 'March 2009', to: 'September 2009', year: '2009' },
    { number: '59', value: 1, from: 'September 2009', to: 'March 2010', year: '2009/10' },
    { number: '10', value: 1, from: 'March 2010', to: 'September 2010', year: '2010' },
    { number: '60', value: 1, from: 'September 2010', to: 'March 2011', year: '2010/11' },
    { number: '11', value: 1, from: 'March 2011', to: 'September 2011', year: '2011' },
    { number: '61', value: 1, from: 'September 2011', to: 'March 2012', year: '2011/12' },
    { number: '12', value: 1, from: 'March 2012', to: 'September 2012', year: '2012' },
    { number: '62', value: 1, from: 'September 2012', to: 'March 2013', year: '2012/13' },
    { number: '13', value: 1, from: 'March 2013', to: 'September 2013', year: '2013' },
    { number: '63', value: 1, from: 'September 2013', to: 'March 2014', year: '2013/14' },
    { number: '14', value: 1, from: 'March 2014', to: 'September 2014', year: '2014' },
    { number: '64', value: 1, from: 'September 2014', to: 'March 2015', year: '2014/15' },
    { number: '15', value: 1, from: 'March 2015', to: 'September 2015', year: '2015' },
    { number: '65', value: 1, from: 'September 2015', to: 'March 2016', year: '2015/16' },
    { number: '16', value: 1, from: 'March 2016', to: 'September 2016', year: '2016' },
    { number: '66', value: 1, from: 'September 2016', to: 'March 2017', year: '2016/17' },
    { number: '17', value: 1, from: 'March 2017', to: 'September 2017', year: '2017' },
    { number: '67', value: 1, from: 'September 2017', to: 'March 2018', year: '2017/18' },
    { number: '18', value: 1, from: 'March 2018', to: 'September 2018', year: '2018' },
    { number: '68', value: 1, from: 'September 2018', to: 'March 2019', year: '2018/19' },
    { number: '19', value: 1, from: 'March 2019', to: 'September 2019', year: '2019' },
    { number: '69', value: 1, from: 'September 2019', to: 'March 2020', year: '2019/20' },
    { number: '20', value: 1, from: 'March 2020', to: 'September 2020', year: '2020' },
    { number: '70', value: 1, from: 'September 2020', to: 'March 2021', year: '2020/21' },
    { number: '21', value: 1, from: 'March 2021', to: 'September 2021', year: '2021' },
    { number: '71', value: 1, from: 'September 2021', to: 'March 2022', year: '2021/22' },
  ];
}
