import React, { Component } from 'react'
import { ViewPagerAndroid, View, Text } from 'react-native'
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
            scrollEnabled: true
        }
    }

    state = { position: 0 }

    _next = () => {
        this.viewPager.setPage(this.state.position + 1)
    }

    _back = () => {
        this.viewPager.setPage(this.state.position - 1)
    }

    _onPageScroll = ({ nativeEvent: { position } }) => {
        if (this.state.position !== position) {
            this.setState({ position })
        }
    }

    render = () => (
        <ViewPagerAndroid
            style={{ flex: 1 }}
            onPageScroll={this._onPageScroll}
            scrollEnabled={this.props.scrollEnabled}
            onPageSelected={this.props.onPageSelected}
            ref={ref => (this.viewPager = ref)}
        >
            {this.props.pages.map(item => (
                <View key={item.key}>
                    {this.props.component(item)}
                </View>
            ))}
        </ViewPagerAndroid>
    )
}