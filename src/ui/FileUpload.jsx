import React from "react";
import PropTypes from "prop-types";

import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function additionalAttrs(allowMultiple) {
  if (!allowMultiple) {
    return {
      imagePreviewHeight: 170,
      imageCropAspectRatio: "1:1",
      imageResizeTargetWidth: 200,
      imageResizeTargetHeight: 200,
      stylePanelLayout: "compact circle",
      styleLoadIndicatorPosition: "center bottom",
      styleButtonRemoveItemPosition: "center bottom",
    };
  }

  return {};
}

function FileUpload({
  files,
  setFiles,
  maxFiles = 5,
  endPoint = `${process.env.REACT_APP_BACKEND}/files/`,
  allowMultiple = true,
  name,
  labelIdle = 'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
}) {
  return (
    <div className={allowMultiple ? "multiple-file" : "single-file"}>
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={allowMultiple}
        maxFiles={maxFiles}
        server={{
          process: endPoint,
          load: endPoint,
        }}
        name={name}
        labelIdle={labelIdle}
        credits={false}
        {...additionalAttrs(allowMultiple)}
      />
    </div>
  );
}

FileUpload.propTypes = {
  files: PropTypes.array.isRequired, // An array of files is required
  setFiles: PropTypes.func.isRequired, // A function to update files is required
  maxFiles: PropTypes.number, // The maximum number of files is optional and should be a number
  endPoint: PropTypes.string, // The server URL is optional and should be a string
  allowMultiple: PropTypes.bool, // Whether to allow multiple files is optional and should be a boolean
  name: PropTypes.string, // The name attribute is optional and should be a string
  labelIdle: PropTypes.string, // The label text is optional and should be a string
};

export default FileUpload;
