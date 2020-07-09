import React from "react";
import { CardItem } from "../components/card-item/card.component";
import { Wrapper } from "./homepage.styled";

const HomePage = () => {
	return (
		<Wrapper>
			<h4 className="text-center">Infinite Scroll</h4>

			<CardItem />
		</Wrapper>
	);
};

export default HomePage;
