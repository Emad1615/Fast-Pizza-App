import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const res = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-dvh bg-slate-100 font-semibold text-2xl">
      <h1>{res.status}</h1>
      <h2>{res.statusText}</h2>
      <p> {res.data || res.message}</p>
      <span className="loader"></span>
      <button
        className="text-sm mt-3 text-yellow-800"
        onClick={() => navigate(-1, { replace: true })}
      >
        ⬅ Go back
      </button>
    </div>
  );
}

export default Error;
