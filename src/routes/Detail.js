import React from 'react'
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  	background-image: linear-gradient(-45deg, #74ebd5, #ACB6E5);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
  width: 50%;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
`;

const GET_MOVIE = gql`
      query getMovie($id: String!){
        movie(id: $id){
          title
          language
          rating
          medium_cover_image
          description_full
        }
      }
    `;

export const Detail = () => {
    const { id } = useParams();

    const { loading, data} = useQuery(GET_MOVIE, {
      variables: {id}
    })

    // console.log(id, loading, data);

    // if (loading) return "loading"
    // if (data && data.movie) return data.movie.title;

    return (
      <Container>
        <Column>
        
          <Title>{loading? "loading..." : data.movie.title}</Title>
          {!loading && data.movie && (
            <>
              <Subtitle>{data.movie.language} · {data.movie.rating}</Subtitle>
              <Description>{data.movie.description_full}</Description>
            </>
          )}
          
        </Column>
        {/* <Poster bg={ data && data.movie? data.movie.medium_cover_image : ""}></Poster> */}
        < Poster bg={data?.movie.medium_cover_image}></Poster>
      </Container>
    )
  }
  

export default Detail