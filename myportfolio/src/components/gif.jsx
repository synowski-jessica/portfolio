const GifComponent = () => {
  return (
    <div className="relative w-24 h-24 ">
        <iframe
        src="https://giphy.com/embed/Au1EKiWYcLHbFYnqgU"
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
        frameBorder="0"
        allowFullScreen
        style={{ backgroundColor: 'transparent' }}
        title="Giphy Gif"
        ></iframe>
  </div>
  );
};

export default GifComponent;
