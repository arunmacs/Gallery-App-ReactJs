import './index.css'

const ThumbnailItem = props => {
  const {thumbnailData, onclickChangeImage, activeId} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailData

  const onclickSelectImage = () => {
    onclickChangeImage(id)
  }

  const changeClassName = activeId === id
  const isActive = changeClassName ? 'selected' : 'thumbnail'

  return (
    <li className={isActive}>
      <button type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onclickSelectImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
