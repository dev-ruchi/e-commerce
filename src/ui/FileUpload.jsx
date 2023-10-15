import React from "react";

import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function FileUpload({
  files,
  setFiles,
  maxFiles = 5,
  server = `${process.env.REACT_APP_BACKEND}/files`,
  allowMultiple = true,
  name,
  label = 'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
}) {
  return (
    <FilePond
      files={files}
      onupdatefiles={setFiles}
      allowMultiple={allowMultiple}
      maxFiles={maxFiles}
      server={server}
      name={name}
      labelIdle={label}
      credits={false}
    />
  );
}

export default FileUpload;
