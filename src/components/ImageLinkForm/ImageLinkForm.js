import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({changeOnInput , onButtonSubmit}) => {
  return (
    <div>
        <p className="white f4">
            {'FaceMe detects faces on images, try putting an image link below'}
        </p>
        <div className="center">
            <div className="shadow-5 pa3 w-40 pattern br2">
                <input type="text" placeholder="Image Link" className="w-70 f4" onChange={changeOnInput}/>
                <button className="w-30 grow black bg-light  br2 f4" onClick={onButtonSubmit}>Detect!</button>
            </div>
        </div>
    </div>
  
  );
};

export default ImageLinkForm;
