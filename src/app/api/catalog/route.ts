import {NextRequest, NextResponse} from "next/server";

import rawFilmsJson from '@/../public/film.json';

import {CatalogItemSchema, CatalogItem} from "@/app/lib/schemas";
import {allowedPostsPerPage} from "@/app/lib/constants";

interface CatalogParams {
  search: string,
  sort: string,
  page: number,
  postsPerPage: number
}

export interface PostPageData {
  totalCount: number,
  pageItems: CatalogItem[]
}

export async function GET(request: NextRequest) {

  const parsedFilms: CatalogItem[] = rawFilmsJson.map(
    value => {

      const {slug, Title, imdbRating, Poster} = value;

      return CatalogItemSchema.parse({slug: slug, title: Title, rating: imdbRating, posterUrl: Poster});
    }
  );

  const catalogParams = parseSearchParams(request.nextUrl.searchParams);

  const filteredPosts = parsedFilms.filter(
    (postData) => {

      if(catalogParams.search)
        return postData.title.toLowerCase().startsWith(catalogParams.search.toLowerCase());

      return true;
    }
  );

  filteredPosts.sort((a, b) => {

    if(
      catalogParams.sort === "rating" &&
      b.rating - a.rating !== 0
    ) {
      return b.rating - a.rating;
    }

    return a.title.localeCompare(b.title);
  });


  const offset = catalogParams.postsPerPage * (catalogParams.page - 1);

  const postsToReturn: CatalogItem[] = filteredPosts.slice(offset, offset + catalogParams.postsPerPage);

  return NextResponse.json(
    { totalCount: filteredPosts.length, pageItems: postsToReturn } as PostPageData,
    { status: 200 }
  );
}

function parseSearchParams(rawSearchParams: URLSearchParams) {

  const search = rawSearchParams.get("search") ?? "";
  const sort = rawSearchParams.get("sort") ?? "";
  const page = rawSearchParams.get("page") ?? "";
  const ppp = rawSearchParams.get("ppp") ?? "";

  const pageToNum = parseInt(page);
  const pppToNum = parseInt(ppp);

  return {
    search: search,
    sort: sort,
    page: isNaN(pageToNum) ? 1 : pageToNum,
    postsPerPage: isNaN(pppToNum) ? allowedPostsPerPage[0] : pppToNum
  } as CatalogParams;
}