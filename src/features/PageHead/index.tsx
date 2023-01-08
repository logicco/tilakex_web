import Head from "next/head";
import { PageHeadProps } from "src/features/PageHead/type";
import { Meta } from "./Meta";

export function PageHead({ title }: PageHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <Meta />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
