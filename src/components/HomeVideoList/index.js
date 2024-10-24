import {Link} from 'react-router-dom'

const HomeVideoList = props => {
  const {homeVideoList} = props
  const {id, thumbnail, title, ChannelName, channelImage, published, views} =
    homeVideoList

  return (
    <li>
      <Link to={`/videos/${id}`}>
        <div>
          <img src={thumbnail} alt="video thumbnail" />
          <div>
            <img src={channelImage} alt="channel logo" />
            <p>{title}</p>
            <p>{ChannelName}</p>
            <div>
              <p>{views}</p>
              <p>{published}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default HomeVideoList
