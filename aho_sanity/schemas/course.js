import icon from 'react-icons/lib/md/school'

export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  icon,
  fields: [
    {
      name: 'courseName',
      title: 'Course Name',
      type: 'string'
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      // subtitle: 'courseName',
      title: 'courseName'
    }
  }
}
