import React from 'react'
import PropTypes from 'prop-types'

//components
import FeaturedCard from './FeaturedCard.jsx'
import LoadingLogo from '../loading/LoadingLogo'

//styles
import {featuredWrapper} from './Featured.module.scss'

const FeaturedEvents = ({apolloData: {data, loading, error}}) => {
  return (
    <section className='section'>
      <h3 className='is-family-secondary is-size-2 has-text-black-bis'>
        Featured
      </h3>
      {/*carousel container*/}
      <div className={`${featuredWrapper} `}>
        {loading && <LoadingLogo />}
        {error && <p>ERROR</p>}
        {/* map over events and create cards */}
        {data &&
          data.events.map(event => (
            <FeaturedCard key={event.id} item={event} />
          ))}
      </div>
    </section>
  )
}

FeaturedCard.propTypes = {
  apolloData: PropTypes.object,
}

export default FeaturedEvents
