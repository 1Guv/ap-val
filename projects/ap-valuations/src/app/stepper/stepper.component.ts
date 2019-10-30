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
  PrefixNumberPlates,
  CurrentStyleNumberPlates,
} from '../interfaces/interfaces';
import { FormDataService } from '../services/form-data.service';


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
  s2q2PriceBought: number;
  s2q3DateBought: Date;
  startDate = new Date(2015, 1, 22);

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

  plateTypes: PlateType[];
  plateFormatTypes;
  plateMeaning: PlateMeaning[];
  plateCharacterType: PlateCharType[];
  plateMatchOptions: PlateMatchOptions[];
  plateTotalChar: PlateTotalChar[];
  plateTotalNumbers: PlateTotalNumbers[];
  plateTotalLetters: PlateTotalLetters[];
  plateLetterModifications: PlateLetterModifications[];
  plateNumberModifications: PlateNumberModifications[];
  suffixNumberPlates: SuffixNumberPlates[];
  prefixNumberPlates: PrefixNumberPlates[];
  currentStyleNumberPlates: CurrentStyleNumberPlates[];

  duplicateSequentialLetters = false;

  constructor(
    private formBuilder: FormBuilder,
    private formDataService: FormDataService
  ) {}

  ngOnInit() {
    this.plateTypes = this.formDataService.plateTypes;
    this.plateFormatTypes = this.formDataService.plateFormatTypes;
    this.plateMeaning = this.formDataService.plateMeaning;
    this.plateCharacterType = this.formDataService.plateCharacterType;
    this.plateMatchOptions = this.formDataService.plateMatchOptions;
    this.plateTotalChar = this.formDataService.plateTotalChar;
    this.plateTotalNumbers = this.formDataService.plateTotalNumbers;
    this.plateTotalLetters = this.formDataService.plateTotalLetters;
    this.plateLetterModifications = this.formDataService.plateLetterModifications;
    this.plateNumberModifications = this.formDataService.plateNumberModifications;
    this.suffixNumberPlates = this.formDataService.suffixNumberPlates;
    this.prefixNumberPlates = this.formDataService.prefixNumberPlates;
    this.currentStyleNumberPlates = this.formDataService.currentStyleNumberPlates;

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
      s2q1: ['', Validators.required],
      s2q2: ['', Validators.required],
      s2q3: ['', Validators.required]
    });
    // Plate type
    this.thirdFormGroup = this.formBuilder.group({
      s3q1: ['', Validators.required],
      s3q2: ['', Validators.required]
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

  plateTypesCalc(event: MatOptionSelectionChange, value: number, type: string) {
    if (event.source.selected) {
      this.valuation.plateTypeValue = value;
      this.calcValuationTotal();
    }

    if (type === 'Current') {
      this.plateFormatTypes.current = true;
      this.plateFormatTypes.suffix = false;
      this.plateFormatTypes.prefix = false;
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

  currentStyleCalc(event: MatOptionSelectionChange, value: number, year: string) {
    if (event.source.selected) {
      this.valuation.plateYearValue = value;
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
