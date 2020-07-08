import React from "react";
import { CardWrapper } from "./card.styled";

export const CardItem = ({ posts }) => {
	return posts.map((post) => (
		<CardWrapper key={post.id}>
			<img src="" alt="img-profile" />
			<p className="title">{post.title}</p>
			<p>{post.body}</p>
		</CardWrapper>
	));
};
