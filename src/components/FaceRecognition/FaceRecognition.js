import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl , box}) => {
    return (
        <div className="center mt2">
            <div className="relative mt2">                   
                <img id="image" src={imageUrl} alt="" width="500px" height="auto"/>
                <div className="bounding-box" style={{top: box.topRow , left: box.leftCol , right: box.rightCol, bottom: box.bottomRow}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition 

//Have to wrap iamge and box in a div with position absolute otherwise box will not be on the
//image, because the bounding box is position absolute,it will position itself relative to its parent elment
//the parent elemnt has to be positioned relative or absolute so it can be positioned inside the parent elemnt