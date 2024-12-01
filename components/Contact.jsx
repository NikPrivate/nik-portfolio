import React from "react";
import { contact } from "@/app/data";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="font-sans font-semibold text-lg">Lets work together</h1>
      </div>
      <div className="flex justify-center items-center gap-x-8 p-4 bg-gray-100">
        {contact.map((contacts, index) => (
          <div key={index}>
            <Image
              src={contacts}
              alt="contacts"
              width={35}
              height={35}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
