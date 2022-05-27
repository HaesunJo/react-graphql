import React from 'react'
import { useQuery, gql } from '@apollo/client';
import styled from "styled-components";
import Movie from '../components/Movie';

const GET_MOVIES = gql`
{
	allMovies{
		id
		medium_cover_image
		isLiked @client
	}
}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	font-family: Sans-serif
`;

const Header = styled.header`
	background-image: linear-gradient(-45deg, #74ebd5, #ACB6E5);
	height: 45vh;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const Title = styled.h1`
	font-size: 60px;
	font-weight: 600;
	margin-bottom: 20px;
`;

const Subtitle = styled.h3`
	font-size: 35px;
`;

const Loading = styled.div`
	font-size: 18px;
	opacity: 0.5;
	font-weight: 500;
	margin-top: 10px;
`;

const Movies = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 25px;
	width: 60%;
	position: relative;
	top: -50px;
`;

function Home() {
	const { loading, data } = useQuery(GET_MOVIES);
	// console.log(loading, data)
	// if (loading) return "loading movies..."
	// if (data && data.allMovies) return data.allMovies.map((movies) => <h2>{movies.id}</h2>)
	return (
		<Container>
			<Header>
				<Title>Movie List</Title>
				<Subtitle>Using React, GraphQL and Apollo</Subtitle>
			</Header>
				{(loading && <Loading>Movie Loading...</Loading>)}

				<Movies>
				{data?.allMovies?.map((movie) =>
					<Movie key={movie.id} id={movie.id} isLiked={movie.isLiked} bg={movie.medium_cover_image} />
				)}
				</Movies>

		</Container>
	)
}

export default Home