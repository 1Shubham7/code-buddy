import React, { useEffect } from "react";

const ScrollRevealComponent = () => {
	useEffect(() => {
		const sr = window.ScrollReveal();
		sr.reveal(".navbar,.top-text,.about-text,.search-bar-holder", {
			// Configure ScrollReveal options here
			reset: true,
			delay: 200,
			distance: "20px",
			origin: "top",
			duration: 2000,
		});
		sr.reveal(".extra-buttons,.how", {
			// Configure ScrollReveal options here
			reset: true,
			delay: 300,
			distance: "20px",
			origin: "top",
			duration: 2000,
		});
		sr.reveal(".cards-holder", {
			// Configure ScrollReveal options here
			reset: true,
			delay: 400,
			distance: "20px",
			origin: "top",
			duration: 2000,
		});
		sr.reveal(".list,.my-text", {
			// Configure ScrollReveal options here
			reset: true,
			delay: 200,
			distance: "20px",
			origin: "left",
			duration: 2000,
		});
		sr.reveal(".image_part", {
			// Configure ScrollReveal options here
			reset: true,
			delay: 400,
			distance: "20px",
			origin: "right",
			duration: 2000,
		});
	}, []);

	return (
		<div>
			<div className="navbar"></div>
			<div className="top-text"></div>
			<div className="list"></div>
			<div className="about-text"></div>
			<div className="search-bar-holder"></div>
			<div className="extra-buttons"></div>
			<div className="cards-holder"></div>
			<div className="my-text"></div>
			<div className="image_part"></div>
			<div className="how"></div>
		</div>
	);
};

export default ScrollRevealComponent;
