
// Import external modules
import React from 'react';
import { Navigation } from 'react-router';

import { sheetMusicPropType } from '../../utils/sheetMusicUtils';

// Export component
export default React.createClass({

  propTypes: {
    /**
     * Make sure a valid sheet music was inputted.
     */
    sheetMusic: sheetMusicPropType().isRequired,
  },

  contextTypes: {
    /**
     * The router context, which we need if we want to make link changes.
     */
    router: React.PropTypes.object,
  },

  mixins: [Navigation],

  /**
   * The reason we are doing this is because sheet music thumbnails can be part of
   * carousels, and therefore there needs to be a way to check if a user is dragging
   * on this component versus clicking it.
   */
  componentDidMount() {
    let link = this.refs.link.getDOMNode();
    let currentMousePointX = null;
    let currentMousePointY = null;

    // Disable click events for link
    link.addEventListener('click', event => event.preventDefault());

    // Track whether there's a difference between X and Y coordinates when clicking
    link.addEventListener('mousedown', event => {
      currentMousePointX = event.clientX;
      currentMousePointY = event.clientY;
    });

    // If it's the same (i.e the user did not drag) then make the route transition
    link.addEventListener('mouseup', event => {
      if (event.clientX === currentMousePointX &&
          event.clientY === currentMousePointY) {
        this.context.router.transitionTo(
          `/sheetmusic/${this.props.sheetMusic.id}/${this.props.sheetMusic.uniqueUrl}`
        );
      }
    });
  },

  render() {
    let href = `/sheetmusic/${this.props.sheetMusic.id}/${this.props.sheetMusic.uniqueUrl}`;

    let musicStyle = null;
    if (this.props.sheetMusic.musicStyle) {
      musicStyle = (
        <span>
          <strong className="sheet-music-thumbnail__description--bold">
            {this.props.sheetMusic.musicStyle}
          </strong>
          &nbsp;by&nbsp;
        </span>
      );
    }

    return (
      <a ref="link" href={href} className="sheet-music-thumbnail__link"
        title={`${this.props.sheetMusic.title} - ${this.props.sheetMusic.musicStyle}` +
          `by ${this.props.sheetMusic.composer}`}>
        <div className="sheet-music-thumbnail">
          <div className="sheet-music-thumbnail__thumbnail"
            style={{backgroundImage: `url(${this.props.sheetMusic.thumbnailUrl})`}} />
          <div className="sheet-music-thumbnail__title">
            {this.props.sheetMusic.title}
          </div>
          <div className="sheet-music-thumbnail__description">
            {musicStyle}
            <strong className="sheet-music-thumbnail__description--bold">
              {this.props.sheetMusic.composer}
            </strong>
          </div>
        </div>
      </a>
    );
  },

});