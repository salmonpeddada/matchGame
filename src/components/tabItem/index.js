const TabItem = props => {
  const {tabDetails, onClickCategory, category} = props
  const {tabId, displayText} = tabDetails
  const clsName = tabId === category && 'tab-item'

  const onCategory = () => {
    onClickCategory(tabId)
  }

  return (
    <li>
      <button
        className={`tab-category list-tab-button ${clsName}`}
        onClick={onCategory}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
