export default function getListStudentIds(value) {
  if (!(Array.isArray(value))) {
    return [];
  }
  const reformattedArray = value.map(({ id }) => (id));
  return reformattedArray;
}
