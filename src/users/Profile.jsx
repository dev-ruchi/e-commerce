import React, { useEffect, useState } from "react";
import FileUpload from "ui/FileUpload";
import Form from "ui/Form";
import backend from "utils/backend";

function Profile() {
  const [files, setFiles] = useState([]);

  const fields = [
    {
      name: "file",
      as: FileUpload,
      files,
      setFiles,
      allowMultiple: false,
      skipFromPayload: true,
      allowRevert: false,
    },
    { name: "avatar", skipRender: true },
    { name: "name", label: "Name" },
    { name: "email", label: "Email" },
    { name: "phone", label: "Phone" },
    { name: "password", label: "Password", type: "password" },
  ];

  const [data, setData] = useState({
    avatar: "",
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    backend.get("/profile").then(({ data }) => {
      if (data.avatar) {
        const source = data.avatar.replace(
          `${process.env.REACT_APP_BACKEND}/files/`,
          "",
        );
        setFiles([{ source, options: { type: "local" } }]);
      }
      setData({
        avatar: data.avatar,
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: "",
      });
    });
  }, []);

  function onSubmit(values, { setSubmitting }) {
    if (Array.isArray(files) && files.length > 0) {
      values.avatar = files[0].serverId;
    }
    backend.put("/profile", values).finally(() => {
      setSubmitting(false);
    });
  }

  return (
    <div>
      <Form
        title="My Profile"
        fields={fields}
        initialValues={data}
        btnLabel="Update"
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Profile;
