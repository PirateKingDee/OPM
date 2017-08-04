import React, {Component} from 'react';
import { Link } from 'react-router';
export default class FavoriteButton extends Component {


  render() {
    let { product_id, isLogin, isFavorited } = this.props;
    let addToFavorite = () => {
      if(!isLogin){
        console.log('need to login');
        return;
      }
      let favorite = {
        product_id: product_id,
      }
      Meteor.call('insertFavorite', favorite, function(error, result){
        if(result === 'success'){
          console.log('success');
        }
        else{
          console.log('error');
          return;
        }
      });
    };

    let removeFavorite = () => {
      if(!isLogin){
        console.log('need to login');
        return;
      }
      Meteor.call('removeFavorite', product_id, function(error, result){
        if(result === 'success'){
          console.log('success');
        }
        else{
          console.log('error');
          return;
        }
      });
    };
    return (
      <div className="row add_to_cart_btn">
        {typeof(isFavorited) != "undefined" ?
          <button onClick={removeFavorite} ref="favoriteBtn" className="btn btn-success">
            <img height="20px" width="20px" src="/images/luffy_icon.png" />
            Unfavorite
            <img height="20px" width="20px" src="/images/luffy_icon.png"/>
          </button>
        :
        <button onClick={addToFavorite} ref="favoriteBtn" className="btn btn-success">
          <img height="20px" width="20px" src="/images/luffy_icon.png" />
          Favorite
          <img height="20px" width="20px" src="/images/luffy_icon.png"/>
        </button>}


      </div>
    )
  }
}
