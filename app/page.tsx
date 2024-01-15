"use client";
import Container from "./utility/Container";
import Hero from "./components/Hero";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const DynamicAboutMe = dynamic(() => import("./components/About"), {
  suspense: true,
});

export default function Home() {
  return (
    <Container>
      <>
        <Hero />
        <section id="projects" className="__className_f6433a">
          <h3 className="text-xl font-semibold mb-3">Projects</h3>
          <hr />
        </section>
        <div id="about" className="mb-20" />
        <section data-aos="fade-up" data-aos-once="true" data-aos-delay="400">
          <h3 className="text-xl font-semibold mb-3 mt-10 __className_f6433a">
            About me
          </h3>
          <hr />
          <Suspense fallback={`Loading...`}>
            <DynamicAboutMe />
          </Suspense>
        </section>
      </>
    </Container>
  );
}
