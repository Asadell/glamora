import { useRef, useEffect } from "react";
import Webcam from "react-webcam";

interface TryOnVideoProps {
  selectedItemImage: string | null;
}

export default function TryOnVideo({ selectedItemImage }: TryOnVideoProps) {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  useEffect(() => {
    if (selectedItemImage && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = selectedItemImage;

      img.onload = () => {
        // Clear the canvas
        ctx?.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the current video frame as background (optional)
        if (webcamRef.current) {
          const video = webcamRef.current.video;
          if (video) {
            ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
          }
        }

        // Draw the selected item image at a fixed position
        // Adjust the position and size based on your needs
        ctx?.drawImage(img, 200, 200, 300, 300);
      };
    }
  }, [selectedItemImage]);

  return (
    <div className="flex flex-col items-center justify-center w-full p-6">
      <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-lg">
        <Webcam
          audio={false}
          ref={webcamRef}
          videoConstraints={videoConstraints}
          className="w-full h-full object-cover"
        />
        <canvas ref={canvasRef} width={1280} height={720} className="absolute"></canvas>
      </div>
    </div>
  );
}
