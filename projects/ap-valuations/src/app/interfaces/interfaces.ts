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

export interface PlateTotalChar {
    value: number;
    type: string;
    percentage: number;
  }

export interface PlateTotalNumbers {
    value: number;
    type: string;
    percentage: number;
  }

export interface PlateTotalLetters {
    value: number;
    type: string;
    percentage: number;
  }

export interface PlateLetterModifications {
    value: number;
    type: string;
    percentage: number;
    hint: string;
  }

export interface PlateNumberModifications {
    value: number;
    type: string;
    percentage: number;
    hint: string;
  }

export class SuffixNumberPlates {
    letter: string;
    value: number;
    from: string;
    to: string;
    year: number;
  }

export class PrefixNumberPlates {
    letter: string;
    value: number;
    from: string;
    to: string;
    year: number;
  }

export class CurrentStyleNumberPlates {
    letter: string;
    value: number;
    from: string;
    to: string;
    year: number;
  }
