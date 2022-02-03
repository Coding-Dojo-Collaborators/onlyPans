/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import axios from 'axios';

export default props => {
  const { recipeId, successCallback } = props;

  const deleteRecipe = e => {
    axios.delete('http://localhost:8000/api/recipe/delete/' + recipeId)
      .then(res => {
        successCallback();
      })
  }

  return (
    <button onClick={deleteRecipe}>
      Delete Recipe
    </button>
  )
}