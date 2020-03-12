import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HollowComponent from '../components/hollowComponent'

const Home = ({ navigation }) => {
  return (
    <>
      <HollowComponent />
      <Link onPress={() => navigation.navigate('Login')}>Login</Link>
    </>
  )
}

const Link = styled.Text``

Home.propTypes = {
  navigation: PropTypes.object
}

export default Home
