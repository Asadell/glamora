import { useEffect, useRef, useState } from "react";
import { Layer, Stage, Image as KonvaImage, Transformer } from "react-konva";
import Webcam from "react-webcam";
import useImage from "use-image";

interface TryOnVideoProps {
  selectedItemImage: string | null;
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function TryOnVideo({ selectedItemImage, containerRef }: TryOnVideoProps) {
  const webcamRef = useRef<Webcam>(null);
  const [stageSize, setStageSize] = useState({ width: 0, height: 0 });
  const [imageProps, setImageProps] = useState({
    x: 100,
    y: 100,
    width: 100, // Default width
    height: 0, // To be calculated
    isDragging: false,
  });
  const [selectedShape, setSelectedShape] = useState<string | null>(null);
  const [image] = useImage(`/src/assets/items/${selectedItemImage}` || "");

  const transformerRef = useRef<any>(null);
  const imageRef = useRef<any>(null);

  useEffect(() => {
    const updateStageSize = () => {
      if (containerRef.current) {
        setStageSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateStageSize();
    window.addEventListener("resize", updateStageSize);

    return () => {
      window.removeEventListener("resize", updateStageSize);
    };
  }, []);

  useEffect(() => {
    handleImageLoad();

  }, [image]);

  useEffect(() => {
    if (selectedShape && transformerRef.current && imageRef.current) {
      transformerRef.current.nodes([imageRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [selectedShape]);

  const handleDragEnd = (e: any) => {
    setImageProps({
      ...imageProps,
      x: e.target.x(),
      y: e.target.y(),
      isDragging: false,
    });
  };

  const handleImageLoad = () => {
    console.log('image load');
    if (imageRef.current) {
      const img = imageRef.current.image(); 
      const aspectRatio = img.width / img.height;

      const defaultWidth = 250;
      const defaultHeight = defaultWidth / aspectRatio;

      setImageProps({
        ...imageProps,
        width: defaultWidth,
        height: defaultHeight,
      });
      console.log(`defaultWidth: ${defaultWidth}, defaultHeight: ${defaultHeight}`);
    }
  };

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-6">
      <div
        ref={containerRef}
        className="w-full h-full max-w-3xl rounded-lg overflow-hidden shadow-lg relative"
      >
        <Webcam
          audio={false}
          ref={webcamRef}
          videoConstraints={videoConstraints}
          className="w-full h-full object-cover absolute"
        />
        <Stage 
         width={stageSize.width} height={stageSize.height}
         >
          <Layer>
            {image && (
              <>
                <KonvaImage
                  image={image}
                  ref={imageRef}
                  x={imageProps.x}
                  y={imageProps.y}
                  width={imageProps.width} // Maintains aspect ratio
                  height={imageProps.height} // Height based on width
                  draggable
                  onClick={() => setSelectedShape("image")}
                  onDragEnd={handleDragEnd}
                  onLoad={handleImageLoad} // Set default size after image loads
                />
                {selectedShape === "image" && (
                  <Transformer
                    ref={transformerRef}
                    rotateEnabled={false} // Disable rotation (optional)
                    keepRatio={true} // Maintain aspect ratio when resizing
                    boundBoxFunc={(oldBox, newBox) => {
                      // Limit minimum size (optional)
                      if (newBox.width < 50 || newBox.height < 50) {
                        return oldBox;
                      }
                      return newBox;
                    }}
                  />
                )}
              </>
            )}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}
