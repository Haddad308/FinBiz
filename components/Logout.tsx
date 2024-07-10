import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { logout } from "@/lib";
import { useUser } from "@/contexts/userContext";

export default function Logout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { fetchUser } = useUser();

  const updateUser = async () => {
    try {
      await fetchUser(); // Assuming fetchUser() updates the user data
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout(); // Wait for logout to complete first
      await updateUser(); // Then update user data
      // Optionally, navigate to another page
      // router.push("/");
      onClose(); // Close the modal after everything is done
    } catch (error) {
      console.error("Error during logout:", error);
      // Handle logout or updateUser errors here
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="bggr rounded-full border-2 border-b-0  border-blackGray bg-[#f6f6f6] text-lg text-black dark:bg-[#1f1f1f] dark:text-white"
      >
        Logout
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Sign out</ModalHeader>
          <ModalBody>Are you sure you want to sign out?</ModalBody>
          <ModalFooter>
            <Button onPress={onClose}>Close</Button>
            <Button
              className="bg-red-500 text-white"
              onClick={handleLogout}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
