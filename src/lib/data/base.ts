const firstName = 'Jinho';
const lastName = 'Kim';
const suffix = 'DevOps Engineer';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
