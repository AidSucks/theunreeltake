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

export async function getPostData(p: string) {

  const typeCastPosts = films as unknown as PostData[];

  const params = new URLSearchParams(p);

  const query = params.get('search');
  const sortBy = params.get('sort');

  let postsToReturn: PostData[];

  if(query) {
    postsToReturn = typeCastPosts.filter(
      (postData) => postData.Title.toLowerCase().startsWith(query.toLowerCase())
    );
  } else {
    postsToReturn = typeCastPosts;
  }

  postsToReturn.sort((a, b) => {

    if(!sortBy) return a.Title.localeCompare(b.Title);

    if(sortBy === "rating") return b.imdbRating - a.imdbRating;

    return 0;
  });

  return postsToReturn;
}