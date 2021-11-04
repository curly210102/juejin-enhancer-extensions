// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getExtensionBySlug } from "libs/api";
import type { NextApiRequest, NextApiResponse } from "next";

type ExtInfo = {
  slug: string;
  url: string;
  version: string;
};
type Data = {
  updated: ExtInfo[];
  deleted: string[];
};

type Error = {
  error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  if (req.method === "POST") {
    const { slugs } = req.body;

    const data: Data = {
      deleted: [],
      updated: [],
    };

    slugs.forEach((slug: string) => {
      const ext = getExtensionBySlug(slug, ["slug", "version", "rawURL"]);
      if (!ext) {
        data.deleted.push(slug);
      } else {
        data.updated.push(ext as ExtInfo);
      }
    });
    return res.status(200).json(data);
  } else {
    return res.status(404).json({
      error: "Not Support Method",
    });
  }
}
