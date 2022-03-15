import moment from 'moment';
import toast from 'react-hot-toast';

export const pxToRem = (px: number) => `${px / 16}rem`;

export const showMsg = (msg: string) => {
  toast.success(msg);
};
export const showErr = (msg: string) => {
  toast.error(msg);
};

export const limitDecimals = (number: number | undefined, decimal = 2) => {
  if (!number) return 0;
  if (Number.isInteger(number)) return numberWithCommas(number);
  return numberWithCommas(Number(number).toFixed(decimal));
};

export function numberWithCommas(x: number | string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatLocalDate(date: string, format?: string) {
  return moment
    .utc(date)
    .local()
    .format(format || 'Do MMM YYYY hh:mm a');
}
