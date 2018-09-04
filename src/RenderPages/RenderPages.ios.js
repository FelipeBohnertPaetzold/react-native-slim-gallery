import React, { Component } from 'react'
import { FlatList, Dimensions, View } from 'react-native'
import PropTypes from 'prop-types'

export default class PaginatorHorizontal extends Component {

    static get propTypes() {
        return {
            component: PropTypes.func.isRequired,
            pages: PropTypes.array.isRequired
        }
    }

    static get defaultProps() {
        return {
            scrollEnabled: true
        }
    }

    state = {
        position: 0
    }

    _handleScroll = eventData => {
        const { x } = eventData.nativeEvent.contentOffset
        const position = Math.round(x / Dimensions.get('window').width)

        this.setState({ position })
    }

    _goToStep = (index = 0) => {
        this.flatList.scrollToOffset({
            animated: true,
            offset: index * Dimensions.get('window').width
        })
    }

    _next = () => {
        this._goToStep(this.state.position + 1)
    }

    _back = () => {
        this._goToStep(this.state.position - 1)
    }

    _renderItem = ({ item }) => (
        <View style={{ width: Dimensions.get('window').width, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {this.props.component(item)}
        </View>
    )

    render = () => (
        <FlatList
            data={this.props.pages}
            renderItem={this._renderItem}
            ref={ref => (this.flatList = ref)}
            scrollEnabled={this.props.scrollEnabled}
            keyExtractor={item => String(item.key)}
            horizontal={true}
            onScroll={this._handleScroll}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
        />
    )
}