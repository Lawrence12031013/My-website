import React from "react";

const portfolio = () => {
  return (
    <div
      class="card-wrap"
      id="_portfolio"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div class="card-light">
        <a
          href="https://lawrence12031013.github.io/My-website/"
          target="_new"
          class="connect"
        >
          <div class="card-front">
            <div class="photo-wrap">
              <div class="photo_por photo_1"></div>
            </div>
            <div class="text">
              <h2>Photo Gallery</h2>
              <p>
                It's a free photo gallery website. Everytime the website be
                opened, the most recent 15 photos are display. You can search
                for photos using the search bar. You can download photos by
                clicking the "click here" button below the photo.{" "}
              </p>
            </div>
          </div>
        </a>
      </div>

      <div class="card-light">
        <a
          href="https://happy-golick-b730ff.netlify.app/ "
          target="_new"
          class="connect"
        >
          <div class="card-front">
            <div class="photo-wrap">
              <div class="photo_por photo_2"></div>
            </div>
            <div class="text">
              <h2>
                Natours
                <br />
                Outdoor website
              </h2>
              <p>
                It's a Outdoor website. This is my first assignment on Udemy.
                All done with HTML and CSS. It's a really fun and useful
                assignment.
              </p>
            </div>
          </div>
        </a>
      </div>

      <div class="card-light">
        <a
          href="https://distracted-blackwell-b158fa.netlify.app/"
          target="_new"
          class="connect"
        >
          <div class="card-front">
            <div class="photo-wrap">
              <div class="photo_por photo_3"></div>
            </div>
            <div class="text">
              <h2>Bingo Lottery</h2>
              <p>
                I made it for company's end-of-year-party. First enter how many
                numbers are there in total. Second enter how much is accumulated
                in total. Then start the game. I found a rolling ball canvas
                animation example to assist in development.
              </p>
            </div>
          </div>
        </a>
      </div>

      <div class="card-light">
        <a
          href="https://lawrence12031013.github.io/Todo-List/"
          target="_new"
          class="connect"
        >
          <div class="card-front">
            <div class="photo-wrap">
              <div class="photo_por photo_4"></div>
            </div>
            <div class="text">
              <h2>TODO List</h2>
              <p>
                It's my first JS assignment. It's a homework that many newbies
                will be exposed to. It helps me learned JS syntax and
                locaolstorage concept.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default portfolio;
