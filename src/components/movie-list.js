import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "react-bootstrap";
import { BsAward } from "react-icons/bs";
import { BsCalendar } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const MovieList = (props) => {

	const history = useHistory();
	const responsive = {
		desktop: {
			breakpoint: { max: 2000, min: 1024 },
			items: 5,
			slidesToSlide: 4 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
			slidesToSlide: 2 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2,
			slidesToSlide: 1 // optional, default to 1.
		}
	};


	return (
		<div className="App-content">
			<Carousel
				swipeable={true}
				draggable={true}
				showDots={true}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				autoPlay={false}
				customTransition="all .5"
				transitionDuration={500}
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile"]}
				dotListClass="custom-dot-list-style">

				{
					props.movies.results.map((element, index) =>
						<div onClick={() => {
							history.push('/detail', { param: element });
						}}>
							<Card style={{ width: '15rem', height: "33rem", margin: "8px" }}>
								<Card.Img variant="top" height="250px" src={"https://image.tmdb.org/t/p/w500_and_h282_face/" + element.poster_path} />
								<Card.Body>
									<Card.Title style={{ fontSize: '14px', textAlign: "left" }}>{element.title}</Card.Title>
									<Card.Text style={{ fontSize: '12px', textAlign: "left" }}> {element.popularity}</Card.Text>
									<hr></hr>
									<Card.Text style={{ fontSize: '12px', textAlign: "left" }}>  {element.overview.substring(0, 150) + "..."}</Card.Text>
									<hr></hr>
									<Card.Text style={{ fontSize: '15px', textAlign: "left" }}>  <BsAward size="20" />   {element.vote_average}</Card.Text>
									<hr></hr>
									<Card.Text style={{ fontSize: '15px', textAlign: "left" }}>  <BsCalendar size="20" />   {element.release_date}</Card.Text>
								</Card.Body>
							</Card>
						</div>
					)
				}

			</Carousel >
		</div >
	);
};

export default MovieList;