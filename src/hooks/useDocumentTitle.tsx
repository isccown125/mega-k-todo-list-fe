import { useEffect } from "react";

const useDocumentTitle = (title: string) => {
  if (!title) {
    throw new Error("You didn't specify title");
  }
  useEffect(() => {
    document.title = title;
  });
};

export default useDocumentTitle;
