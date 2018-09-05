import React, { Component } from 'react'
import { FlatList, Dimensions, View } from 'react-native'
import PropTypes from 'prop-types'

export default class PaginatorHorizontal extends Component {

    static get propTypes() {
        return {
            component: PropTypes.func.isRequired,
            pages: PropTypes.array.isRequired,
            initial: PropTypes.number
        }
    }

    static get defaultProps() {
        return {
            scrollEnabled: true,
            initial: 0
        }
    }

    componentDidMount = () => {
        if (this.state.position > -1 && this.state.position < this.props.initial) {
            this._flatList.scrollToOffset({
                animated: false,
                offset: this.props.initial * Dimensions.get('screen').width
            })
            return true
        }
        return false
    }

    state = {
        position: 0
    }

    _handleScroll = eventData => {
        const { x } = eventData.nativeEvent.contentOffset
        const position = Math.round(x / Dimensions.get('window').width)

        this.setState({ position })
    }

    _renderItem = ({ item, index }) => {
        const distance = this.state.position - index
        if (distance <= 1 && distance >= -1) {
            return (
                <View style={{ width: Dimensions.get('window').width, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {this.props.component(item)}
                </View>
            )
        }

        return <View style={{ width: Dimensions.get('window').width, flex: 1, alignItems: 'center', justifyContent: 'center' }} />
    }

    render = () => (
        <FlatList
            data={this.props.pages}
            extraData={this.state}
            renderItem={this._renderItem}
            ref={ref => this._flatList = ref}
            scrollEnabled={this.props.scrollEnabled}
            keyExtractor={item => String(item.key)}
            horizontal={true}
            onScroll={this._handleScroll}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
        />
    )
}