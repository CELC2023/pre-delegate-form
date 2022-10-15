import React, { useEffect, useState } from "react";
import "./FileUpload.scss";
import { Accept, useDropzone } from "react-dropzone";
import { Control, useController } from "react-hook-form";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export interface FileUploadProps {
  name: string;
  label: string;
  required?: boolean;
  accept?: Accept;
  control?: Control<any>;
  icon?: any;
}

const FileUpload: React.FC<FileUploadProps> = ({
  accept = {},
  control,
  label,
  name,
  required = false,
  icon,
}) => {
  const {t} = useTranslation();
  const formattedLabel = label ? (required ? `${label}*` : label) : "";
  const elementName = `file-${name}`;

  const [file, setFile] = useState<File>();

  const {
    field: { onChange, value },
  } = useController({ name, control });

  useEffect(() => {
    if (control) {
      setFile(value);
    }
  }, [control, value]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: accept,
    onDrop(acceptedFiles, fileRejections, event) {
      console.log(acceptedFiles);
      setFile(acceptedFiles[0] || null);
      if (control) {
        onChange(acceptedFiles[0]);
      }
    },
  });

  return (
    <div className={`fileinput${false ? " error" : ""}`}>
      <label className="fileinput--label">
        <span className="fileinput--span">{formattedLabel}</span>
      </label>
      <div className="fileinput--area" {...getRootProps()}>
        {icon && <img alt="" className="fileinput--icon" src={icon} />}
        <label htmlFor={elementName} className="fileinput--labelarea">
          <span className="label-name">{file ? file.name : t("text-drop-files")}</span>
          <span className="label-accepted">{t('text-file-format')} {Object.keys(accept).map((e, i) => i === 0 ? e : `, ${e}`)}</span>
        </label>
        <input
          className="fileinput--element"
          type={"file"}
          id={elementName}
          {...getInputProps()}
        />
      </div>
    </div>
  );
};

export default FileUpload;
