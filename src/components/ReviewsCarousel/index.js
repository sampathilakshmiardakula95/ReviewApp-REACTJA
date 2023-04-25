// Write your code here
import {Component} from 'react'
import './index.css'

const LEFT_ARROW_URL =
  'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'
const RIGHT_ARROW_URL =
  'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'

class ReviewsCarousel extends Component {
  state = {reviewIndex: 0}

  onClickLeftArrow = () => {
    const {reviewIndex} = this.state
    const newIndex = reviewIndex > 0 ? reviewIndex - 1 : reviewIndex
    this.setState({reviewIndex: newIndex})
  }

  onClickRightArrow = () => {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props
    const newIndex =
      reviewIndex < reviewsList.length - 1 ? reviewIndex + 1 : reviewIndex
    this.setState({reviewIndex: newIndex})
  }

  render() {
    const {reviewsList} = this.props
    const {reviewIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      reviewIndex
    ]
    return (
      <div className="app-bg-container">
        <div className="app-container">
          <h1 className="app-heading">Reviews</h1>
          <div className="carousel-container">
            <button
              type="button"
              className="arrow-button"
              onClick={this.onClickLeftArrow}
              data-testid="leftArrow"
            >
              <img
                src={LEFT_ARROW_URL}
                alt="left arrow"
                className="arrow-image"
              />
            </button>
            <div className="review-container">
              <img src={imgUrl} alt={username} className="profile-image" />
              <p className="username">{username}</p>
              <p className="company-name">{companyName}</p>
              <p className="description">{description}</p>
            </div>
            <button
              type="button"
              className="arrow-button"
              onClick={this.onClickRightArrow}
              data-testid="rightArrow"
            >
              <img
                src={RIGHT_ARROW_URL}
                alt="right arrow"
                className="arrow-image"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
