import React from 'react'
import styled from 'styled-components'
// import {gql, useMutation} from '@apollo/client'
import { Link } from 'react-router-dom'

// const LIKE_MOVIE = gql`
// 	mutation toggleLike($id: String!, $isLiked: Boolean!){
// 		toggleLike(id: $id, isLiked: $isLiked) @client
// 	}
// `;

const PosterContainer = styled.div`
	height: 300px;
	width: 100%;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	border-radius: 7px;
`;

const Poster = styled.div`
	height: 100%;
	width: 100%;
	border-radius: 3px;
	background-size: cover;
	backgound-position: center center;
	background-image: url(${props=> props.bg});
`;



export default function Movie({id, bg, isLiked}) {


	return (
		<PosterContainer>
			<Link to={`/detail/${id}`}>
				<Poster bg={bg} />
			</Link>
		</PosterContainer>
	)
}

