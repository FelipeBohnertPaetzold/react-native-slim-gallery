import React, { Component } from 'react'
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  PanResponder
} from 'react-native'
import ViewControl from 'react-native-zoom-view'
import PropTypes from 'prop-types'
import RenderPages from './RenderPages'

const { width, height } = Dimensions.get('window')

export default class Gallery extends Component {
  static get propTypes() {
    return {
      images: PropTypes.array.isRequired,
      renderComponent: PropTypes.func,
      backgroundColor: PropTypes.string,
      initial: PropTypes.number
    }
  }

  static get defaultProps() {
    return {
      renderComponent: props => (
        <ImageBackground style={styles.image} {...props} />
      ),
      backgroundColor: this.props.backgroundColor,
      initial: 0
    }
  }

  state = {
    scrollEnabled: true,
    scale: undefined
  }

  onResponderRelease = (x, scale) => {
    if (scale > 1) {
      this.setState({ scrollEnabled: false, scale })
    } else {
      this.setState({ scrollEnabled: true, scale })
    }
  }

  onDoubleClick = () => {
    setTimeout(() => {
      if (this.state.scale === undefined) {
        return this.setState({ scrollEnabled: false, scale: 2 })
      }
      if (this.state.scale > 1) {
        return this.setState({ scrollEnabled: false, scale: 1 })
      }

      return this.setState({ scrollEnabled: true })
    }, 200)
  }

  onRangeOffset = () => this.setState({ scrollEnabled: true })

  _component = props => (
    <ViewControl
      cropWidth={width}
      cropHeight={height}
      imageWidth={width}
      onDoubleClick={this.onDoubleClick}
      horizontalOuterRangeOffset={this.onRangeOffset}
      horizontalOuterRangeOffset={this.range}
      imageHeight={height}
      responderRelease={this.onResponderRelease}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.props.renderComponent(props)}
      </View>
    </ViewControl>
  )

  render = () => (
    <View style={{ backgroundColor: this.props.backgroundColor, flex: 1 }}>
      <RenderPages
        initial={this.props.initial}
        pages={this.props.images}
        scrollEnabled={this.state.scrollEnabled}
        component={this._component}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2
  }
})
