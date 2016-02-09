'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('./../button');

var _button2 = _interopRequireDefault(_button);

/**
 * A Banner widget.
 *
 * == How to use a Banner in a component:
 *
 * In your file:
 *
 *   import Banner from 'carbon/lib/components/banner';
 *
 * To render the Banner:
 *
 *   <Banner
 *      title="This is a title"
 *      message="This is my message."
 *      buttonAction={ this.handleButtonClick } />
 *
 * Additionally you can pass optional props to the Banner component
 *
 *   as: Customizes the appearence of the banner changing the colour and icon
 *     info: default
 *     warning
 *     new
 *
 *   buttonText: allows you to customize the button text.
 *
 * @class Banner
 * @constructor
 */

var Banner = (function (_React$Component) {
  _inherits(Banner, _React$Component);

  function Banner() {
    _classCallCheck(this, Banner);

    _get(Object.getPrototypeOf(Banner.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Banner, [{
    key: 'render',

    /**
     * Renders the component.
     *
     * @method render
     */
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: this.mainClasses },
        _react2['default'].createElement(
          'div',
          { className: 'ui-banner__content' },
          _react2['default'].createElement('div', { className: 'ui-banner__icon', dangerouslySetInnerHTML: this.icon }),
          _react2['default'].createElement(
            'div',
            { className: 'ui-banner__info' },
            _react2['default'].createElement(
              'div',
              { className: 'ui-banner__title' },
              this.props.title
            ),
            _react2['default'].createElement(
              'div',
              { className: 'ui-banner__message' },
              this.props.message
            )
          ),
          _react2['default'].createElement(
            _button2['default'],
            { onClick: this.props.buttonAction, className: this.buttonClasses },
            this.props.buttonText
          )
        )
      );
    }

    /**
     * Returns the 'new' icon
     * TODO: Waiting on release of https://github.com/facebook/react/pull/5714
     *
     * @method newIcon
     * @return {Object} newIcon svg
     */
  }, {
    key: 'mainClasses',

    /**
     * Classes for the banner
     *
     * @method mainClasses
     * @return {String} Main className
     */
    get: function get() {
      var className = 'ui-banner ui-banner--' + this.props.as;

      if (this.props.className) {
        className += ' ' + this.props.className;
      }

      return className;
    }

    /**
     * Classes for the button action
     *
     * @method buttonClasses
     * @return {String} classNames for button
     */
  }, {
    key: 'buttonClasses',
    get: function get() {
      return 'ui-banner__action ui-banner__action--' + this.props.as;
    }

    /**
     * Returns the icon to display depending on type
     * TODO: Waiting on release of https://github.com/facebook/react/pull/5714
     *
     * @method icon
     * @return {Object} icon svg
     */
  }, {
    key: 'icon',
    get: function get() {
      return this[this.props.as + 'Icon'];
    }
  }, {
    key: 'newIcon',
    get: function get() {
      return {
        __html: '<svg class="ui-banner__new-icon" width="50px" height="40px" viewBox="0 0 50 40">' + '<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' + '<g class="ui-banner__new-icon__g" fill="#FFFFFF">' + '<path d="M12,20 L21,20 L21,33 L12,33 L12,20 Z M29,20 L38,20 L38,33 L29,33 L29,20 Z M22,12 L28,12 L28,33 L22,33 L22,12 Z M11,12 L21,12 L21,19 L11,19 L11,12 Z M29,12 L39,12 L39,19 L29,19 L29,12 Z M23,8 L27,8 L27,11 L23,11 L23,8 Z M14,5 C16.1114562,4.20820393 22,8 22,8 L22,11 L14,11 C14,11 11.8885438,5.79179607 14,5 Z M36.061575,5 C33.9501189,4.20820393 28.061575,8 28.061575,8 L28.061575,11 L36.061575,11 C36.061575,11 38.1730312,5.79179607 36.061575,5 Z" id="Icon-path">' + '</path>' + '</g>' + '</g>' + '</svg>'
      };
    }

    /**
     * Returns the 'warning' icon
     * TODO: Waiting on release of https://github.com/facebook/react/pull/5714
     *
     * @method warningIcon
     * @return {Object} warningIcon svg
     */
  }, {
    key: 'warningIcon',
    get: function get() {
      return {
        __html: '<svg class="ui-banner__warning-icon" width="50px" height="40px" viewBox="0 0 50 40" version="1.1" xmlns="http://www.w3.org/2000/svg">' + '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' + '<g class="ui-banner__warning-icon__g" fill="#FFFFFF">' + '<path d="M23.4139163,5.53773397 C24.2898861,4.1361822 25.7118106,4.13889694 26.5860837,5.53773397 L43.4139163,32.462266 C44.2898861,33.8638178 43.6576906,35 41.9934988,35 L8.0065012,35 C6.34605644,35 5.71181059,33.8611031 6.58608373,32.462266 L23.4139163,5.53773397 Z M23,12 L27,12 L27,24 L23,24 L23,12 Z M25,32 C26.6568542,32 28,30.6568542 28,29 C28,27.3431458 26.6568542,26 25,26 C23.3431458,26 22,27.3431458 22,29 C22,30.6568542 23.3431458,32 25,32 Z" id="Icon-path"></path>' + '</g>' + '</g>' + '</svg>'
      };
    }

    /**
     * Returns the 'info' icon
     * TODO: Waiting on release of https://github.com/facebook/react/pull/5714
     *
     * @method infoIcon
     * @return {Object} infoIcon svg
     */
  }, {
    key: 'infoIcon',
    get: function get() {
      return {
        __html: '<svg class="ui-banner__info-icon "width="50px" height="40px" viewBox="0 0 50 40">' + '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' + '<g class="ui-banner__info-icon__g" fill="#FFFFFF">' + '<path d="M35.2343942,10.801511 C34.4036528,9.97082285 34.4036528,8.61548951 35.2343942,7.78480133 L37.1582163,5.86110239 C37.3768325,5.64250024 37.2456628,5.29273679 36.9396002,5.20529593 C35.0595013,4.68065077 32.917063,5.1615755 31.4304732,6.64807014 C29.8127137,8.26572606 29.4192046,10.5829089 30.1187763,12.5503282 C30.1624995,12.6814895 30.1624995,12.8563713 30.0313298,12.9875325 L18.0074416,25.0106509 C17.876272,25.1418122 17.7451023,25.1418122 17.5702094,25.0980918 C15.5589408,24.3548445 13.2416096,24.7920488 11.6675733,26.4097047 C10.1372603,27.9399198 9.70002798,30.0385004 10.2247067,31.9621994 C10.3121532,32.2682424 10.7056623,32.3556832 10.9242784,32.1370811 L12.8481005,30.2133821 C13.6788419,29.382694 15.034262,29.382694 15.8650034,30.2133821 C16.6957448,31.0440703 16.6957448,32.3994037 15.8650034,33.2300918 L13.9411813,35.1537908 C13.7225651,35.3723929 13.8100116,35.7658768 14.1160742,35.8533177 C15.9961731,36.3779628 18.1386113,35.9407585 19.6252012,34.4105435 C21.2429607,32.7928875 21.6364697,30.4757047 20.936898,28.5082853 C20.8931748,28.3771241 20.8931748,28.2022423 21.0243445,28.071081 L33.0919559,16.0042422 C33.2231256,15.873081 33.3542953,15.873081 33.5291882,15.9168014 C35.5404568,16.6600487 37.857788,16.2228444 39.4318243,14.6051885 C40.9184141,13.1186938 41.3993696,10.9763927 40.8746908,9.09641424 C40.7872444,8.79037123 40.3937353,8.70293037 40.1751192,8.92153252 L38.2075738,10.801511 C37.3768325,11.6759196 36.0651356,11.6759196 35.2343942,10.801511 Z M20.936898,19.633038 L24.6533726,15.9168014 C24.8719887,15.6981992 24.8719887,15.3047154 24.6533726,15.0861132 L15.5589408,5.99226368 C14.3784136,4.81181206 12.2796985,4.68065077 11.0117249,5.86110239 C9.70002798,7.08527444 9.65630475,9.1838551 10.9242784,10.4517476 L20.1061567,19.633038 C20.3247728,19.8516401 20.7182819,19.8516401 20.936898,19.633038 Z M39.4755475,31.8310381 C39.388101,31.7435972 39.3006546,31.6561563 39.2132081,31.6124359 L37.5954486,30.7817477 C37.5517254,30.7380273 37.4642789,30.6943069 37.4205557,30.6505864 L29.5503743,22.780909 C29.3317582,22.5623068 28.9382491,22.5623068 28.719633,22.780909 L27.7577219,23.7427584 C27.5391058,23.9613606 27.5391058,24.3548445 27.7577219,24.5734466 L35.6279033,32.4431241 C35.6716265,32.4868445 35.7153497,32.5742854 35.759073,32.6180058 L36.5898143,34.2356617 C36.6335376,34.3231026 36.720984,34.4105435 36.8084305,34.4979843 L38.9508687,35.9407585 C39.2132081,36.1156402 39.6067172,36.0719198 39.8253333,35.8533177 L40.7872444,34.8914682 C41.0058605,34.672866 41.0495838,34.2793822 40.8746908,34.0170596 L39.4755475,31.8310381 Z" id="Icon-path">' + '</path>' + '</g>' + '</g>' + '</svg>'
      };
    }
  }], [{
    key: 'propTypes',
    value: {

      /**
       * Customizes the appearance through icon and colour
       * Can be set to 'info', 'warning', 'new'
       *
       * @property as
       * @type {String}
       * @default 'info'
       */
      as: _react2['default'].PropTypes.string,

      /**
       * Title to be displayed.
       *
       * @property title
       * @type {String}
       */
      title: _react2['default'].PropTypes.string.isRequired,

      /**
       * Message to be displayed.
       *
       * @property message
       * @type {String}
       */
      message: _react2['default'].PropTypes.string.isRequired,

      /**
       * Text to display on button.
       *
       * @property buttonText
       * @type {String}
       * @default 'Got it!'
       */
      buttonText: _react2['default'].PropTypes.string,

      /**
       * The action to trigger on click.
       *
       * @property buttonAction
       * @type {func}
       */
      buttonAction: _react2['default'].PropTypes.func.isRequired
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      as: 'info',
      buttonText: 'Got it!'
    },
    enumerable: true
  }]);

  return Banner;
})(_react2['default'].Component);

exports['default'] = Banner;
module.exports = exports['default'];