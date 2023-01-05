import './index.css'

const BlogItem = props => {
  const {details} = props

  return (
    <div className="list-container">
      <div className="list-header">
        <h3>{details.title}</h3>
        <p className="published-date">{details.publishedDate}</p>
      </div>
      <p className="description">{details.description}</p>
    </div>
  )
}

export default BlogItem
