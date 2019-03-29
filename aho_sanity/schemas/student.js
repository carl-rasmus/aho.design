import icon from 'react-icons/lib/md/face'

export default {
  name: 'student',
  title: 'Student',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'website',
      title: 'Student website',
      type: 'url'
    }
  ],
  preview: {
    select: {title: 'name', media: 'image'}
  }
}
