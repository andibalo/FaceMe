import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import LoginForm from "./components/loginForm/loginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const clarifaiApp = new Clarifai.App({
  apiKey: "ec82b6a346b7475e811bc8b28a85a65b"
});

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {}
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Particles className="particles" params={particlesOptions} />
          <Navigation />

          <Switch>
            <Route exact path="/" component={LoginForm} />

            <Route exact path="/home">
              <ImageLinkForm
                changeOnInput={this.changeOnInput}
                onButtonSubmit={this.onSubmit}
              />

              <FaceRecognition
                imageUrl={this.state.imageUrl}
                box={this.state.box}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

  faceBoxArea = data => {
    const picCoordinates =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("image");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(picCoordinates);
    console.log(width, height);

    return {
      leftCol: picCoordinates.left_col * width,
      rightCol: width - picCoordinates.right_col * width,
      topRow: picCoordinates.top_row * height,
      bottomRow: height - picCoordinates.bottom_row * height
    };
  };

  drawFaceBox = coordinates => {
    this.setState({ box: coordinates });
  };

  changeOnInput = event => {
    this.setState({
      input: event.target.value
    });
  };

  onSubmit = () => {
    this.setState({
      imageUrl: this.state.input
    });

    clarifaiApp.models
      .predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
      .then(data => this.drawFaceBox(this.faceBoxArea(data)))
      .catch(err => console.log(err));
  };
}

export default App;
