"use client";

import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { logout } from "@/lib";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/userContext";

export default function Logout() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const { fetchUser } = useUser();

  const updateUser = async () => {
    await fetchUser();
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
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign out</ModalHeader>
              <ModalBody>Are you sure you want to sign out?</ModalBody>
              <ModalFooter>
                <Button
                  className=""
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  className="bg-red-500 text-white"
                  onClick={() => {
                    logout().then(() => {
                      router.push("/");
                      onClose();
                      updateUser();
                    });
                  }}
                >
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
