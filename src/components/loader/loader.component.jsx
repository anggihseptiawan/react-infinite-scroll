import React from "react";
import { FlexItem } from "./loader.styled";

export const Loader = () => {
	return (
		<FlexItem>
			<div className="lds-facebook">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</FlexItem>
	);
};
