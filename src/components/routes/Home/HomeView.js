import './Home.css'
import React from 'react'
import Grid from '../../layouts/Grid'
import Fade from '../../animation/Fade'
import Card from '../../common/Card'
import { getRandomNumberFromRange } from '../../../utils/number'
import { Link } from 'react-router-dom'

const HomeView = ({
  loading,
  error,
  filterArtists,
  artistsSortTypes,
  sortArtists,
  artists = []
}) => {
  return (
    <main className="Home">
      <h1 className="Home__heading">Popular Artists</h1>
      <Grid className="Home__grid"
            loading={loading}
            error={error}
            filter={filterArtists}
            sorts={artistsSortTypes}
            sort={sortArtists}
            count={artists.length}>
        {artists.map((artist, index) => {
          
          const artworks = artist.artworks
          const artworksCount = artworks.length
          const randomNumberFromRange = getRandomNumberFromRange(artworksCount - 1)
          const randomArtwork = artworks[randomNumberFromRange]
          const artistPath = `/artist/${artist.id}`

          return (
            <Fade key={artist.id}
                  stagger={(index + 1) * 120}
                  duration={1}>
              <Card image={randomArtwork?.image.image_url.replace(':version', 'small')}>
                <Link className="Card__header"
                      to={{ pathname: artistPath, artist }}
                      style={{ textDecoration: 'none' }}>
                  <span>{artist.name}</span>
                  <span>{artist.__typename}</span>
                </Link>
                <Link className="Card__body"
                      to={{ pathname: artistPath, artist }} />
              </Card>
            </Fade>
          )
        })}
      </Grid>
    </main>
  )
}

export default React.memo(HomeView)
