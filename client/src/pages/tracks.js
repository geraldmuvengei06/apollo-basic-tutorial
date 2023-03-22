import React from 'react';
import { Layout } from '../components';
import TrackCard from '../containers/track-card'
import { gql, useQuery } from '@apollo/client'


const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      title
      thumbnail
      length
      modulesCount
      id
      author {
        id
        name
        photo
      }
    }
  }
`



/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS)

  if (loading) return "Loading..."

  if (error) return `Error!  ${error.message}`

  return <Layout grid> {data?.tracksForHome?.map(track => <TrackCard key={track.id} track={track}></TrackCard> )} </Layout>;
};

export default Tracks;
