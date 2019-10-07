import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatOptionSelectionChange} from '@angular/material';
import { utf8Encode } from '@angular/compiler/src/util';
import { Valuation } from '../classes/classes';
import {
  PlateType,
  PlateMeaning,
  PlateCharType,
  PlateMatchOptions,
  PlateTotalChar,
  PlateTotalNumbers,
  PlateTotalLetters,
  PlateLetterModifications,
  PlateNumberModifications,
  SuffixNumberPlates,
} from '../interfaces/interfaces';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  valuation: Valuation;

  s1q1FullName: string;
  s1q2Email: string;
  s2q1UserNumberPlate: string;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  eighthFormGroup: FormGroup;
  ninethcFormGroup: FormGroup;
  tenthFormGroup: FormGroup;

  plateTypes: PlateType[] = [
    {value: 5000, type: 'Suffix'},
    {value: 2000, type: 'Prefix'},
    {value: 10000, type: 'Dateless'},
    {value: 500, type: 'Current'}
  ];

  plateMeaning: PlateMeaning[] = [
    {value: 1000, type: 'English'},
    {value: 1500, type: 'Punjabi'},
    {value: 500, type: 'Hindi'},
    {value: 1500, type: 'Pakistani'},
    {value: 0, type: 'Other'},
  ];

  plateCharacterType: PlateCharType[] = [
    {value: 10000, type: 'EXACT', percentage: 50},
    {value: -2000, type: 'MORE', percentage: 5},
    {value: 1000, type: 'LESS', percentage: 10}
  ];

  plateMatchOptions: PlateMatchOptions[] = [
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

  plateTotalChar: PlateTotalChar[] = [
    {value: 20000, type: '2', percentage: 75},
    {value: 10000, type: '3', percentage: 50},
    {value: 5000, type: '4', percentage: 10},
    {value: 1000, type: '5', percentage: 5},
    {value: 800, type: '6', percentage: 3},
    {value: 500, type: '7', percentage: 1},
  ];

  plateTotalNumbers: PlateTotalNumbers[] = [
    {value: 5000, type: '1', percentage: 50},
    {value: 1000, type: '2', percentage: 10},
    {value: 500, type: '3', percentage: 1},
  ];

  plateTotalLetters: PlateTotalLetters[] = [
    {value: 10000, type: '1', percentage: 50},
    {value: 5000, type: '2', percentage: 10},
    {value: 2000, type: '3', percentage: 1},
    {value: 500, type: '4', percentage: 1},
    {value: 100, type: '5', percentage: 1},
  ];

  plateLetterModifications: PlateLetterModifications[] = [
    {value: -4000, type: 'Yes', percentage: -50, hint: 'Need to add'},
    {value: 1000, type: 'No', percentage: 10, hint: 'Need to add'},
  ];

  plateNumberModifications: PlateNumberModifications[] = [
    {value: -2000, type: 'Yes', percentage: -50, hint: 'Need to add'},
    {value: 1000, type: 'No', percentage: 10, hint: 'Need to add'},
  ];

  suffixNumberPlates: SuffixNumberPlates[] = [
    { letter: 'A', value: 1, from: '1 Feb 1963', to: '31 Dec 1963', year: 1963 },
    { letter: 'B', value: 1, from: '1 Feb 1964', to: '31 Dec 1964', year: 1964 },
    { letter: 'C', value: 1, from: '1 Feb 1965', to: '31 Dec 1965', year: 1965 },
    { letter: 'D', value: 1, from: '1 Feb 1966', to: '31 Dec 1966', year: 1966 },
    { letter: 'E', value: 1, from: '1 Feb 1967', to: '31 Dec 1967', year: 1967 },
    { letter: 'F', value: 1, from: '1 Feb 1968', to: '31 Dec 1968', year: 1968 },
    { letter: 'G', value: 1, from: '1 Feb 1968', to: '31 Dec 1969', year: 1969 },
    { letter: 'H', value: 1, from: '1 Feb 1969', to: '31 Dec 1970', year: 1970 },
    { letter: 'J', value: 1, from: '1 Feb 1970', to: '31 Dec 1971', year: 1971 },
    { letter: 'K', value: 1, from: '1 Feb 1971', to: '31 Dec 1972', year: 1972 },
    { letter: 'L', value: 1, from: '1 Feb 1972', to: '31 Dec 1973', year: 1973 },
    { letter: 'M', value: 1, from: '1 Feb 1973', to: '31 Dec 1974', year: 1974 },
    { letter: 'N', value: 1, from: '1 Feb 1974', to: '31 Dec 1975', year: 1975 },
    { letter: 'P', value: 1, from: '1 Feb 1975', to: '31 Dec 1976', year: 1976 },
    { letter: 'R', value: 1, from: '1 Feb 1976', to: '31 Dec 1977', year: 1977 },
    { letter: 'S', value: 1, from: '1 Feb 1977', to: '31 Dec 1978', year: 1978 },
    { letter: 'T', value: 1, from: '1 Feb 1978', to: '31 Dec 1979', year: 1979 },
    { letter: 'V', value: 1, from: '1 Feb 1979', to: '31 Dec 1980', year: 1980 },
    { letter: 'W', value: 1, from: '1 Feb 1980', to: '31 Dec 1981', year: 1981 },
    { letter: 'X', value: 1, from: '1 Aug 1981', to: '31 July 1982', year: 1982 },
    { letter: 'Y', value: 1, from: '1 Aug 1982', to: '31 July 1983', year: 1983 },
  ];

  duplicateSequentialLetters = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.valuation = new Valuation();
    // Fill out your name and email
    this.firstFormGroup = this.formBuilder.group({
      // Fullname
      s1q1: ['', Validators.required],
      // Email
      s1q2: ['', Validators.required]
    });
    // Enter your number plate
    this.secondFormGroup = this.formBuilder.group({
      s2q1: ['', Validators.required]
    });
    // Plate type
    this.thirdFormGroup = this.formBuilder.group({
      s3q1: ['', Validators.required]
    });
    // Plate meaning
    this.fourthFormGroup = this.formBuilder.group({
      s4q1: ['', Validators.required],
      s4q2: ['', Validators.required],
      s4q3: ['', Validators.required],
      s4q4: ['', Validators.required]
    });
    // Plate matching
    this.fifthFormGroup = this.formBuilder.group({
      s5q1: ['', Validators.required]
    });
    // Plate characters
    this.sixthFormGroup = this.formBuilder.group({
      s6q1: ['', Validators.required],
      s6q2: ['', Validators.required],
      s6q3: ['', Validators.required]
    });
    // Modifications
    this.seventhFormGroup = this.formBuilder.group({
      s7q1: ['', Validators.required],
      s7q2: ['', Validators.required]
    });
    // Issued year
    this.eighthFormGroup = this.formBuilder.group({
      s8q1: ['', Validators.required],
    });
  }

  plateTypesCalc(event: MatOptionSelectionChange, value: number) {
    if (event.source.selected) {
      this.valuation.plateTypeValue = value;
      this.calcValuationTotal();
    }
  }

  plateMeaningCalc(event: MatOptionSelectionChange, value: number) {
    if (event.source.selected) {
      this.valuation.plateMeaningValue = value;
      this.calcValuationTotal();
    }
  }

  plateLengthCalc(event: MatOptionSelectionChange, value: number) {
    if (event.source.selected) {
      this.valuation.plateTotalCharValue = value;
      this.calcValuationTotal();
    }
  }

  plateDupSeqLetters() {
    if (this.duplicateSequentialLetters) {
      this.valuation.plateDuplicateValue = -3000;
    } else {
      this.valuation.plateDuplicateValue = 0;
    }
    this.calcValuationTotal();
  }

  plateMatchCalc(value: number) {
    this.valuation.plateMatchValue = value;
    this.calcValuationTotal();
  }

  plateTotalCharCalc(event: MatOptionSelectionChange, value: number) {
    if (event.source.selected) {
      this.valuation.plateTotalCharValue = value;
      this.calcValuationTotal();
    }
  }

  plateTotalNumbersCalc(event: MatOptionSelectionChange, value: number) {
    if (event.source.selected) {
      this.valuation.plateTotalNumbersValue = value;
      this.calcValuationTotal();
    }
  }

  plateTotalLettersCalc(event: MatOptionSelectionChange, value: number) {
    if (event.source.selected) {
      this.valuation.plateTotalLettersValue = value;
      this.calcValuationTotal();
    }
  }

  letterModCalc(value: number) {
    this.valuation.plateMod1Value = value;
    this.calcValuationTotal();
  }

  numberModCalc(value: number) {
    this.valuation.plateMod2Value = value;
    this.calcValuationTotal();
  }

  calcValuationTotal() {
    console.log('valuation', this.valuation);
    const valArray = [
      this.valuation.plateTypeValue,
      this.valuation.plateMeaningValue,
      this.valuation.plateCharacterValue,
      this.valuation.plateDuplicateValue,
      this.valuation.plateMatchValue,
      this.valuation.plateTotalCharValue,
      this.valuation.plateTotalNumbersValue,
      this.valuation.plateTotalLettersValue,
      this.valuation.plateMod1Value,
      this.valuation.plateMod2Value,
      this.valuation.plateYearValue
    ];
    this.valuation.total = valArray.reduce((result, current) => result + current);
  }

}
