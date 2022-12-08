import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary>I Accept</Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important message for you to accept</p>
    </Modal>
  );
  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Open ModalNon minim anim officia laboris eiusmod velit qui enim
        incididunt tempor dolore et. Dolor ut in aliqua qui. Duis sit veniam
        minim aliqua excepteur consequat veniam quis quis magna ullamco. Laboris
        cupidatat nisi enim tempor laboris Lorem duis amet esse nulla est ut
        exercitation.In non fugiat non dolore dolore est dolore laboris
        exercitation aliqua fugiat voluptate. Laboris est ut proident sit ipsum
        non magna duis ad nisi. Ut voluptate tempor sunt et do.
      </p>
      <p>
        Open ModalNon minim anim officia laboris eiusmod velit qui enim
        incididunt tempor dolore et. Dolor ut in aliqua qui. Duis sit veniam
        minim aliqua excepteur consequat veniam quis quis magna ullamco. Laboris
        cupidatat nisi enim tempor laboris Lorem duis amet esse nulla est ut
        exercitation.In non fugiat non dolore dolore est dolore laboris
        exercitation aliqua fugiat voluptate. Laboris est ut proident sit ipsum
        non magna duis ad nisi. Ut voluptate tempor sunt et do.
      </p>
      <p>
        Open ModalNon minim anim officia laboris eiusmod velit qui enim
        incididunt tempor dolore et. Dolor ut in aliqua qui. Duis sit veniam
        minim aliqua excepteur consequat veniam quis quis magna ullamco. Laboris
        cupidatat nisi enim tempor laboris Lorem duis amet esse nulla est ut
        exercitation.In non fugiat non dolore dolore est dolore laboris
        exercitation aliqua fugiat voluptate. Laboris est ut proident sit ipsum
        non magna duis ad nisi. Ut voluptate tempor sunt et do.
      </p>
      <p>
        Open ModalNon minim anim officia laboris eiusmod velit qui enim
        incididunt tempor dolore et. Dolor ut in aliqua qui. Duis sit veniam
        minim aliqua excepteur consequat veniam quis quis magna ullamco. Laboris
        cupidatat nisi enim tempor laboris Lorem duis amet esse nulla est ut
        exercitation.In non fugiat non dolore dolore est dolore laboris
        exercitation aliqua fugiat voluptate. Laboris est ut proident sit ipsum
        non magna duis ad nisi. Ut voluptate tempor sunt et do.
      </p>
      <p>
        Open ModalNon minim anim officia laboris eiusmod velit qui enim
        incididunt tempor dolore et. Dolor ut in aliqua qui. Duis sit veniam
        minim aliqua excepteur consequat veniam quis quis magna ullamco. Laboris
        cupidatat nisi enim tempor laboris Lorem duis amet esse nulla est ut
        exercitation.In non fugiat non dolore dolore est dolore laboris
        exercitation aliqua fugiat voluptate. Laboris est ut proident sit ipsum
        non magna duis ad nisi. Ut voluptate tempor sunt et do.
      </p>
      <p>
        Open ModalNon minim anim officia laboris eiusmod velit qui enim
        incididunt tempor dolore et. Dolor ut in aliqua qui. Duis sit veniam
        minim aliqua excepteur consequat veniam quis quis magna ullamco. Laboris
        cupidatat nisi enim tempor laboris Lorem duis amet esse nulla est ut
        exercitation.In non fugiat non dolore dolore est dolore laboris
        exercitation aliqua fugiat voluptate. Laboris est ut proident sit ipsum
        non magna duis ad nisi. Ut voluptate tempor sunt et do.
      </p>
      <p>
        Open ModalNon minim anim officia laboris eiusmod velit qui enim
        incididunt tempor dolore et. Dolor ut in aliqua qui. Duis sit veniam
        minim aliqua excepteur consequat veniam quis quis magna ullamco. Laboris
        cupidatat nisi enim tempor laboris Lorem duis amet esse nulla est ut
        exercitation.In non fugiat non dolore dolore est dolore laboris
        exercitation aliqua fugiat voluptate. Laboris est ut proident sit ipsum
        non magna duis ad nisi. Ut voluptate tempor sunt et do.
      </p>
    </div>
  );
};

export default ModalPage;
