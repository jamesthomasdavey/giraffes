import facts from "./facts.js";
import quiz from "./../quiz/quiz.js";

const accordion = (() => {
  const renderPage = () => {
    document.body.innerHTML = `
    <main class="accordion__main">
      <div class="accordion__left-space"></div>
        <div class="accordion__container">
          <div class="accordion__header">
            <h1>Giraffes</h1>
            <p class="tagline">Some facts about our high-reaching friends</p>
          </div>
          <div class="accordion">
            <div class="accordion__left-edge"></div>
          </div>
          <div class="accordion__take-quiz">
            <p>How much do you know about giraffes?</p>
            <button>Take the quiz!</button>
          </div>
        <div class="accordion__right-space"></div>
      </main>
    `;
  };

  const renderAccordion = () => {
    let accordion = document.querySelector(".accordion");
    facts.forEach(section => {
      let sectionMarkup = `
      <div class="accordion__item">
        <div class="accordion__heading">
          <p class="accordion__category">${section.category}<p>
          <div class="accordion__icon">
            <span class="accordion__bar accordion__first-bar"></span>
            <span class="accordion__bar accordion__second-bar"></span>
          </div>
        </div>
        <div class="accordion__description">
          <div class="accordion__description-image">
            <img src="./../../../../images/accordion/${section.category.toLowerCase()}.png">
          </div>
          <div class="accordion__description-text">
            ${section.description}
          </div>
        </div>
      </div>
      `;
      accordion.innerHTML += sectionMarkup;
    });
  };

  const render = () => {
    renderPage();
    renderAccordion();
  };

  const listeners = () => {
    document.body
      .querySelectorAll(".accordion__heading")
      .forEach(accordionHeading => {
        accordionHeading.addEventListener("click", () => {
          accordionHeading
            .querySelector(".accordion__first-bar")
            .classList.toggle("change");
          accordionHeading
            .querySelector(".accordion__second-bar")
            .classList.toggle("change");
          let accordionDescription = accordionHeading.nextElementSibling;
          if (accordionDescription.style.maxHeight) {
            accordionDescription.style.maxHeight = null;
          } else {
            accordionDescription.style.maxHeight = `${
              accordionDescription.scrollHeight
            }px`;
          }
        });
      });
  };

  const init = () => {
    render();
    listeners();
  };
  return {
    init
  };
})();

export default accordion;
