import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader mainHeader={"About Us"} subHeader={"Our story"} />
        <div className="maz-w-2xl text-gray-500 mx-auto mt-4 text-sm flex flex-col gap-4">
          <p>
            Greetings! I'm Md Mazharul Islam, a software engineer with a passion
            for web development. With a background in C, I bring a unique blend
            of skills and experiences to the table. I thrive on [What Motivates
            You or Your Key Strengths], and I'm always eager to explore new
            horizons. Outside of [Your Work or Academic Pursuits], you can find
            me [Your obbies or Interests]. I believe in [Your Core Beliefs or
            Principles], and I'm excited to [Your Goals or Aspirations]. Let's
            embark on this journey together!
          </p>
          <p>
            Greetings! I'm Md Mazharul Islam, a software engineer with a passion
            for web development. With a background in C, I bring a unique blend
            of skills and experiences to the table. I thrive on [What Motivates
            You or Your Key Strengths], and I'm always eager to explore new
            horizons. Outside of [Your Work or Academic Pursuits], you can find
            me [Your obbies or Interests]. I believe in [Your Core Beliefs or
            Principles], and I'm excited to [Your Goals or Aspirations]. Let's
            embark on this journey together!
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeader
            mainHeader={"Contact Us"}
            subHeader={"Don\'t hesitate "}
        />
      </section>


    </>
  );
}
