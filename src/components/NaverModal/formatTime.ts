import moment from 'moment';

export const formatAdmissionDate = (date: string): string => {
  const currentDate = moment();

  const companyYears = currentDate.diff(date, 'years');
  const companyMonths = currentDate.diff(date, 'months') % 12;

  let years = '';

  if (companyYears === 0) {
    years = '';
  }

  if (companyYears === 1) {
    years = '1 ano';
  }

  if (companyYears > 1) {
    years = `${companyYears} anos`;
  }

  let months = '';

  if (companyMonths === 0) {
    months = '';
  }

  if (companyMonths > 0) {
    months = `${companyMonths} meses`;
  }

  if (years && months) {
    return `${years} e ${months}`;
  }

  if (!years && !months) {
    return 'Menos de um mês';
  }

  return years + months;
};

export const formatBirthdate = (date: string): string => {
  const currentDate = moment();
  const age = currentDate.diff(date, 'years');

  return `${age} anos`;
};
