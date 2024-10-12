export default function createEmployeesObject(departmentName, employes) {
  const department = {};
  department[departmentName] = employes;
  return department;
}
