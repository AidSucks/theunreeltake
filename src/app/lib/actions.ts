'use server';

import {signIn, signOut} from "@/auth";
import {RequestSchema} from "@/app/ui/home/forms/RequestForm";

import films from "../../../public/film.json";

export interface PostData {
  Title: string,
  Director: string,
  imdbRating: number,
  Poster: string
}

export interface CatalogParams {
  search?: string,
  sort?: string
}

export async function logIn(provider: string) {
  await signIn(provider, {redirectTo: "/dashboard"});
}

export async function logOut() {
  await signOut({redirectTo: "/"});
}

export async function testRequestForm(data: RequestSchema) {
  console.log(data);
}

async function artificialLag(delayMs: number) {
  await new Promise(resolve => setTimeout(resolve, delayMs));
}

export async function getPostData(params: CatalogParams) {

  const typeCastPosts = films as unknown as PostData[];

  const { search, sort } = params;

  let postsToReturn: PostData[];

  if(search) {
    postsToReturn = typeCastPosts.filter(
      (postData) => postData.Title.toLowerCase().startsWith(search.toLowerCase())
    );
  } else {
    postsToReturn = typeCastPosts;
  }

  postsToReturn.sort((a, b) => {

    if(
      sort === "rating" &&
      b.imdbRating - a.imdbRating !== 0
    ) {
      return b.imdbRating - a.imdbRating;
    }

    return a.Title.localeCompare(b.Title);
  });

  return postsToReturn;
}