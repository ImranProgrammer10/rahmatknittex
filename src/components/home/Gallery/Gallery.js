import React from "react";
import DataGallery from "./DataGallery";
import "./Gallery.css";
const Gallery = () => {
  // const [gallery,setGallery]= useState([]);

  // useEffect( () =>{
  //   fetch('gallery.json')
  //      .then(res => res.json())
  //     .then(data => setGallery(data));
  //  }, []);
  return (
    <>
      <h1 className="my-4 gallery">Gallery</h1>
      <div className="row container-fluid mx-auto row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 my-4">
        {DataGallery.map((data) => {
          const { id, image } = data;

          return (
            <div key={id} className="col ">
              <img className="img-fluid img-thumbnail" src={image} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
