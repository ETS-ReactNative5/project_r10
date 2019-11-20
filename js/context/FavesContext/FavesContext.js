import React, {Component} from 'react';
import {addFave, getAllFave, removeFav} from '../../config/models';
export const FavesContext = React.createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }
  componentDidMount() {
    this.getFavedSessionIds();
  }
  getFavedSessionIds = async () => {
    try {
      const favs = await getAllFave();
      const ids = faves.map(fave => fave[0]);
      this.setState({faveIds: ids});
    } catch (e) {
      console.log(e);
    }
  };

  addFaveSessionId = async sessionId => {
    try {
      const newfav = await addFave(sessionId);
      if (newfav) {
        this.setState({faveIds: [...this.state.faveIds, newfav.id]});
      }
      this.getFavedSessionIds();
    } catch (e) {
      console.log(e);
    }
  };

  removeFaveSessionId = async sessionId => {
    try {
      await removeFav(sessionId);
      this.getFavedSessionIds();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSessionId: this.addFaveSessionId,
          removeFaveSessionId: this.removeFaveSessionId,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export default FavesProvider;
