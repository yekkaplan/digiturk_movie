import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Button, Col } from "react-bootstrap";

const MovieList = () => {

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
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
		<Carousel
			swipeable={true}
			draggable={true}
			showDots={false}
			responsive={responsive}
			ssr={true} // means to render carousel on server-side.
			infinite={true}
			autoPlaySpeed={1000}
			keyBoardControl={true}
			autoPlay={true}
			customTransition="all .5"
			transitionDuration={500}
			containerClass="carousel-container"
			removeArrowOnDeviceType={["tablet", "mobile"]}
			dotListClass="custom-dot-list-style"
		>
			<div><Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						asdasd
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>

			</div>


			<div><Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Sasdasd.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			</div>



			<div><Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						asdasd
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			</div>


			<div><Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						asda
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card></div>

			<div><Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						asda
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card></div>
			<div><Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						asda
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card></div>
			<div><Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						asda
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card></div>
			<div><Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						asda
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card></div>


		</Carousel>
	);
};

export default MovieList;