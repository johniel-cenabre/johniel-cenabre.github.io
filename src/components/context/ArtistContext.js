import React, { createContext, useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_ARTISTS = gql`
  query {
    popular_artists {
      artists {
        id
        name
        bio
        birthday
        artworks {
          id
          title
          is_for_sale
          price
          date
          image {
            image_url
          }
        }
      }
    }
  }
`

export const ArtistContext = createContext()

export const ArtistContextProvider = ({ children }) => {
  const {loading, error, data} = useQuery(GET_ARTISTS)
  const [artists, setArtists] = useState([])
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState({})

  useEffect(() => {
    setArtists(data?.popular_artists.artists)
  }, [data?.popular_artists])

  useEffect(() => {
    const filtered = filterArtists()
    const sorted = sort && sortArtists(filtered || artists)
    setArtists(sorted || filtered)
  }, [filter, sort])

  function filterArtists() {
    return data?.popular_artists.artists.filter(artist => {
      return (
        artist.name.toLowerCase().includes(filter) ||
        artist.birthday.toLowerCase().includes(filter) ||
        artist.bio.toLowerCase().includes(filter)
      )
    })
  }

  function sortArtists(filtered) {
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

  return (
    <ArtistContext.Provider
      value={{
        loading,
        error,
        artists,
        setFilter,
        setSort
      }}
    >
      {children}
    </ArtistContext.Provider>
  )
}

export default React.memo(ArtistContextProvider)
