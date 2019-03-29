import icon from 'react-icons/lib/md/layers'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100
      }
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'blockContent'
    },
    {
      name: 'semester',
      title: 'Semester',
      type: 'reference',
      to: [{type: 'semester'}]
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime'
    },
    {
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'student'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'headerImage'
    }
  }
}
