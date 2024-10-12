export default function createReportObject(employeesList) {
  const allEmployes = {
    allEmployees: employeesList,
    getNumberOfDepartments: () => Object.keys(employeesList).length,
  };
  return allEmployes;
}
