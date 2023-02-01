const getStudentIdsSum = (students) => students.reduce((accum, currVal) => accum + currVal.id, 0);

export default getStudentIdsSum;
