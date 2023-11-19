export const getStaticPaths = async () => {
	const res = await fetch('https://api.shavathmart.com/api');
	const data = await res.json();

	const paths = data.map(ninja => {
		return {
			params: { id: ninja.id.toString() }
			}
		})

	return {
		paths,
		fallback: false
	}
}
export const getStaticProps = async(context) => {
	const id = context.params.id;
	const res = await fetch('https://api.shavathmart.com/api');
	const data = await res.json();
	  const item = data.find((item) => item.id.toString() === context.params.id);

	  if (!item) {
		      return {
			            notFound: true,
			          };
		    }

	return {
		props: { ninja: item}
	}
}

const Details = ({ ninja }) => {
	return ( 
	<>
		<h1>{ ninja.name }</h1>
		<h1>{ ninja.color }</h1>
		<h1>{ ninja.price }</h1>
	</>
	);
}

export default Details;
