import React, { useRef } from 'react';

import classes from './AddMovie.module.css';

function AddIncident(props) {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="Incident">Incident</label>
        <input type="text" id="Incident" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="datetime-local" id="eventDate" name="datetime" ref={releaseDateRef} />
      </div>
      <button>Add Incident</button>
    </form>
  );
}

export default AddIncident;
