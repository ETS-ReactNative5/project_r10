import React, {Component} from 'react';

import About from './About';

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   componentDidMount() {
  // fetch('');
  //   .then(res => res.json())
  //   .then(data => this.setState({data}))
  //   .catch(err => console.log(err));
  //   }

  render() {
    // console.log(this.state.data);

    return <About />;
  }
}

export default AboutContainer;
