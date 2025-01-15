// src/components/EmailDashboard.js
import React from "react";

function EmailDashboard() {
  const emails = [
    {
      id: 1,
      subject: "Welcome to the Platform!",
      sender: "admin@example.com",
      body: "Hello! This is a welcome email.",
    },
    {
      id: 2,
      subject: "Your Weekly Report",
      sender: "reports@example.com",
      body: "Here is your report for the week.",
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Sidebar */}
      <aside className="col-span-3 bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Folders
        </h2>
        <ul className="mt-4 space-y-2">
          <li>
            <button className="w-full text-left text-gray-800 dark:text-gray-100 hover:underline">
              Inbox
            </button>
          </li>
          <li>
            <button className="w-full text-left text-gray-800 dark:text-gray-100 hover:underline">
              Sent
            </button>
          </li>
          <li>
            <button className="w-full text-left text-gray-800 dark:text-gray-100 hover:underline">
              Drafts
            </button>
          </li>
          <li>
            <button className="w-full text-left text-gray-800 dark:text-gray-100 hover:underline">
              Trash
            </button>
          </li>
        </ul>
      </aside>

      {/* Email List */}
      <section className="col-span-9 bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Inbox
        </h2>
        <ul className="mt-4 space-y-4">
          {emails.map((email) => (
            <li
              key={email.id}
              className="p-4 bg-gray-100 dark:bg-gray-700 rounded hover:shadow-md">
              <h3 className="text-gray-800 dark:text-gray-100 font-semibold">
                {email.subject}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {email.sender}
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-200">
                {email.body}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default EmailDashboard;
