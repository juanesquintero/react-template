import moment from 'moment';

const formatCreationDate = (date: Date | string) => {
	return moment(date).format('DD.MM.YYYY');
};

export default formatCreationDate;
