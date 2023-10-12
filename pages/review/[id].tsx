import React, { useState } from 'react';
import axios from 'axios';
import styles from "../../components/Review.module.css";
import { useRouter } from 'next/router';
import Header from "../../components/Header";

function SubmitReview() {
	const router = useRouter();
	const { id } = router.query;
	const [review, setReview] = useState('');

	return (
	<>
        <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;400&family=Aguafina+Script&family=Amatic+SC&family=Barrio&family=Bellota:wght@300&family=Black+Ops+One&family=Caveat&family=Chakra+Petch:ital,wght@1,300&family=Cinzel&family=Cookie&family=Croissant+One&family=Dancing+Script&family=Faster+One&family=Fuggles&family=Gugi&family=Hammersmith+One&family=Homemade+Apple&family=Itim&family=Lilita+One&family=Montserrat+Alternates:wght@100&family=Nothing+You+Could+Do&family=Orbitron&family=Playball&family=Rajdhani&family=Satisfy&family=Sedgwick+Ave+Display&family=Shadows+Into+Light&family=Space+Mono&family=Tilt+Prism&family=Yellowtail&display=swap" rel="stylesheet" />
            <Header />

	<div className={styles.reviewall}>
	<h2>Your Review</h2>
	<form>
	<textarea
		value=""
		onChange=""
		rows="15"
		cols="50"
		placeholder="Write your review here"
		required
	/>
	<div>
	<button className={styles.reviewbutton} type="submit">Submit</button>
	</div>
	</form>
	</div>
		</>
	);
}

export default SubmitReview;
