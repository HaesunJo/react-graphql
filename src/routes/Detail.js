import React from 'react'
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components'

const GET_MOVIE = gql`
  query getMovie($movieId: String!){
    movie(id: $movieId){
      id
      title
      language
      rating
      large_cover_image
      description_full
      isLiked @client
    }
  }
`;


const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(-45deg, #74ebd5, #ACB6E5);
  color: white;
`;

const Column = styled.div`
  margin-left: 40px;
  width: 60%;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 15px;
`;

const Info = styled.h4`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  width: 60%;
`;

const Poster = styled.div`
  width: 45%;
  height: 80%;
  border-radius: 7px;
  background-color: transparent;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.background});
`;

const BtnLiked = styled.div`
padding: 15px 20px;
width: 320px;
heigth: 70px;
color: #ACB6E5;
font-size: 1.2rem;
border: none;
background-color: #ffffff;
text-align: center;
text-decoration: none;
cursor: pointer;
`

export const Detail = () => {
    const { id } = useParams();

    const { loading, data, client: { cache }} = useQuery(GET_MOVIE, { variables: { movieId: id } })

    console.log(data, loading)
    
    const btnLike = () => {
      cache.writeFragment({
        id:`Movie:${id}`,
        fragment: gql `
          fragment ToggleMovie on Movie {
            isLiked
          }
        `,
        data: { isLiked: !data.movie.isLiked }
      })
    }
    // console.log(loading, data);

    // if (loading) return "loading"
    // if (data && data.movie) return data.movie.title;

    return (
      <Container>
        <Column>
        
          <Title>{loading? "loading..." : `${data.movie.title} `}</Title>
          {/* use Optional chaining to make simple codes */}
          <Info>{data?.movie?.language} · ⭐️{data?.movie?.rating}</Info>
            
          <BtnLiked onClick={btnLike}>
            {data?.movie?.isLiked ? "You liked it! Click if you unlike it" : "👍 Do you like this movie? click me!"}
          </BtnLiked>

          <Description>{data?.movie?.description_full}</Description>

        </Column>
        <Poster background={data?.movie?.large_cover_image}></Poster>
      </Container>
    )
  }
  

export default Detail