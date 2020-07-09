import { useState, useEffect } from "react";

const useFetchPost = (more) => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	let start = more * 5;
	useEffect(() => {
		setLoading(true);
		const getData = async () => {
			const get = await fetch(
				`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=5`
			);
			const res = await get.json();
			setLoading(false);
			setPosts((prev) => [...prev, ...res]);
		};

		getData();
	}, [more]);

	return { posts, loading };
};

export default useFetchPost;
