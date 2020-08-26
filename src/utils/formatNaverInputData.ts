import moment from 'moment';
import { INaver } from '../services/api';
import { IFormValues } from '../components/NaverForm';

const formatNaverInputData = (data: INaver): IFormValues => {
  return {
    name: data.name,
    project: data.project,
    url: data.url,
    jobRole: data.job_role,
    birthdate: moment(data.birthdate).format('YYYY-MM-DD'),
    admissionDate: moment(data.admission_date).format('YYYY-MM-DD'),
  };
};

export default formatNaverInputData;
