import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import RenderPages from './RenderPages'

export default class Gallery extends Component {

    static get propTypes() {
        return {
            images: PropTypes.array.isRequired,
            renderComponent: PropTypes.func
        }
    }

    static get defaultProps() {
        return {
            renderComponent: props => <ImageBackground style={styles.image} {...props} />
        }
    }

    render = () => (
        <View style={{ backgroundColor: '#000', flex: 1 }}>
            <RenderPages pages={this.props.images} component={this.props.renderComponent} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2
    }
})