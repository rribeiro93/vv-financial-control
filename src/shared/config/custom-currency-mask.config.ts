import { CurrencyMaskConfig } from 'ng2-currency-mask/src/currency-mask.config';

export const CustomCurrencyMaskCofig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.'
};
