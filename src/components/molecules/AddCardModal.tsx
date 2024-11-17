import { useContext, useState } from "react";
import GlobalButton from "../atoms/GlobalButton";
import close from "../../images/icons/close.svg";
import { NUMBER_REGEX } from "../../constant";
import { CardDetailsContext } from "../../providers/CardDetailsProvider";
import moment from "moment";
import Modal from "../atoms/Modal";
const AddCardModal = ({
  closeModal,
}: {
  closeModal: () => void;
}) => {
  const [newCardNumber, setNewCardNumber] = useState("");
  const [error, setError] = useState("");
  const { addCard, cardDetails } = useContext(CardDetailsContext);
  const randomDate = moment(
    new Date(+new Date() - Math.floor(Math.random() * 10000000000))
  ).format("MM/YY");
  const onSubmit = () => {
    const newCardNumberSpaces = newCardNumber.match(/.{1,4}/g)?.join(" ");
    if (
      cardDetails.filter((card) => card.cardNumber == newCardNumberSpaces)
        .length > 0
    ) {
      setError("Card Number already entered");
      return;
    }
    if (newCardNumber.length < 16) {
      setError("Card Number should be 16 digits");
      return;
    }
    if (!NUMBER_REGEX.test(newCardNumber)) {
      setError("Characters are not allowed");
      return;
    }
    addCard({
      cardHolderName: "Mark Johnson",
      expiryDate: randomDate,
      cvv: `${Math.floor(100 + Math.random() * 899)}`,
      cardNumber: newCardNumberSpaces || newCardNumber,
      isFrozen: false,
      transactions: [],
    });
    closeModal();
  };
  return (
    <Modal>
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Add New Card
          </h3>
          <button
            onClick={closeModal}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <img src={close} height={12} width={12} alt="Close" />
          </button>
        </div>
        <div className="flex flex-col gap-5 items-start p-5">
          <span className="text-base ">Card Number</span>
          <input
            type="text"
            onChange={(e) => {
              setError("");
              setNewCardNumber(e.target.value);
            }}
            value={newCardNumber}
            maxLength={16}
            placeholder="1234 1234 1234 1234"
            className={`rounded-md border border-primary-100 w-[calc(100%-40px)] h-10 p-2 outline-none focus:border-primary ${
              error && "!border-red-600"
            }`}
          />
          {error ? <span className="text-sm text-red-600">{error}</span> : null}
        </div>
        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <GlobalButton label="Save" onClick={onSubmit} />
        </div>
      </div>
    </Modal>
  );
};

export default AddCardModal;
