"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const InputFile = React.forwardRef(
  ({ className, preview: externalPreview, ...props }, ref) => {
    const pathname = usePathname();
   
    const [isDragging, setIsDragging] = useState(false);
    const [fileName, setFileName] = useState("");
    const [preview, setPreview] = useState("");
    const [fileType, setFileType] = useState("");

    const getFileType = (file) => {
      if (!file) return "";

      // For URLs or Data URLs
      if (typeof file === "string") {
        if (file.startsWith("data:")) {
          const mimeType = file.split(";")[0].split(":")[1];
          if (mimeType.startsWith("image/")) return "image";
          if (mimeType.startsWith("video/")) return "video";
          return "";
        }

        const extension = file.split(".").pop().toLowerCase();
        if (
          ["jpg", "jpeg", "png", "gif", "webp", "svg", "ico"].includes(
            extension,
          )
        )
          return "image";
        if (["mp4", "webm", "ogg"].includes(extension)) return "video";
        return "";
      }

      // For File objects
      if (file instanceof File) {
        if (file.type.startsWith("image/")) return "image";
        if (file.type.startsWith("video/")) return "video";
      }

      return "";
    };

    useEffect(() => {
      if (externalPreview) {
        setPreview(externalPreview);
        setFileType(getFileType(externalPreview));
      }
    }, [externalPreview]);

    const handleDragEnter = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!props.disabled) {
        setIsDragging(true);
      }
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    };

    const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      if (!props.disabled) {
        const files = e.dataTransfer.files;
        if (files?.length) {
          handleFile(files[0]);
          if (props.onChange) {
            props.onChange({ target: { files } });
          }
        }
      }
    };

    const handleChange = (e) => {
      const files = e.target.files;
      if (files?.length) {
        handleFile(files[0]);
        if (props.onChange) {
          props.onChange(e);
        }
      }
    };

    const handleFile = (file) => {
      setFileName(file.name);
      const type = getFileType(file);
      setFileType(type);

      if (type === "image") {
        if (file.name.endsWith(".svg")) {
          const url = URL.createObjectURL(file);
          setPreview(url);
        } else {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview(reader.result);
          };
          reader.readAsDataURL(file);
        }
      } else if (type === "video") {
        const url = URL.createObjectURL(file);
        setPreview(url);
      }
    };

    const clearFile = (e) => {
      if (!props.disabled) {
        e.stopPropagation();
        setFileName("");
        setPreview("");
        setFileType("");
        if (preview && preview.startsWith("blob:")) {
          URL.revokeObjectURL(preview);
        }
        if (props.onChange) {
          props.onChange({ target: { files: null } });
        }
      }
    };

    const displayPreview = preview || externalPreview;
    const currentFileType = fileType || getFileType(displayPreview);

    return (
      <div className="">
        {props.label && (
          <p className="mb-[12px] text-[14px] leading-[20px] font-medium text-[#DEDEDE]">
            {props.label}
          </p>
        )}
        <div
          className={cn(
            "relative cursor-pointer",
            isDragging && "opacity-70",
            props.disabled && "cursor-not-allowed",
            className,
          )}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="image/*,video/*"
            ref={ref}
            onChange={handleChange}
            className="absolute inset-0 z-10 h-full  w-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
            style={{
              pointerEvents: currentFileType === "video" ? "none" : "auto",
            }}
            {...props}
          />
          <div
            className={cn("transition-colors", isDragging ? "opacity-70" : "")}
            style={props.style}
          >
            {displayPreview ? (
              <div className={`relative h-[160px] w-auto`}>
                {!props.disabled && currentFileType === "video" && (
                  <button
                    onClick={clearFile}
                    className="absolute top-2 right-2 z-20 rounded-full bg-black/50 p-1 transition-colors hover:bg-black/70"
                  >
                    <X className="h-4 w-4 text-white" />
                  </button>
                )}
                {currentFileType === "image" ? (
                  displayPreview.endsWith(".svg") ? (
                    <img
                      src={displayPreview}
                      alt="SVG Preview"
                      className="h-full w-full rounded-lg border border-[#032031] object-contain"
                      onError={(e) => {
                        console.error("SVG failed to load:", e);
                        setPreview("");
                        setFileType("");
                      }}
                    />
                  ) : (
                    <img
                      src={displayPreview}
                      alt="Preview"
                      className="h-full w-full rounded-lg border border-[#032031] object-contain"
                      onError={(e) => {
                        console.error("Image failed to load:", e);
                        setPreview("");
                        setFileType("");
                      }}
                    />
                  )
                ) : currentFileType === "video" ? (
                  <video
                    src={displayPreview}
                    className="h-full w-full rounded-lg border border-[#032031] object-contain"
                    // controls={!props.disabled}
                    controls
                    onError={(e) => {
                      console.error("Video failed to load:", e);
                      setPreview("");
                      setFileType("");
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : null}
              </div>
            ) : (
              <div
                className={`flex ${pathname === "/profile" ? "h-fit" : "h-[160px]"} w-full items-center justify-center rounded-[10px] border-2 border-dotted border-[#9EC0D7] bg-[#EAF1F6] px-3`}
              >
                <p
                  className={`text-center  ${pathname === "/profile" ? "w-[200px] py-3 leading-[29px] lg:w-3/5" : " lg:px-10 leading-[30px] lg:leading-[36px] md:px-2"}  lg:text-[16px] font-medium text-[#737578]`}
                >
                  Click to browse or drag and drop your files
                </p>
                {fileName && (
                  <p className="mt-2 text-sm text-blue-400">
                    Selected: {fileName}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
);

InputFile.displayName = "InputFile";

export { InputFile };
