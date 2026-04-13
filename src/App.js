import { useState } from 'react';
import './App.css';
import bookCover from './assets/suppro-book-cover.png';

const trustPoints = [
  'Doctor-written guidance',
  'Evidence-led, not hype',
];

const learningPoints = [
  {
    number: '01',
    title: 'Which supplements have meaningful evidence',
    description:
      'A clearer read on which supplements actually have meaningful evidence behind them and which ones mostly borrow confidence from good marketing.',
  },
  {
    number: '02',
    title: 'Who may genuinely benefit and who should be cautious',
    description:
      'Plain-language context on who may genuinely benefit, who should be cautious, and when it is smarter to pause before adding anything new.',
  },
  {
    number: '03',
    title: 'Where the risks, side effects, and interactions hide',
    description:
      'The overlooked side effects, interactions, and tradeoffs that can matter far more than the promises printed on the front label.',
  },
];

function App() {
  const [email, setEmail] = useState('');
  const [submitState, setSubmitState] = useState('idle');

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitState('placeholder');
  };

  return (
    <main className="landing-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__inner">
          <div className="hero__content">
            <p className="hero__eyebrow">SUP-PRO: The science behind supplements</p>
            <h1 className="hero__title" id="hero-title">
              Most supplement books want you to <span>believe.</span>
              <br />
              This one wants you to <span>think.</span>
            </h1>
            <p className="hero__body">
              <strong>SUP-PRO: The Science Behind Supplements</strong> is a skeptic&apos;s
              guide to the supplement aisle, written by doctors who like data more
              than ad copy. If you want to cut through the marketing hype and make
              <span> smarter choices </span>
              for your health, you&apos;re in the right place.
            </p>
            <p className="hero__lead">
              Get the science-backed truth about popular supplements.
            </p>

            <form className="hero__form" id="chapter-form" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <div className="hero__form-row">
                <input
                  id="email"
                  className="hero__input"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setSubmitState('idle');
                  }}
                />
                <button className="hero__submit" type="submit">
                  Get the first chapter free
                </button>
              </div>
            </form>

            <p className="hero__privacy">No spam. Just science. Unsubscribe anytime.</p>
            {submitState === 'placeholder' && (
              <p className="hero__status" role="status">
                Chapter delivery will be connected next.
              </p>
            )}

            <ul className="hero__proof" aria-label="Reader reassurance">
              {trustPoints.map((point) => (
                <li key={point}>
                  <span className="hero__proof-icon" aria-hidden="true">
                    +
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero__visual">
            <div className="hero__book-shell">
              <div className="hero__book">
                <img
                  className="hero__book-image"
                  src={bookCover}
                  alt="SUP-PRO book cover with capsule artwork and the authors' names"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="insights" aria-labelledby="insights-title">
        <div className="insights__inner">
          <div className="insights__intro">
            <p className="insights__eyebrow">Inside the first chapter</p>
            <h2 className="insights__title" id="insights-title">
              What you&apos;ll learn before the supplement aisle tries to sell you a
              story.
            </h2>
            <p className="insights__body">
              The first chapter sets the tone for the rest of the book: less hype,
              more context, and a practical way to judge what deserves your
              attention.
            </p>
          </div>

          <div className="insights__grid">
            {learningPoints.map((point) => (
              <article className="insights__item" key={point.title}>
                <p className="insights__number">{point.number}</p>
                <h3 className="insights__item-title">{point.title}</h3>
                <p className="insights__item-body">{point.description}</p>
              </article>
            ))}
          </div>

          <a className="insights__cta" href="#chapter-form">
            Return to the free chapter
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
