import React from "react";
import { contact } from "@/app/data";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="mb-8">
      {/* Contact Icons Section */}
      <div className="border dark:border-gray-600 mt-4 flex justify-center items-center gap-x-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
        {contact.map((contacts, index) => (
          <div key={index}>
            <Link
              href={contacts.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={contacts.icon}
                alt="contacts"
                width={35}
                height={35}
                className="cursor-pointer hover:opacity-90 hover:scale-110 transition-transform duration-200"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
