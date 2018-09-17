import React from 'react'

const Slide = ({image}) => {
  console.log(image)

  const styles = {
    backgroundImage: `url(./media/${image}.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'

  }

  // meant to use div with backgroud image - change to work. Consider having a single input that changes on click - will work better

  return <img src={`media/${image}`} className="slide" style={styles} />
}

export default Slide
