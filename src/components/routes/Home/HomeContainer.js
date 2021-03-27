import React, { useContext, useState, useEffect } from 'react'
import { ArtistContext } from '../../context/ArtistContext'
import View from './HomeView'

const HomeContainer = props => {
  const {loading, error, artists, setFilter, setSort} = useContext(ArtistContext)
  const [artistsSortType, setArtistsSortType] = useState()
  const [artistsSortDirection, setArtistsSortDirection] = useState()

  useEffect(() => {
    setSort({
      key: artistsSortType,
      direction: artistsSortDirection
    })
  }, [artistsSortType, artistsSortDirection])

  const artistsSortTypes = [
    'name',
    'birthday',
    'bio'
  ]

  function sortArtists(sortBy) {
    if (typeof sortBy === 'number') {
      setArtistsSortType(artistsSortTypes[sortBy])
    }

    if (typeof sortBy === 'boolean') {
      setArtistsSortDirection(sortBy ? 'asc' : 'desc')
    }
  }

  return <View
    {...props}
    loading={loading}
    error={error}
    filterArtists={(text) => setFilter(text.toLowerCase())}
    artistsSortTypes={artistsSortTypes}
    sortArtists={sortArtists}
    artists={artists}
  />
}

export default React.memo(HomeContainer)
