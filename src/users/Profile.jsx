import React from "react";
import FileUpload from "ui/FileUpload";
import Form from "ui/Form";

function Profile() {
  const fields = [
    {
      name: "file",
      as: FileUpload,
      files: [],
      setFiles: () => {},
      allowMultiple: false,
      skipFromPayload: true,
    },
    { name: "email", label: "Email" },
    { name: "password", label: "Password" },
    { name: "name", label: "Name" },
  ];

  return (
    <div>
      <Form
        title="My Profile"
        fields={fields}
        btnLabel="Update"
        onSubmit={() => {}}
      />
    </div>
  );
}

export default Profile;
