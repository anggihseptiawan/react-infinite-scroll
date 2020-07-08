import React from "react";
import { FlexItem } from "./loader.styled";

export const Loader = () => {
	return (
		<FlexItem>
			<div class="lds-facebook">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</FlexItem>
	);
};
