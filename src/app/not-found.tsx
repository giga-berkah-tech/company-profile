import { Container } from "@/components/Container";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <Container>
      <div className="pt-40 flex flex-col items-center justify-center">
        <h1 className="text-4xl">
          404
          <span className="text-2xl"> NOT FOUND!</span>
        </h1>
        <p className="text-md py-5 lg:max-w-2xl text-center font-light">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="px-4 py-2 text-md font-light text-center border rounded-md hover:bg-gray-200 dark:hover:bg-trueGray-700"
        >
          HOME
        </Link>
      </div>
    </Container>
  );
}
