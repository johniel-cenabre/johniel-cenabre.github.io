import './Profile.css'
import React from 'react'
import Grid from '../../layouts/Grid'
import Fade from '../../animation/Fade'
import Card from '../../common/Card'
import Modal from '../../common/Modal'

const ProfileView = ({
  loading,
  error,
  filterArtworks,
  artworksSortTypes,
  sortArtworks,
  artworks = [],
  artist,
  artistInfo = [],
  viewArtwork,
  viewedArtwork
}) => {
  return (
    <main className="Profile">
      <h1 className="Profile__heading">{artist?.name}</h1>
      <div className="Profile__info">
        {artistInfo.map((detail, index) => {
          return (
            <Fade key={'info'+index}
                  stagger={(index + 1) * 300}>
              <span>{detail}</span>
            </Fade>
          )
        })}
      </div>
      <Grid className="Profile__grid"
            loading={loading}
            error={error}
            filter={filterArtworks}
            sorts={artworksSortTypes}
            sort={sortArtworks}
            count={artworks.length}>
        {artworks.map((artwork, index) => {
          return (
            <Fade key={artwork.id}
                  stagger={(index + 1) * 100}
                  duration={0.7}>
              <Card id={artwork.id}
                    image={artwork.image.image_url.replace(':version', 'medium')}
                    onClick={() => viewArtwork(artwork)}>
                <div className="Card__footer">
                  <span>{artwork.title}</span>
                  <span>{artwork.price}</span>
                </div>
              </Card>
            </Fade>
          )
        })}
      </Grid>
      <Modal title={viewedArtwork?.title}>
        <div className="Modal__body"
             style={{
               backgroundImage: `url(${viewedArtwork?.image.image_url.replace(':version', 'large')})`,
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'contain'
             }}>
        </div>
        <div className="Modal__footer"
             style={{
               color: 'darkgray',
               backgroundColor: 'rgba(133, 66, 118, 0.3)'
             }}>
          <span>{viewedArtwork?.date}</span>
          {viewedArtwork?.price && <span style={{ color: "#e77470" }}>
            {viewedArtwork?.price}
          </span>}
        </div>
      </Modal>
    </main>
  )
}

export default React.memo(ProfileView)
