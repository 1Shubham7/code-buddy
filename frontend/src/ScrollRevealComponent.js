import React, { useEffect } from "react";

const ScrollRevealComponent = () => {
	useEffect(() => {
		const sr = window.ScrollReveal();
		sr.reveal(".navbar,.top-text,.about-text,.search-bar-holder,.how", {
			// Configure ScrollReveal options here
			reset: true,
			delay: 200,
			distance: "40px",
			origin: "top",
			duration: 2000,
		});
		sr.reveal(".extra-buttons", {
			// Configure ScrollReveal options here
			reset: true,
			delay: 300,
			distance: "40px",
			origin: "top",
			duration: 2000,
		});
		sr.reveal(".cards-holder,.contribute", {
			// Configure ScrollReveal options here
			reset: true,
			delay: 400,
			distance: "40px",
			origin: "top",
			duration: 2000,
		});
		sr.reveal(".list,.my-text,.logo_social", {
			// Configure ScrollReveal options here
			reset: true,
			delay: 200,
			distance: "40px",
			origin: "left",
			duration: 2000,
		});
		sr.reveal(".image_part,.text-part", {
			// Configure ScrollReveal options here
			reset: true,
			delay: 400,
			distance: "40px",
			origin: "right",
			duration: 2000,
		});
		sr.reveal(".copyright", {
			// Configure ScrollReveal options here
			reset: true,
			delay: 400,
			distance: "40px",
			origin: "bottom",
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
			<div className="contribute"></div>
			<div className="logo_social"></div>
			<div className="text-part"></div>
			<div className="copyright"></div>
		</div>
	);
};

export default ScrollRevealComponent;
