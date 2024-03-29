import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  selectCandidate,
  fetchSelectedCandidatesById,
  deleteCandidate,
} from "../store";
import { singleCandidate } from "../types";

const SingleCandidate = ({ candidate, image }: singleCandidate) => {
  const { id, name, email, website } = candidate;
  const dispatch = useAppDispatch();
  const candidates = useAppSelector(
    (state) => state.selectedCandidates.candidates
  );
  // Set initial state from store
  const [hasSelected, setHasSelected] = useState(() =>
    candidates.some((candidate) => candidate["id"] === id)
  );

  // Assist to Select/Deselect Candidate
  const selectCandidateFn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (hasSelected) {
      dispatch(deleteCandidate(id));
      setHasSelected((prevState) => !prevState);
    } else {
      dispatch(selectCandidate(id));
      dispatch(fetchSelectedCandidatesById(id));
      setHasSelected((prevState) => !prevState);
    }
  };

  return (
    <div
      className="w-96 h-96 md:w-80 xl:w-96 xl:h-96 flex flex-col justify-center border-4 my-2 bg-green-300 rounded-xl my-8"
      key={id}
    >
      <div className="my-4 flex flex-col items-center">
        <img
          className="w-36 h-36 m-4 rounded-full"
          src={image}
          alt="Candidate"
        />
        <div className="text-3xl m-1 ">{name}</div>
        <a href={`mailto:${email}`} className="text-xl m-1 hover:underline">
          {email}
        </a>
      </div>
      <div className="px-4 mt-2 text-2xl flex items-center justify-between">
        <a
          href={`http://${website}`}
          target="_blank"
          rel="noreferrer"
          className="hover:underline text-2xl"
        >
          {website}
        </a>
        <button
          onClick={selectCandidateFn}
          className={
            hasSelected
              ? "bg-blue-600 text-white font-bold border-2 border-white px-1 rounded-md text-xl text-2xl"
              : `bg-yellow-400 border-2 border-black px-1 rounded-md text-xl`
          }
        >
          Select
          {hasSelected ? "ed" : ""}
        </button>
      </div>
    </div>
  );
};

export default SingleCandidate;
