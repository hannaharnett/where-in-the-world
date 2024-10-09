import { Link } from "react-router-dom";
type CardProps = {
  name: string;
  population: string;
  region: string;
  capital: string;
  flagUrl: string;
  link: string;
};

export const CountryCard = (props: CardProps) => {
  return (
    <>
      <li className="relative max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="bg-cover bg-center h-56"
          src={props.flagUrl}
          aria-label={`Flag of ${props.name}`}
        ></img>

        <div className="p-6">
          <header>
            <h2 className="text-xl font-bold text-gray-800">
              <Link
                to={props.link}
                state={{
                  ...props,
                }}
                className="hover:underline after:absolute after:bottom-0 after:top-0 after:left-0 after:right-0"
              >
                {props.name}
              </Link>{" "}
            </h2>
          </header>

          <p className="mt-2 text-gray-600">
            Population: {props.population.toLocaleString()}
          </p>
          <p>Region: {props.region}</p>
          <p>Capital: {props.capital}</p>
        </div>
      </li>
    </>
  );
};
