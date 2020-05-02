import React, { Component } from 'react'
import OnlineUser from './OnlineUser'

import AlignItemsList from './AlignListItems';

export default class OnlineList extends Component {
    render() {
        return (
            <div>
                <AlignItemsList>
                    <OnlineUser user='Pedro' />
                    <OnlineUser user='Gabriel' />

                </AlignItemsList>



            </div>
        )
    }
}
