const ImageItem = props => {
  const {imageDetails, onClickScore} = props
  const {thumbnailUrl, imageUrl} = imageDetails
  const onChangeScore = () => {
    onClickScore(imageUrl)
  }

  return (
    <li>
      <button className="list-image-button">
        <img
          src={thumbnailUrl}
          className="image-item-logo"
          alt="thumbnail"
          onClick={onChangeScore}
        />
      </button>
    </li>
  )
}
export default ImageItem
