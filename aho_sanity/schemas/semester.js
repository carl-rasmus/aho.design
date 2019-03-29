export default {
  name: 'semester',
  title: 'Semester',
  type: 'object',
  fields: [
    {
      name: 'semesterName',
      title: 'Semester Name',
      type: 'string'
    }
  ],
  preview: {
    select: {
      subtitle: 'semesterName',
      title: 'semester.name'
    }
  }
}
