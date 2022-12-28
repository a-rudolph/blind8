import { useState, useEffect } from "react";

const ImageWithPlaceholder: React.FC<
  {
    height: string;
    width: string;
  } & React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = ({ width, height, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [props.src]);

  return (
    <div className="relative" style={{ height, width }}>
      {!isLoaded && <ImageLoadingPlaceholder />}
      <img onLoad={() => setIsLoaded(true)} {...props} />
    </div>
  );
};

const ImageLoadingPlaceholder: React.FC = () => {
  return <div className="w-full h-full loading absolute" />;
};

export default ImageWithPlaceholder;
