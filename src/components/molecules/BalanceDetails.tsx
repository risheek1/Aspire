import React, { useState } from "react";
import Add from "../../images/Add.svg";
import GlobalButton from "../atoms/GlobalButton";
import AddCardModal from "./AddCardModal";

const BalanceDetails = ({ balance }: { balance: number }) => {
  const [showNewCardBottomsheet, setShowNewCardBottomsheet] = useState(false);
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col gap-2">
        <span className="text-sm">Available Balance</span>
        <div className="flex gap-3 rounded-md items-center">
          <div className="bg-[#01D167] w-10 h-6 rounded-md">
            <span className="text-white font-bold text-center align-middle">
              S$
            </span>
          </div>
          <span className="font-bold text-2xl">
            {balance.toLocaleString("en-EN")}
          </span>
        </div>
      </div>
      <GlobalButton
        label="New card"
        leftImg={Add}
        leftImgClass="w-4 h-4"
        onClick={() => {
          setShowNewCardBottomsheet(true);
        }}
      />
      {showNewCardBottomsheet ? (
        <AddCardModal
          closeModal={() => {
            setShowNewCardBottomsheet(false);
          }}
        />
      ) : null}
    </div>
  );
};

export default BalanceDetails;
