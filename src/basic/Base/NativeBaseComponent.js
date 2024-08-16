import { Component } from 'react';
// import PropTypes from 'prop-types';
import { StyleProvider } from 'native-base-shoutem-theme';

export default class NativeBaseComponent extends Component {
  // static propTypes = {
  //   // eslint-disable-next-line react/forbid-prop-types
  //   theme: PropTypes.object
  // };

  // TODO(hsjoberg): This needs to be made into nested context provider,
  // but I don't think this functoinality is actually being used anywhere
  // getChildContext() {
  //   return {
  //     theme: this.props.theme ? this.props.theme : this.context.theme
  //   };
  // }

  getContextForegroundColor() {
    return this.context.foregroundColor;
  }

  static contextType = StyleProvider.Context;
}
