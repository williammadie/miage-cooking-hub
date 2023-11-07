/**
 * This file is responsible for common API calls towards:
 * - TheMealDB
 * - CocktailDB
 *
 * As these two APIs share the same author, they also have the same
 * structure and operations can easily be regrouped in a common file.
 */

import axios, { AxiosResponse } from "axios";
import NoResultFoundError from "../errors/NoResultFoundError";

export async function retrieveFullRecipe(
  resourceUrl: string,
  id?: string
): Promise<AxiosResponse> {
  let response: AxiosResponse | undefined = undefined;
  const resourcePath = id === undefined ? resourceUrl : `${resourceUrl}${id}`;
  try {
    response = await axios.get(resourcePath);
  } catch (error) {
    console.error(error);
  }

  if (response === undefined)
    throw new NoResultFoundError(`No Response from url ${resourceUrl}`);

  return response;
}

export async function retrieveRecipes(
  resourceUrl: string,
  name: string
): Promise<AxiosResponse> {
  let response: AxiosResponse | undefined = undefined;
  try {
    response = await axios.get(`${resourceUrl}${name}`);
  } catch (error) {
    console.error(error);
  }

  if (response === undefined)
    throw new NoResultFoundError(`No Response from url ${resourceUrl}`);

  return response;
}
