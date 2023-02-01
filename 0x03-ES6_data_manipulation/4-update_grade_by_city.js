function updateStudentGradeByCity(Students, city, newGrades) {
  const studentsInCity = Students.filter((student) => student.location === city);
  return studentsInCity.map((student) => {
    const filterGrades = newGrades.filter((grade) => grade.studentId === student.id);
    if (filterGrades.length > 0) {
      return {
        ...student,
        grade: filterGrades[0].grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
}

export default updateStudentGradeByCity;
