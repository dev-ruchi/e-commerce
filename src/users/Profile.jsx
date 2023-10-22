import React, { useEffect, useState } from "react";
import FileUpload from "ui/FileUpload";
import Form from "ui/Form";
import backend from "utils/backend";

function Profile() {
  const [fields, setFields] = useState([
    {
      name: "file",
      as: FileUpload,
      files: [],
      setFiles: () => {},
      allowMultiple: false,
      skipFromPayload: true,
    },
    { name: "avatar", skipRender: true },
    { name: "name", label: "Name" },
    { name: "email", label: "Email" },
    { name: "password", label: "Password" },
  ]);

  useEffect(() => {
    backend.get("/profile").then(({ data }) => {
      setFields(
        fields.map((field) => {
          if (data[field.name]) {
            return { ...field, value: data[field.name] };
          } else {
            return field;
          }
        }),
      );
    });
  }, []);

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
