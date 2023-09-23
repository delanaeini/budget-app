import { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";

export default function SpentAmount({ transactions, category }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        style={{
          color:
            category.spentAmount > category.plannedAmount ? "red" : "green",
          background: "white",
        }}
        onClick={() => setModalOpen(true)}
      >
        {category.spentAmount}
      </Button>
      <Modal isOpen={modalOpen}>
        <ModalHeader
          className="bg-primary text-white"
          toggle={() => setModalOpen(false)}
        >
          {category.name.charAt(0).toUpperCase() + category.name.slice(1)}{" "}
          Transactions
        </ModalHeader>
        <ModalBody className="transactions-modal">
          <ul>
            {transactions
              .filter(
                (transaction) =>
                  transaction.transactionCategory === category.name
              )
              .map((t) => (
                <li key={t.id}>
                  <span>{t.title}</span>
                  :&nbsp;
                  <span>{t.amount}</span>
                </li>
              ))}
          </ul>
        </ModalBody>
      </Modal>
    </>
  );
}
