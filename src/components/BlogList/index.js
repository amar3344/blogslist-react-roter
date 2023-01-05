import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <li className="each-blog-container">
      {blogsList.map(item => (
        <BlogItem key={item.id} details={item} />
      ))}
    </li>
  )
}

export default BlogList
