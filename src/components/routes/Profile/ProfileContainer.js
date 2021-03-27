import React, { useContext, useState, useEffect } from 'react'
import { ModalContext } from '../../context/ModalContext'
import { ArtistContext } from '../../context/ArtistContext'
import View from './ProfileView'

const ProfileContainer = props => {
  const { id } = props.match.params

  const {openModal} = useContext(ModalContext)
  const {loading, error, artists} = useContext(ArtistContext)
  const [artist, setArtist] = useState([])
  const [artistInfo, setArtistInfo] = useState([])
  const [artworks, setArtworks] = useState([])
  const [viewedArtwork, setViewedArtwork] = useState(null)
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState({})

  useEffect(() => {
    setArtist(
      props.location.artist ||
      artists?.find(artist => artist.id === id)
    )
  }, [props.location.artist, id])

  useEffect(() => {
    setArtworks(artist?.artworks)
  }, [artist])

  useEffect(() => {
    setArtistInfo([
      artist?.__typename,
      `id: ${id}`,
      `birthday: ${artist?.birthday}`,
      `bio: ${artist?.bio}`,
      `artworks: ${artist?.artworks?.length} pc${artist?.artworks?.length > 1 ? 's' : ''}`
    ])
    return () => setArtistInfo([])
  }, [artist])

  useEffect(() => {
    const filtered = filterArworks()
    const sorted = sort && _sortArtworks(filtered || artworks)
    setArtworks(sorted || filtered)
    return () => setArtworks([])
  }, [filter, sort])

  function filterArworks() {
    return artist.artworks?.filter(artwork => {
      return (
        artwork.title.toLowerCase().includes(filter) ||
        artwork.date.toLowerCase().includes(filter) ||
        artwork.price.toLowerCase().includes(filter)
      )
    })
  }

  function _sortArtworks(filtered) {
    filtered.sort((a, b) => {
      const propA = a[sort.key]?.toLowerCase()
      const propB = b[sort.key]?.toLowerCase()
      if (propA < propB) return -1
      if (propA > propB) return 1
      return 0
    })

    if (sort.direction === 'desc') filtered.reverse()

    return filtered
  }

  const artworksSortTypes = [
    'title',
    'date',
    'price',
  ]

  function sortArtworks(sortBy) {
    if (typeof sortBy === 'number') {
      setSort({ ...sort, key: artworksSortTypes[sortBy] })
    }

    if (typeof sortBy === 'boolean') {
      setSort({ ...sort, direction: sortBy ? 'asc' : 'desc' })
    }
  }

  function viewArtwork(artwork) {
    setViewedArtwork(artwork)
    openModal()
  }

  return <View
    {...props}
    loading={loading}
    error={error}
    filterArtworks={(text) => setFilter(text.toLowerCase())}
    artworksSortTypes={artworksSortTypes}
    sortArtworks={sortArtworks}
    artworks={artworks}
    artist={artist}
    artistInfo={artistInfo}
    viewedArtwork={viewedArtwork}
    viewArtwork={viewArtwork}
  />
}

export default React.memo(ProfileContainer)
