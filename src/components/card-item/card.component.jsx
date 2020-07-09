import React, { useState, useRef, useCallback } from "react";
import { CardWrapper } from "./card.styled";
import useFetchPost from "../../hook/useFetchPost";
import { Loader } from "../loader/loader.component";

export const CardItem = () => {
	const [more, setMore] = useState(1);

	// from custom hook
	const { posts, loading } = useFetchPost(more);

	const observer = useRef();
	const lastPost = useCallback(
		(el) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			let options = {
				rootMargin: "0px 0px 0px 0px",
			};

			observer.current = new IntersectionObserver((entries, options) => {
				if (entries[0].isIntersecting) {
					setMore((more) => more + 1);
				}
			});
			if (el) observer.current.observe(el);
		},
		[loading]
	);

	return posts.map((post, index) => {
		if (posts.length === index + 1) {
			return (
				<div key={post.id}>
					<CardWrapper ref={lastPost} get={more}>
						<p className="title">{post.title}</p>
						<p>{post.body}</p>
					</CardWrapper>
					{loading && <Loader />}
				</div>
			);
		} else {
			return (
				<CardWrapper key={post.id} get={more}>
					<p className="title">{post.title}</p>
					<p>{post.body}</p>
				</CardWrapper>
			);
		}
	});
};
