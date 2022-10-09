import React, { useEffect, useState } from "react";
import "./FileUpload.scss";
import { useDropzone } from "react-dropzone";
import { Control, useController } from "react-hook-form";

export interface FileUploadProps {
  name: string;
  label: string;
  required?: boolean;
  accept?: string;
  control?: Control<any>;
}

const FileUpload: React.FC<FileUploadProps> = ({
  accept = "*",
  control,
  label,
  name,
  required = false,
}) => {
  const formattedLabel = label ? (required ? `${label}*` : label) : "";
  const elementName = `file-${name}`;

  const [file, setFile] = useState<File>();

  const {field: {onChange, value}} = useController({name, control});

  useEffect(() => {
    if(control) {
      setFile(value)
    }
  }, [control, value])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop(acceptedFiles, fileRejections, event) {
      console.log(acceptedFiles);
      setFile(acceptedFiles[0] || null);
      if(control) {
        onChange(acceptedFiles[0])
      }
    },
  });

  return (
    <div className={`fileinput${false ? " error" : ""}`}>
      <label className="fileinput--label">
        <span className="fileinput--span">{formattedLabel}</span>
      </label>  
      <div className="fileinput--area" {...getRootProps()}>
          <label htmlFor={elementName}>
            {file ? file.name : "Drop Files Here or Browse"}
          </label>
          <input
            className="fileinput--element"
            type={"file"}
            accept={accept}
            id={elementName}
            {...getInputProps()}
          />
        </div>
    </div>
  );
};

export default FileUpload;
