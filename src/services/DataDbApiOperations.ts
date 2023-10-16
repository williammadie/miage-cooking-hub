import axios, { AxiosResponse } from "axios";
/**
 * This class is responsible for common API calls towards:
 * - TheMealDB
 * - CocktailDB
 *
 * As these two APIs share the same author, they also have the same
 * structure and operations can easily be regrouped in a common class.
 */
class DataDbApiOperations {
  protected static async retrieveFullRecipe(
    resourceUrl: string,
    id?: string
  ): Promise<AxiosResponse> {
    let response: AxiosResponse | undefined = undefined;
    const resourcePath = id === undefined ? resourceUrl : `${resourceUrl}${id}`;
    try {
      response = await axios.get(resourcePath);
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    if (response === undefined) throw Error("No Response from url");

    return response;
  }

  protected static async retrieveRecipes(
    resourceUrl: string,
    name: string
  ): Promise<AxiosResponse> {
    let response: AxiosResponse | undefined = undefined;
    try {
      response = await axios.get(`${resourceUrl}${name}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    if (response === undefined) throw Error("No Response from url");

    return response;
  }
}

export default DataDbApiOperations;
