import React from "react";
import "./Article.scss";

export default function Article() {
  return (
    <article>
      <header className="ArticleHeader">
        <div className="ArticleRubric">
          <a className="Rubic" href="">
            TECHNOLOGY
          </a>
          <p className="ReadingTime">10 MINUTE READ</p>
        </div>
        <h1 className="ArticleTitle">
          Google: There Are Exactly 129,864,880 Books in the World
        </h1>
        <p className="ArticleSubtitle">
          If we all spoke circumspectly and wisely all the time, who would even
          need free-speech policies?
        </p>
        <p className="ArticleAuthor">By David Frum</p>
        <div className="ArticleDateShare">
          <p>MAY 20, 2022, 7 AM ET</p>
          <p>SHARE</p>
        </div>
      </header>
      <div className="ArticleBody">
        <p className="ArticleText">
          Google's data nerds have gone to work building a method to determine
          exactly how many unique books exist in our world. Turns out, after
          much figuring, that the count comes up just shy of 130 million. Click
          through for a thoroughly detailed explanation of how they came to that
          number.
        </p>
        <blockquote>
          When you are part of a company that is trying to digitize all the
          books in the world, the first question you often get is: "Just how
          many books are out there?"
          <br />
          <br />
          Well, it all depends on what exactly you mean by a "book." We're not
          going to count what library scientists call "works," those elusive
          "distinct intellectual or artistic creations." It makes sense to
          consider all editions of "Hamlet" separately, as we would like to
          distinguish between -- and scan -- books containing, for example,
          different forewords and commentaries.
        </blockquote>
      </div>
    </article>
  );
}
