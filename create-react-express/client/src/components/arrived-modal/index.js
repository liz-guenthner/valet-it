import React from 'react';
import './style.css';

class ArrivedModal extends React.Component {
    
    state = {
        open: true
      }
      toggleImage = (event) => {
        event.preventDefault();
        this.setState(state => ({ open: !state.open }))
      }
    
      getImageSrc = () => this.state.open ? 'starOpen' : 'starYellow'

    render() {
        const imagePath = {
            starOpen: "../images/star.png",
            starYellow: "../images/star-yellow.png"
        }
        
        const imageSrc= this.getImageSrc();

        return (

        <div className="arrived-modal">
            <p>Your car<br/>has arrived!</p>
            <p className="thank-you">Thank you for your business!</p>
            <p className="how">How did we do?</p>
            <div className="star-container">
                <div className="star">
                    <img src={imagePath[imageSrc]} onClick={this.toggleImage} alt="star-one"></img>
                </div>
                <div className="star">
                    <img src={imagePath[imageSrc]} onClick={this.toggleImage} alt="star-two"></img>
                </div>
                <div className="star">
                    <img src={imagePath[imageSrc]} onClick={this.toggleImage} alt="star-three"></img>
                </div>
                <div className="star">
                    <img src={imagePath[imageSrc]} onClick={this.toggleImage} alt="star-four"></img>
                </div>
                <div className="star">
                    <img src={imagePath[imageSrc]} onClick={this.toggleImage} alt="star-five"></img>
                </div>
            </div>
        </div>

      );
    }
  }

export default ArrivedModal;