import {Product, Quote, Slider} from "../components";

export default function Home() {
  return (
    <>
      <Slider/>
      <Product title="Featured Product"/>
      <Quote/>
      <Product title="Newest Product" loadMore/>
    </>
  )
}