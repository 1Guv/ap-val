import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatOptionSelectionChange} from '@angular/material';
import { utf8Encode } from '@angular/compiler/src/util';

export interface PlateType {
  value: number;
  type: string;
}

export interface PlateMeaning {
  value: number;
  type: string;
}

export interface PlateCharType {
  value: number;
  type: string;
  percentage: number;
}

export interface PlateMatchOptions {
  value: number;
  type: string;
  hint: string;
  percentage: number;
}

export class Valuation {
  plateTypeValue: number;
  plateMeaningValue: number;
  plateCharacterValue: number;
  plateDuplicateValue: number;
  plateMatchValue: number;
  plateTotalCharValue: number;
  plateTotalNumbersValue: number;
  plateTotalLettersValue: number;
  plateMod1Value: number;
  plateMod2Value: number;
  plateYearValue: number;
  total: number;
    constructor() {
          this.plateTypeValue = 0;
          this.plateMeaningValue = 0;
          this.plateCharacterValue = 0;
          this.plateDuplicateValue = 0;
          this.plateMatchValue = 0;
          this.plateTotalCharValue = 0;
          this.plateTotalNumbersValue = 0;
          this.plateTotalLettersValue = 0;
          this.plateMod1Value = 0;
          this.plateMod2Value = 0;
          this.plateYearValue = 0;
          this.total = 0;
      }
    }

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  valuationTotal = 0;
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
      type: '4: Good Match',
      hint: 'all numbers represent the correct character and are in the correct position',
      percentage: 20
    },
    {
      value: 4000,
      type: '5: Exact Match',
      hint: 'two words with no modifications',
      percentage: 25
    },
    {
      value: 20000,
      type: '6: Perfect Exact Match',
      hint: 'single word with no modifications',
      percentage: 50
    },
  ];

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
