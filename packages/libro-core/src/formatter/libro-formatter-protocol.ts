import type { MultilineString } from '@difizen/libro-common';
import { Syringe } from '@difizen/mana-app';

export const FormatterContribution = Syringe.defineToken('FormatterContribution');

export interface FormatterContribution<T> {
  formatter: string;
  formatterOptions?: object;
  canHandle: (libroFormatter: string, options?: object) => number;
  encode: (source: T) => DefaultEncodedFormatter;
  decode: (formatterValue: DefaultEncodedFormatter) => T;
  validate: (source: T) => source is T;
}

export const FormatterTransContribution = Syringe.defineToken(
  'FormatterTransContribution',
);

export interface FormatterTransContribution<T, U> {
  origin?: string;
  target?: string;
  priority: number;
  decodedValueTrans: (source: T) => U;
}

export interface DefaultEncodedFormatter {
  source: MultilineString;
  metadata: {
    libroFormatter: string;
    [key: string]: any;
  };
  [key: string]: any;
}

export interface DefaultDecodedFormatter {
  value: string;
  [key: string]: any;
}

export const DefaultDecodedFormatter = {
  is: (arg: Record<any, any> | undefined): arg is DefaultDecodedFormatter => {
    return (
      !!arg &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      'value' in arg &&
      typeof (arg as any).value === 'string'
    );
  },
};

export const DefaultEncodedFormatter = {
  is: (arg: Record<any, any> | undefined): arg is DefaultEncodedFormatter => {
    return (
      !!arg &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      'source' in arg &&
      'metadata' in arg &&
      'libroFormatter' in arg['metadata'] &&
      typeof (arg as any).metadata.libroFormatter === 'string' &&
      typeof (arg as any).metadata === 'object'
    );
  },
};
