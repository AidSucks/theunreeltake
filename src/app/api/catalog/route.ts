import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; 
import { allowedPostsPerPage } from "@/lib/constants";

interface CatalogParams {
  search: string;
  sort: string;
  page: number;
  postsPerPage: number;
  tags: string[];
}

export interface PostPageData {
  totalCount: number;
  pageItems: CatalogItem[];
}

export interface CatalogItem {
  slug: string,
  title: string,
  posterUrl: string | null,
  createdAt: Date,
  author: {
    name: string
  },
  tags: {
    tag: {
      id: number,
      displayName: string,
      type: string
    }
  }[]
}

export async function GET(request: NextRequest) {
  try {

    const catalogParams = parseSearchParams(request.nextUrl.searchParams);
    const offset = catalogParams.postsPerPage * (catalogParams.page - 1);


    const posts: CatalogItem[] = await prisma.post.findMany({
      where: {
        published: true,
        title: catalogParams.search ? {
          contains: catalogParams.search,
          mode: "insensitive"
        } : undefined,
        tags: (catalogParams.tags.length > 0) ? {
          some: { tag: {
              id: { in: catalogParams.tags.map(id => parseInt(id)) }
          }}
        } : undefined
      },
      orderBy: {
        title: "asc"
      },
      skip: offset,
      take: catalogParams.postsPerPage,
      omit: {
        id: true,
        htmlContent: true,
        published: true,
        imageUrls: true,
        updatedAt: true,
        authorId: true,
      },
      include: {
        author: { select: { name: true } },
        tags: {
          include: { tag: true },
          omit: { postId: true, tagId: true },
        },
      }
    });

    // Return successfully fetched and optionally sorted records
    return NextResponse.json(
      { totalCount: posts.length, pageItems: posts } as PostPageData,
      { status: 200 }
    );
  } catch (error) {
    console.error("Database query failed:", error);
    // Requirements specification: Properly handle database errors & return empty list
    return NextResponse.json(
      { totalCount: 0, pageItems: [] } as PostPageData,
      { status: 500 }
    );
  }
}

function parseSearchParams(rawSearchParams: URLSearchParams) {
  const search = rawSearchParams.get("search") ?? "";
  const sort = rawSearchParams.get("sort") ?? "";
  const page = rawSearchParams.get("page") ?? "";
  const ppp = rawSearchParams.get("ppp") ?? "";
  
  const tags = rawSearchParams.getAll("tags");

  const pageToNum = parseInt(page, 10);
  const pppToNum = parseInt(ppp, 10);

  return {
    search,
    sort,
    tags,
    page: isNaN(pageToNum) ? 1 : pageToNum,
    postsPerPage: isNaN(pppToNum) ? allowedPostsPerPage[0] : pppToNum,
  } as CatalogParams;
}