import Image from "next/image";
import ObjectDetection from "./components/object-detection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-8">
      <h1 className="gradient-title font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter text-center">
        Object Detector Alarm
      </h1>
      <ObjectDetection />
    </div>
  );
}
