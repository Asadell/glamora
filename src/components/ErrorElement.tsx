import { NavLink } from "react-router-dom";
import { errorGif } from "../assets";
import Container from "./Container";

const ErrorElement = () => {
  return (
    <Container className="flex flex-col justify-center items-center mt-16 mb-[120px]">
      <img src={errorGif} alt="Error Gif" className="w-[400px] h-[300px] mb-10"/>
      <h1 className="font-bold text-4xl text-center bg-deepSlate text-transparent bg-clip-text mb-4">Sepertinya Kamu Tersesat</h1>
      <p className="text-xl mb-9">URL yang kamu tuju tidak sesuai, ingin kembali ke halaman utama?</p>
      <NavLink to='/' className='py-4 px-10 text-white bg-primary-gradient rounded-[100px] hover:font-bold'>Ke Halaman Utama</NavLink>
    </Container>
  );
}

export default ErrorElement;