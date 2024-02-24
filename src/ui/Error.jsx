import {  useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const res = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center h-dvh bg-slate-100 font-semibold text-xl">
      <h1>{res.status}</h1>
      <h2>{res.statusText}</h2>
      <p> {res.data || res.message}</p>
      <span className="loader"></span>
      <LinkButton to={"-1"}>⬅ Go back</LinkButton>
    </div>
  );
}

export default Error;
