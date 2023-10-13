import React, { useState } from 'react';
import styles from "../../components/Review.module.css";
import { useRouter } from 'next/router';
import Header from "../../components/Header";

function SubmitReview() {
    const router = useRouter();
    const { id } = router.query;
    const [review, setReview] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Add your code to handle form submission here, for example:
        // You can send the 'review' data to a server or perform any other action you need.

        // Manipulate the browser history to avoid page reload
        window.history.pushState({}, '', '/'); // Replace the URL with the same one

        // Note: This is not the recommended way to handle form submissions, but it can forcibly prevent page reloads.
    };

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;400&family=Aguafina+Script&family=Amatic+SC&family=Barrio&family=Bellota:wght@300&family=Black+Ops+One&family=Caveat&family=Chakra+Petch:ital,wght@1,300&family=Cinzel&family=Cookie&family=Croissant+One&family=Dancing+Script&family=Faster+One&family=Fuggles&family=Gugi&family=Hammersmith+One&family=Homemade+Apple&family=Itim&family=Lilita+One&family=Montserrat+Alternates:wght@100&family=Nothing+You+Could+Do&family=Orbitron&family=Playball&family=Rajdhani&family=Satisfy&family=Sedgwick+Ave+Display&family=Shadows+Into+Light&family=Space+Mono&family=Tilt+Prism&family=Yellowtail&display=swap" rel="stylesheet" />
            <Header />

            <div className={styles.reviewall}>
                <h2>Your Review</h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
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

