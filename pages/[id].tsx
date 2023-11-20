import React from 'react';
import { useRouter } from 'next/router';
import data from '../utils/data.json';
import "../app/globals.css"
import Header from "../components/Header";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import SearchProduct from "../components/SearchProduct";
import Head from "next/head";
import Bottom from "../components/Bottom";
import Link from 'next/link';
import styles from "../components/Detail.module.css";
import style from "../components/Review.module.css";
import useProducts from "../hooks/useProducts";
import axios from "axios";
import apiClient from "../api/api-client-axios";
import styl from "../components/Upload.module.css";
import ServiceSelector from "../components/ServiceSelector2";

interface Review {
	productId: any;
	message: any;
}


interface Props {
	item: any;
	setlogin: any;
	setSuccess: any;
	search: any;
	setSearch: any;
	token: any;
	selectedService: any;
	setSelectedService: any;
	selectedAbout: any;
	setSelectedAbout: any;
	user: any;
}
const ItemDetail = ({ item, user, setlogin, setSuccess, search, setSearch, token, setSelectedAbout, setSelectedService, selectedAbout, selectedService }: Props) => {
	const router = useRouter();
	  const navigate = (route: string) => {
		router.push(route);
		};
	const [review, setReview] = useState('');
	const [reviewFetch, setReviewFetch] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://api.shavathmart.com/api/reviews/`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Review fetched successfully');
        setReviewFetch(response.data); // Assuming you want to set the response data
        console.log(response.data);
      } catch (error) {
        console.error('Network error:', error);
        console.log(reviewFetch); // Assuming 'reviewFetch' is defined somewhere
      }
    };

    fetchReviews();
  }, []);


    const handleSubmit = (event: any) => {
        event.preventDefault();
	const reviewData = {
		productId: item.id,
		message: review,
	};
	try {
	const response = axios.post(`https://api.shavathmart.com/api/review/`, reviewData,
        		{
				headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			}
		);

		console.log('Review submitted successfully');
		console.log(reviewData);
	} catch (error) {
		console.error('Network error:', error);
		console.log(reviewData);
	}	
    };



//  if (router.isFallback) {
//    return <div>Please Wait Loading</div>;
//  }
	const imageData = item.img.data;
	const base64Image = Buffer.from(imageData).toString('base64');
	const imageURI = `data:image/png;base64,${base64Image}`;

	const formData = {
	id : item.id,
	name: item.name,
	price: item.price,
//	img: item.img,
//	description: item.description,
//	isAvailable: item.isAvailable,
	}

	function ProductRemover() {
		 apiClient.post(`delete/` ,
			formData,
                        {
                                headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${token}`,
                        },

                                })
			   .then(res =>  {
				console.log("successfully deleted", res.data);
				navigate("/home");
			})
                        .catch(err =>{
				console.log(err.message)
			});
	}



//  const [formData2, setFormData] = useState([]);
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [color, setColor] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [availability, setAvailability] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [category, setCategory] = useState<string>('All');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as File | undefined;

    if (file) {
      setImage(file);

      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setImagePreview(null);
    }
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (user && token) {
//	setFormData({'id': item.id});
//	setFormData({'name': "ezra"});
//	const formData2 = new FormData();	
//      formData2.append('id', item.id);
//      formData2.append('name', name);
//      formData2.append('price', parseFloat(price).toFixed(2));
//      if (image) {
//        formData2.append('img', image);
//      }
//      formData2.append('color', color);
//      formData2.append('description', description);
//      formData2.append('isAvailable', availability);

        const formData2 = {
        id : item.id ,
      name: name != '' ? name: item.name,
      price: price != '' ? price : item.price,
      img: image != null ? image : item.img,
      color: color != '' ? color: item.color,
      category: category != '' ? category : item.category,
      description: description != '' ? description : item.description,
      isAvailable: availability,
        }
      ProductUpdater(formData2);
//      navigate('/home');
    } else {
//      navigate('/login');
    }
  };


	function ProductUpdater(formData2: any) {
	console.log(formData2);
		 apiClient.post(`update/` ,
			formData2,
                        {
                                headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${token}`,
                        },

                                })
			   .then(res =>  {
				console.log("successfully update", res.data);
			})
                        .catch(err =>{
				console.log(err.message)
			});
		
	}


return (
  <>
    <Head>
      <title>{item.name}</title>
    </Head>
    <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;400&family=Aguafina+Script&family=Amatic+SC&family=Barrio&family=Bellota:wght@300&family=Black+Ops+One&family=Caveat&family=Chakra+Petch:ital,wght@1,300&family=Cinzel&family=Cookie&family=Croissant+One&family=Dancing+Script&family=Faster+One&family=Fuggles&family=Gugi&family=Hammersmith+One&family=Homemade+Apple&family=Itim&family=Lilita+One&family=Montserrat+Alternates:wght@100&family=Nothing+You+Could+Do&family=Orbitron&family=Playball&family=Rajdhani&family=Satisfy&family=Sedgwick+Ave+Display&family=Shadows+Into+Light&family=Space+Mono&family=Tilt+Prism&family=Yellowtail&display=swap" rel="stylesheet" />

      <Header setlogin={setlogin} setSuccess={setSuccess} search={search} setSearch={setSearch} selectedService={selectedService} selectedAbout={selectedAbout} setSelectedService={setSelectedService} setSelectedAbout={setSelectedAbout}/>

	<div className={styles.productdetail}>
      <img className={styles.detailimage} src={imageURI} alt={item.name} />
      <div className={styles.detailinfo}>
        <h1 className={styles.detailtitle}>{item.name}</h1>
        <ul className={styles.detaildescription}> Description	
        </ul>
        <p className={styles.detailcolor}>{item.description}</p>
        <p className={styles.detailcolor}>Color: {item.color}</p>
        <p className={styles.detailprice}>Price: {item.price} ETB</p>
        {item.isAvailable ? (
          <button className={styles.detailadd}>Available</button>
        ) : null}
      </div>
      {user && token ? (
        <>
	<div className={styl.uploadbody}>
      <h1 className={styl.uploadtitle}>Update Data</h1>
	<form className={styl.uploadform} onSubmit={handleUpdate}>
      <label className={styl.labeltitle}>Product Name</label>
      <input
        className={styl.titleinput}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />
      <label className={styl.labeltitle}>Product Image</label>
      <input
        className={styl.titleinput}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        placeholder="Put Image"
      />
      {imagePreview && <img src={imagePreview} alt="Image Preview" className={styl.previewImage} />}
      <label className={styl.labeltitle}>Product Price</label>
      <input
        className={styl.titleinput}
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Product Price $"
      />
	<label className={styl.labeltitle}>Product Description</label>
        <input
        className={styl.titleinput}
        type="string"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Product Descrition"
      />

	

      <label className={styl.labeltitle}>Product Color</label>
      <input
        className={styl.titleinput}
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Product Color"
      />
	<label className={styl.labeltitle}>Product Category</label>
        <div className={styl.titleinput}> <ServiceSelector setSelectedService={setCategory} selectedService={category}/></div>

	<label className={styl.labeltitle}>Product Availability</label>
        <input
        className={styl.checkbox}
        type="checkbox"
        checked={availability}
        onChange={(e) => setAvailability(e.target.checked)}
        placeholder="Product Availability"
      />

      <button className={styl.uploadupdatebutton} type="submit">
        Update Product
      </button>
          <button className={styl.uploaddeletebutton} onClick={ProductRemover} >Delete Product</button>
    </form>
	</div>
        </>
      ) : null}
      <div className={styles.detailreview}>
        <h1 className={styles.detailreviewtitle}>Reviews</h1>
        <div className={styles.detailreviewcontent}>
	{reviewFetch[0] ?
	<ol className={styles.revieworder}>{reviewFetch.map((data: Review) => <li className={styles.reviewlists}> {data.productId == item.id ?<span> ⚫ {data.message} </span> : null}</li>)}</ol>
	:
          <div>There are no reviews yet. Be the first to review {item.name} Your email address will not be published. Required fields are marked *</div>
	}
        </div>
      </div>
      <div className={styles.review}> Add Review </div>
      <div className={style.reviewall}>
        <h2 className={style.detailreviewtitle}>Your Review</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className={style.area}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review here"
            required
          />
          <div>
            <button className={style.reviewbutton} type="submit">Submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  </>
);


};

 async function fetchData() {
  const response = await fetch('https://api.shavathmart.com/api', );
  const data = await response.json();
	console.log(data);
  return data;
}


//async function fetchData() {
//  try {
//    const response = await axios.get('https://api.shavathmart.com/api');
//    const data = response.data;
//    console.log(data);
//    return data;
//  } catch (error) {
//    console.error(error);
//    throw error; 
//  }
//}

export async function getStaticPaths() {
  const data = await fetchData();
  
  const paths = data.map((item: any) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: true
  };
}

interface Props {
	params: any;
}
export async function getStaticProps({ params }: Props) {
  const data = await fetchData();
  const item = data.find((item: any) => item.id.toString() === params.id);

  if (!item) {
    return {
      notFound: true,
    };
  }

  return {
    props: { item },
  };
}

export default ItemDetail;
