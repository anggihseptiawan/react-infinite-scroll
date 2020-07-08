import React from "react";
import { useState, useEffect } from "react";
import { CardItem } from "../components/card-item/card.component";
import { Wrapper } from "./homepage.styled";
import { Loader } from "../components/loader/loader.component";

const HomePage = () => {
	const [post, setPost] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const get = await fetch(
				"https://jsonplaceholder.typicode.com/posts?_limit=4"
			);
			const res = await get.json();
			setPost(res);
		};

		getData();
	}, []);

	return (
		<Wrapper>
			<h4 className="text-center">Infinite Scroll</h4>

			<CardItem posts={post} />
			<Loader />
		</Wrapper>
	);
};

export default HomePage;
