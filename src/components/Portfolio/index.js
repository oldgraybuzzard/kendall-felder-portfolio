import React from "react";
import ProjectList from "../Project";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio (props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <ProjectList category={currentCategory.name} />
    </section>
  )
}

export default Portfolio;