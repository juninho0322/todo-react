import Image from "next/image";
import Title from "../components/Title";
import Container from "../components/Container";
import Fonts from "../components/Fonts";

export default function Home() {
  return (
    <main className="">
      <Container container="header">
        <Fonts fonts="h1"> TODO LIST </Fonts>
      </Container>
      {/* <Title size="1"> 3xl </Title>
      <Title size="2"> Luis </Title>
      <Title size="3"> Luigi </Title> */}
      <Container container="body-app"></Container>
    </main>
  );
}
