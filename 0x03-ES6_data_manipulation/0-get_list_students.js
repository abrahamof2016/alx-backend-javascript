export default function getListStudents() {
  const studentList = [];
  const studentFirst = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };
  const studentSecond = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };
  const studentThird = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };
  studentList.push(studentFirst, studentSecond, studentThird);
  return studentList;
}
