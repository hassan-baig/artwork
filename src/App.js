import { useEffect, useState } from 'react';

import InfoCard from './components/info-card';
import Artwork from './components/artwork';

import axios from './utils/axios';
import './styles.css';

const geoLocation = 'New York';
var timer = null;

const App = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    getObjectIds();
    timer = setInterval(loadNextImage, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (images.length < imageIndex) {
      clearInterval(timer);
    }
  }, [images, imageIndex]);

  useEffect(() => {
    if (paused) {
      clearInterval(timer);
    } else {
      clearInterval(timer);
      timer = setInterval(loadNextImage, 10000);
    }
  }, [paused]);

  const loadNextImage = () => setImageIndex((image) => image + 1);

  const getObjectIds = async () => {
    try {
      const res = await axios.get('/search', {
        params: {
          hasImages: 'true',
          departmentId: 1,
          q: 'a',
          geoLocation: encodeURI(geoLocation),
        },
      });
      if (res.data.objectIDs) getImages(res.data.objectIDs);
    } catch (err) {
      console.error(err);
    }
  };

  const getImages = async (objectIds) => {
    try {
      let imgs = [...images];
      for (const index in objectIds) {
        const res = await axios.get(`/objects/${objectIds[index]}`);
        imgs.push(res.data);
        setImages([...imgs]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePause = () => setPaused(!paused);

  return (
    <div className="image-bg">
      {paused && images[imageIndex] && (
        <InfoCard image={images[imageIndex]} handlePause={handlePause} />
      )}
      <Artwork image={images[imageIndex]} handlePause={handlePause} />
    </div>
  );
};

export default App;
