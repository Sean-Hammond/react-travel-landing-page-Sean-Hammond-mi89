import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
  const cardsInfo = [
    {
      title: "Featured Destination",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus porro veritatis dignissimos corporis dolorum, reprehenderit, adipisci illo numquam magni iusto facere voluptate eligendi incidunt accusamus cumque nobis beatae molestias?",
    },
    {
      title: "Featured Destination",
      description:
        "Harum ad ipsam quis enim? Maxime perferendis fugiat enim. Cumque aliquam possimus quis esse praesentium maiores atque corporis sunt eum, neque placeat!",
    },
    {
      title: "Featured Destination",
      description:
        "Fugiat aliquam itaque, iusto, non quasi laborum harum tempore nesciunt deleniti modi, fugit aperiam recusandae facere debitis sapiente laudantium odio cum praesentium!",
    },
    {
      title: "Featured Destination",
      description:
        "Ipsam dignissimos error porro ipsa consequuntur nesciunt tenetur ab, asperiores odit eius labore! Vitae ut consequuntur excepturi nam obcaecati ex? Itaque, temporibus?",
    },
  ];

  return (
    <div>
      <Navbar />
      <main className="container-fluid px-0 py-3">
        <Jumbotron />
        <div className="row w-75 mx-auto gy-3">
          {cardsInfo.map((cardInfo, index) => (
            <div className="col-12 col-md-4 col-lg-3" key={index}>
              <Card
                cardTitle={cardInfo.title}
                cardDescription={cardInfo.description}
                cardIndex={index}
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
