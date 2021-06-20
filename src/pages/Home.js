import React from 'react'

import Layout from '../components/layout'
import Favourites from '../components/Favourites';
import {Menu} from '../components/Menu';
import {Restaurants} from '../components/Restaurants';

export const Home = () => {
    return (
        <Layout>
            <Favourites />
            <Menu />
            <Restaurants />
          </Layout>
    )
}
