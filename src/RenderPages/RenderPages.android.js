import React, { Component } from 'react'
import { ViewPagerAndroid, View, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

export default class RenderPages extends Component {
    static get propTypes() {
        return {
            pages: PropTypes.array.isRequired,
            component: PropTypes.func.isRequired,
            onPageSelected: PropTypes.func
        }
    }

    static get defaultProps() {
        return {
            scrollEnabled: true,
            initial: 0
        }
    }

    state = { position: 0 }

    _onPageScroll = ({ nativeEvent: { position } }) => {
        if (this.state.position !== position) {
            this.setState({ position })
        }
    }

    _component = (item, index) => {
        const distance = this.state.position - index

        if (distance <= 1 && distance >= -1) {
            return this.props.component(item)
        }

        return <View style={{ width: Dimensions.get('window').width }} />
    }

    render = () => (
        <ViewPagerAndroid
            style={{ flex: 1 }}
            onPageScroll={this._onPageScroll}
            scrollEnabled={this.props.scrollEnabled}
            initialPage={this.props.initial}
            onPageSelected={this.props.onPageSelected}
            ref={ref => (this.viewPager = ref)}
        >
            {this.props.pages.map((item, index) => (
                <View key={item.key}>
                    {this._component(item, index)}
                </View>
            ))}
        </ViewPagerAndroid>
    )
}